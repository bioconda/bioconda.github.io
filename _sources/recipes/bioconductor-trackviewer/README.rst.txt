.. title:: Package Recipe 'bioconductor-trackviewer'
.. highlight: bash


bioconductor-trackviewer
========================

.. conda:recipe:: bioconductor-trackviewer
   :replaces_section_title:

   Visualize mapped reads along with annotation as track layers for NGS dataset such as ChIP\-seq\, RNA\-seq\, miRNA\-seq\, DNA\-seq\, SNPs and methylation data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/trackViewer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-trackviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer/meta.yaml>`_
   :links: biotools: :biotools:`trackviewer`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-trackviewer

   |downloads_bioconductor-trackviewer| |docker_bioconductor-trackviewer|

   :versions: 1.18.0, 1.16.1, 1.14.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-interactionset` >=1.10.0,<1.11.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-grimport`  :conda:package:`r-htmlwidgets`  :conda:package:`r-plotrix`  :conda:package:`r-scales`  

   :required~by: |required_by_bioconductor-trackviewer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trackviewer

   and update with::

      conda update bioconductor-trackviewer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-trackviewer


.. |required_by_bioconductor-trackviewer| conda:required_by:: bioconductor-trackviewer
.. |downloads_bioconductor-trackviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trackviewer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-trackviewer| image:: https://quay.io/repository/biocontainers/bioconductor-trackviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trackviewer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html

