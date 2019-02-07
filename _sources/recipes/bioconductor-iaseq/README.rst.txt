.. title:: Package Recipe 'bioconductor-iaseq'
.. highlight: bash


bioconductor-iaseq
==================

.. conda:recipe:: bioconductor-iaseq
   :replaces_section_title:

   It fits correlation motif model to multiple RNAseq or ChIPseq studies to improve detection of allele\-specific events and describe correlation patterns across studies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-iaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iaseq/meta.yaml>`_
   :links: biotools: :biotools:`iaseq`, doi: :doi:`10.1186/1471-2164-13-681`

   


.. conda:package:: bioconductor-iaseq

   |downloads_bioconductor-iaseq| |docker_bioconductor-iaseq|

   :versions: 1.26.1, 1.24.0, 1.22.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-iaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iaseq

   and update with::

      conda update bioconductor-iaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iaseq


.. |required_by_bioconductor-iaseq| conda:required_by:: bioconductor-iaseq
.. |downloads_bioconductor-iaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iaseq| image:: https://quay.io/repository/biocontainers/bioconductor-iaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iaseq/README.html

