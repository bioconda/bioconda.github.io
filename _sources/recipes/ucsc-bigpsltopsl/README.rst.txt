.. title:: Package Recipe 'ucsc-bigpsltopsl'
.. highlight: bash


ucsc-bigpsltopsl
================

.. conda:recipe:: ucsc-bigpsltopsl
   :replaces_section_title:

   convert bigPsl file to psl

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigpsltopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigpsltopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigpsltopsl/meta.yaml>`_

   


.. conda:package:: ucsc-bigpsltopsl

   |downloads_ucsc-bigpsltopsl| |docker_ucsc-bigpsltopsl|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigpsltopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigpsltopsl

   and update with::

      conda update ucsc-bigpsltopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigpsltopsl


.. |required_by_ucsc-bigpsltopsl| conda:required_by:: ucsc-bigpsltopsl
.. |downloads_ucsc-bigpsltopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigpsltopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigpsltopsl| image:: https://quay.io/repository/biocontainers/ucsc-bigpsltopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigpsltopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigpsltopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigpsltopsl/README.html

