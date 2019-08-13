:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regionreport'
.. highlight: bash

bioconductor-regionreport
=========================

.. conda:recipe:: bioconductor-regionreport
   :replaces_section_title:

   Generate HTML or PDF reports to explore a set of regions such as the results from annotation\-agnostic expression analysis of RNA\-seq data at base\-pair resolution performed by derfinder. You can also create reports for DESeq2 or edgeR results.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/regionReport.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regionreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regionreport/meta.yaml>`_

   


.. conda:package:: bioconductor-regionreport

   |downloads_bioconductor-regionreport| |docker_bioconductor-regionreport|

   :versions: 1.18.2-0, 1.16.1-0
   
   :depends bioconductor-biocstyle: >=2.12.0,<2.13.0
   :depends bioconductor-deformats: >=1.12.0,<1.13.0
   :depends bioconductor-derfinder: >=1.18.0,<1.19.0
   :depends bioconductor-deseq2: >=1.24.0,<1.25.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-knitcitations: >=1.0.1
   :depends r-knitr: >=1.6
   :depends r-knitrbootstrap: >=0.9.0
   :depends r-refmanager: 
   :depends r-rmarkdown: >=0.9.5
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-regionreport

   and update with::

      conda update bioconductor-regionreport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regionreport:<tag>

   (see `bioconductor-regionreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regionreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regionreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regionreport
   :alt:   (downloads)
.. |docker_bioconductor-regionreport| image:: https://quay.io/repository/biocontainers/bioconductor-regionreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regionreport
.. _`bioconductor-regionreport/tags`: https://quay.io/repository/biocontainers/bioconductor-regionreport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regionreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regionreport/README.html