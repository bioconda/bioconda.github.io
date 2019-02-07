.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38'
.. highlight: bash


bioconductor-bsgenome.hsapiens.ucsc.hg38
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38
   :replaces_section_title:

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, Dec. 2013\) and stored in Biostrings objects.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38|

   :versions: 1.4.1

   :depends: :conda:package:`bioconductor-bsgenome` >=1.35.16 :conda:package:`r-base` 3.3.2* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-bsgenome.hsapiens.ucsc.hg38|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.hsapiens.ucsc.hg38

   and update with::

      conda update bioconductor-bsgenome.hsapiens.ucsc.hg38

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38


.. |required_by_bioconductor-bsgenome.hsapiens.ucsc.hg38| conda:required_by:: bioconductor-bsgenome.hsapiens.ucsc.hg38
.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38/README.html

