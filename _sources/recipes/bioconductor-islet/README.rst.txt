:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-islet'
.. highlight: bash

bioconductor-islet
==================

.. conda:recipe:: bioconductor-islet
   :replaces_section_title:
   :noindex:

   Individual\-Specific ceLl typE referencing Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ISLET.html
   :license: GPL-2
   :recipe: /`bioconductor-islet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-islet/meta.yaml>`_

   ISLET is a method to conduct signal deconvolution for general \-omics data. It can estimate the individual\-specific and cell\-type\-specific reference panels\, when there are multiple samples observed from each subject. It takes the input of the observed mixture data \(feature by sample matrix\)\, and the cell type mixture proportions \(sample by cell type matrix\)\, and the sample\-to\-subject information. It can solve for the reference panel on the individual\-basis and conduct test to identify cell\-type\-specific differential expression \(csDE\) genes. It also improves estimated cell type mixture proportions by integrating personalized reference panels.


.. conda:package:: bioconductor-islet

   |downloads_bioconductor-islet| |docker_bioconductor-islet|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lme4: 
   :depends r-matrix: 
   :depends r-nnls: 
   :depends r-purrr: 
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

      mamba install bioconductor-islet

   and update with::

      mamba update bioconductor-islet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-islet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-islet:<tag>

   (see `bioconductor-islet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-islet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-islet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-islet
   :alt:   (downloads)
.. |docker_bioconductor-islet| image:: https://quay.io/repository/biocontainers/bioconductor-islet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-islet
.. _`bioconductor-islet/tags`: https://quay.io/repository/biocontainers/bioconductor-islet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-islet";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-islet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-islet/README.html