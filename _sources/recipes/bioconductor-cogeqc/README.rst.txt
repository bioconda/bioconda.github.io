:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogeqc'
.. highlight: bash

bioconductor-cogeqc
===================

.. conda:recipe:: bioconductor-cogeqc
   :replaces_section_title:
   :noindex:

   Systematic quality checks on comparative genomics analyses

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/cogeqc.html
   :license: GPL-3
   :recipe: /`bioconductor-cogeqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc/meta.yaml>`_

   cogeqc aims to facilitate systematic quality checks on standard comparative genomics analyses to help researchers detect issues and select the most suitable parameters for each data set. cogeqc can be used to asses\: i. genome assembly quality with BUSCOs\; ii. orthogroup inference using a protein domain\-based approach and\; iii. synteny detection using synteny network properties. There are also data visualization functions to explore QC summary statistics.


.. conda:package:: bioconductor-cogeqc

   |downloads_bioconductor-cogeqc| |docker_bioconductor-cogeqc|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-ggtree: ``>=3.6.0,<3.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cogeqc

   and update with::

      conda update bioconductor-cogeqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogeqc:<tag>

   (see `bioconductor-cogeqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogeqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogeqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogeqc
   :alt:   (downloads)
.. |docker_bioconductor-cogeqc| image:: https://quay.io/repository/biocontainers/bioconductor-cogeqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogeqc
.. _`bioconductor-cogeqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cogeqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogeqc";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html