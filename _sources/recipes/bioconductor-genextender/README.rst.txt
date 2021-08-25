:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genextender'
.. highlight: bash

bioconductor-genextender
========================

.. conda:recipe:: bioconductor-genextender
   :replaces_section_title:
   :noindex:

   Optimized Functional Annotation Of ChIP\-seq Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/geneXtendeR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-genextender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender/meta.yaml>`_

   geneXtendeR optimizes the functional annotation of ChIP\-seq peaks by exploring relative differences in annotating ChIP\-seq peak sets to variable\-length gene bodies.  In contrast to prior techniques\, geneXtendeR considers peak annotations beyond just the closest gene\, allowing users to see peak summary statistics for the first\-closest gene\, second\-closest gene\, ...\, n\-closest gene whilst ranking the output according to biologically relevant events and iteratively comparing the fidelity of peak\-to\-gene overlap across a user\-defined range of upstream and downstream extensions on the original boundaries of each gene\'s coordinates.  Since different ChIP\-seq peak callers produce different differentially enriched peaks with a large variance in peak length distribution and total peak count\, annotating peak lists with their nearest genes can often be a noisy process.  As such\, the goal of geneXtendeR is to robustly link differentially enriched peaks with their respective genes\, thereby aiding experimental follow\-up and validation in designing primers for a set of prospective gene candidates during qPCR.


.. conda:package:: bioconductor-genextender

   |downloads_bioconductor-genextender| |docker_bioconductor-genextender|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biocstyle: ``>=2.20.0,<2.21.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-org.rn.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-networkd3: 
   :depends r-rcolorbrewer: 
   :depends r-snowballc: 
   :depends r-tm: 
   :depends r-wordcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genextender

   and update with::

      conda update bioconductor-genextender

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genextender:<tag>

   (see `bioconductor-genextender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genextender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genextender.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genextender
   :alt:   (downloads)
.. |docker_bioconductor-genextender| image:: https://quay.io/repository/biocontainers/bioconductor-genextender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genextender
.. _`bioconductor-genextender/tags`: https://quay.io/repository/biocontainers/bioconductor-genextender?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genextender";
        var versions = ["1.18.0","1.16.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genextender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genextender/README.html