:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multibac'
.. highlight: bash

bioconductor-multibac
=====================

.. conda:recipe:: bioconductor-multibac
   :replaces_section_title:
   :noindex:

   Multiomic Batch effect Correction

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MultiBaC.html
   :license: GPL-3
   :recipe: /`bioconductor-multibac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multibac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multibac/meta.yaml>`_

   MultiBaC is a strategy to correct batch effects from multiomic datasets distributed across different labs or data acquisition events. MultiBaC is the first Batch effect correction algorithm that dealing with batch effect correction in multiomics datasets. MultiBaC is able to remove batch effects across different omics generated within separate batches provided that at least one common omic data type is included in all the batches considered.


.. conda:package:: bioconductor-multibac

   |downloads_bioconductor-multibac| |docker_bioconductor-multibac|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-pcamethods: ``>=1.92.0,<1.93.0``
   :depends bioconductor-ropls: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-multibac

   and update with::

      mamba update bioconductor-multibac

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multibac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multibac:<tag>

   (see `bioconductor-multibac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multibac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multibac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multibac
   :alt:   (downloads)
.. |docker_bioconductor-multibac| image:: https://quay.io/repository/biocontainers/bioconductor-multibac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multibac
.. _`bioconductor-multibac/tags`: https://quay.io/repository/biocontainers/bioconductor-multibac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multibac";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multibac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multibac/README.html