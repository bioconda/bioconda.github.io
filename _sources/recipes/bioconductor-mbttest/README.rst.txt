.. title:: Package Recipe 'bioconductor-mbttest'
.. highlight: bash


bioconductor-mbttest
====================

.. conda:recipe:: bioconductor-mbttest
   :replaces_section_title:

   MBttest method was developed from beta t\-test method of Baggerly et al\(2003\). Compared to baySeq \(Hard castle and Kelly 2010\)\, DESeq \(Anders and Huber 2010\) and exact test \(Robinson and Smyth 2007\, 2008\) and the GLM of McCarthy et al\(2012\)\, MBttest is of high work efficiency\,that is\, it has high power\, high conservativeness of FDR estimation and high stability. MBttest is suit\- able to transcriptomic data\, tag data\, SAGE data \(count data\) from small samples or a few replicate libraries. It can be used to identify genes\, mRNA isoforms or tags differentially expressed between two conditions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MBttest.html
   :license: GPL-3
   :recipe: /`bioconductor-mbttest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbttest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbttest/meta.yaml>`_
   :links: biotools: :biotools:`mbttest`, doi: :doi:`10.1371/journal.pone.0123658`

   


.. conda:package:: bioconductor-mbttest

   |downloads_bioconductor-mbttest| |docker_bioconductor-mbttest|

   :versions: 1.10.0, 1.8.1, 1.5.0, 1.4.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-gtools`  

   :required~by: |required_by_bioconductor-mbttest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbttest

   and update with::

      conda update bioconductor-mbttest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mbttest


.. |required_by_bioconductor-mbttest| conda:required_by:: bioconductor-mbttest
.. |downloads_bioconductor-mbttest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbttest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mbttest| image:: https://quay.io/repository/biocontainers/bioconductor-mbttest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbttest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbttest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbttest/README.html

