:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbu'
.. highlight: bash

bioconductor-simbu
==================

.. conda:recipe:: bioconductor-simbu
   :replaces_section_title:
   :noindex:

   Simulate Bulk RNA\-seq Datasets from Single\-Cell Datasets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SimBu.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-simbu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbu/meta.yaml>`_

   SimBu can be used to simulate bulk RNA\-seq datasets with known cell type fractions. You can either use your own single\-cell study for the simulation or the sfaira database. Different pre\-defined simulation scenarios exist\, as are options to run custom simulations. Additionally\, expression values can be adapted by adding an mRNA bias\, which produces more biologically relevant simulations.


.. conda:package:: bioconductor-simbu

   |downloads_bioconductor-simbu| |docker_bioconductor-simbu|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.9.0,<1.10.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-phyloseq: ``>=1.42.0,<1.43.0``
   :depends bioconductor-sparsematrixstats: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: ``>=1.3.3``
   :depends r-proxyc: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reticulate: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simbu

   and update with::

      conda update bioconductor-simbu

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simbu:<tag>

   (see `bioconductor-simbu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simbu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbu
   :alt:   (downloads)
.. |docker_bioconductor-simbu| image:: https://quay.io/repository/biocontainers/bioconductor-simbu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbu
.. _`bioconductor-simbu/tags`: https://quay.io/repository/biocontainers/bioconductor-simbu?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simbu";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbu/README.html