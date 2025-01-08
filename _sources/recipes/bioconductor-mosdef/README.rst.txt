:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosdef'
.. highlight: bash

bioconductor-mosdef
===================

.. conda:recipe:: bioconductor-mosdef
   :replaces_section_title:
   :noindex:

   MOSt frequently used and useful Differential Expression Functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mosdef.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mosdef <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosdef>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosdef/meta.yaml>`_

   This package provides functionality to run a number of tasks in the differential expression analysis workflow. This encompasses the most widely used steps\, from running various enrichment analysis tools with a unified interface to creating plots and beautifying table components linking to external websites and databases. This streamlines the generation of comprehensive analysis reports.


.. conda:package:: bioconductor-mosdef

   |downloads_bioconductor-mosdef| |docker_bioconductor-mosdef|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-goseq: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-topgo: ``>=2.58.0,<2.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-htmltools: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
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

      mamba install bioconductor-mosdef

   and update with::

      mamba update bioconductor-mosdef

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosdef

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosdef:<tag>

   (see `bioconductor-mosdef/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosdef| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosdef.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosdef
   :alt:   (downloads)
.. |docker_bioconductor-mosdef| image:: https://quay.io/repository/biocontainers/bioconductor-mosdef/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosdef
.. _`bioconductor-mosdef/tags`: https://quay.io/repository/biocontainers/bioconductor-mosdef?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosdef";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosdef/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosdef/README.html