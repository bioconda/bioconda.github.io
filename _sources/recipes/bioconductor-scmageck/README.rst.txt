:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmageck'
.. highlight: bash

bioconductor-scmageck
=====================

.. conda:recipe:: bioconductor-scmageck
   :replaces_section_title:
   :noindex:

   Identify genes associated with multiple expression phenotypes in single\-cell CRISPR screening data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scMAGeCK.html
   :license: BSD_2_clause
   :recipe: /`bioconductor-scmageck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmageck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmageck/meta.yaml>`_

   scMAGeCK is a computational model to identify genes associated with multiple expression phenotypes from CRISPR screening coupled with single\-cell RNA sequencing data \(CROP\-seq\)


.. conda:package:: bioconductor-scmageck

   |downloads_bioconductor-scmageck| |docker_bioconductor-scmageck|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmageck

   and update with::

      conda update bioconductor-scmageck

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmageck:<tag>

   (see `bioconductor-scmageck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmageck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmageck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmageck
   :alt:   (downloads)
.. |docker_bioconductor-scmageck| image:: https://quay.io/repository/biocontainers/bioconductor-scmageck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmageck
.. _`bioconductor-scmageck/tags`: https://quay.io/repository/biocontainers/bioconductor-scmageck?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmageck";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmageck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmageck/README.html