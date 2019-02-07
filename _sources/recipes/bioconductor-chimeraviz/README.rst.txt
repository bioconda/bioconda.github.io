.. title:: Package Recipe 'bioconductor-chimeraviz'
.. highlight: bash


bioconductor-chimeraviz
=======================

.. conda:recipe:: bioconductor-chimeraviz
   :replaces_section_title:

   chimeraviz manages data from fusion gene finders and provides useful visualization tools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chimeraviz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chimeraviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimeraviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimeraviz/meta.yaml>`_

   


.. conda:package:: bioconductor-chimeraviz

   |downloads_bioconductor-chimeraviz| |docker_bioconductor-chimeraviz|

   :versions: 1.8.0, 1.6.2, 1.0.4

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-annotationfilter` >=1.6.0,<1.7.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-argumentcheck`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-dt`  :conda:package:`r-plyr`  :conda:package:`r-rcircos`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rmarkdown`  

   :required~by: |required_by_bioconductor-chimeraviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chimeraviz

   and update with::

      conda update bioconductor-chimeraviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chimeraviz


.. |required_by_bioconductor-chimeraviz| conda:required_by:: bioconductor-chimeraviz
.. |downloads_bioconductor-chimeraviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimeraviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chimeraviz| image:: https://quay.io/repository/biocontainers/bioconductor-chimeraviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimeraviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimeraviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimeraviz/README.html

