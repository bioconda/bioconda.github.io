:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bindingsitefinder'
.. highlight: bash

bioconductor-bindingsitefinder
==============================

.. conda:recipe:: bioconductor-bindingsitefinder
   :replaces_section_title:
   :noindex:

   Binding site defintion based on iCLIP data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BindingSiteFinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bindingsitefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bindingsitefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bindingsitefinder/meta.yaml>`_

   Precise knowledge on the binding sites of an RNA\-binding protein \(RBP\) is key to understand \(post\-\) transcriptional regulatory processes. Here we present a workflow that describes how exact binding sites can be defined from iCLIP data. The package provides functions for binding site definition and result visualization. For details please see the vignette.


.. conda:package:: bioconductor-bindingsitefinder

   |downloads_bioconductor-bindingsitefinder| |docker_bioconductor-bindingsitefinder|

   :versions:
      
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggdist: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-kableextra: 
   :depends r-lifecycle: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bindingsitefinder

   and update with::

      mamba update bioconductor-bindingsitefinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bindingsitefinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bindingsitefinder:<tag>

   (see `bioconductor-bindingsitefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bindingsitefinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bindingsitefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bindingsitefinder
   :alt:   (downloads)
.. |docker_bioconductor-bindingsitefinder| image:: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder
.. _`bioconductor-bindingsitefinder/tags`: https://quay.io/repository/biocontainers/bioconductor-bindingsitefinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bindingsitefinder";
        var versions = ["2.4.0","2.0.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bindingsitefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bindingsitefinder/README.html