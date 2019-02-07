.. title:: Package Recipe 'bioconductor-regionreport'
.. highlight: bash


bioconductor-regionreport
=========================

.. conda:recipe:: bioconductor-regionreport
   :replaces_section_title:

   Generate HTML or PDF reports to explore a set of regions such as the results from annotation\-agnostic expression analysis of RNA\-seq data at base\-pair resolution performed by derfinder. You can also create reports for DESeq2 or edgeR results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/regionReport.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regionreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport/meta.yaml>`_

   


.. conda:package:: bioconductor-regionreport

   |downloads_bioconductor-regionreport| |docker_bioconductor-regionreport|

   :versions: 1.16.1

   :depends: :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-deformats` >=1.10.0,<1.11.0 :conda:package:`bioconductor-derfinder` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-knitcitations` >=1.0.1 :conda:package:`r-knitr` >=1.6 :conda:package:`r-knitrbootstrap` >=0.9.0 :conda:package:`r-refmanager`  :conda:package:`r-rmarkdown` >=0.9.5 

   :required~by: |required_by_bioconductor-regionreport|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regionreport

   and update with::

      conda update bioconductor-regionreport

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-regionreport


.. |required_by_bioconductor-regionreport| conda:required_by:: bioconductor-regionreport
.. |downloads_bioconductor-regionreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionreport.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-regionreport| image:: https://quay.io/repository/biocontainers/bioconductor-regionreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionreport







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionreport/README.html

