.. title:: Package Recipe 'bioconductor-genextender'
.. highlight: bash


bioconductor-genextender
========================

.. conda:recipe:: bioconductor-genextender
   :replaces_section_title:

   geneXtendeR optimizes the functional annotation of ChIP\-seq peaks by exploring relative differences in annotating ChIP\-seq peak sets to variable\-length gene bodies.  In contrast to prior techniques\, geneXtendeR considers peak annotations beyond just the closest gene\, allowing users to see peak summary statistics for the first\-closest gene\, second\-closest gene\, ...\, n\-closest gene whilst ranking the output according to biologically relevant events and iteratively comparing the fidelity of peak\-to\-gene overlap across a user\-defined range of upstream and downstream extensions on the original boundaries of each gene\'s coordinates.  Since different ChIP\-seq peak callers produce different differentially enriched peaks with a large variance in peak length distribution and total peak count\, annotating peak lists with their nearest genes can often be a noisy process.  As such\, the goal of geneXtendeR is to robustly link differentially enriched peaks with their respective genes\, thereby aiding experimental follow\-up and validation in designing primers for a set of prospective gene candidates during qPCR.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geneXtendeR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-genextender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genextender/meta.yaml>`_

   


.. conda:package:: bioconductor-genextender

   |downloads_bioconductor-genextender| |docker_bioconductor-genextender|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-networkd3`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-snowballc`  :conda:package:`r-tm`  :conda:package:`r-wordcloud`  

   :required~by: |required_by_bioconductor-genextender|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genextender

   and update with::

      conda update bioconductor-genextender

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genextender


.. |required_by_bioconductor-genextender| conda:required_by:: bioconductor-genextender
.. |downloads_bioconductor-genextender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genextender.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genextender| image:: https://quay.io/repository/biocontainers/bioconductor-genextender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genextender







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genextender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genextender/README.html

