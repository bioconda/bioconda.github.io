.. title:: Package Recipe 'ucsc-maftoaxt'
.. highlight: bash


ucsc-maftoaxt
=============

.. conda:recipe:: ucsc-maftoaxt
   :replaces_section_title:

   Convert from maf to axt format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maftoaxt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftoaxt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftoaxt/meta.yaml>`_

   


.. conda:package:: ucsc-maftoaxt

   |downloads_ucsc-maftoaxt| |docker_ucsc-maftoaxt|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-maftoaxt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maftoaxt

   and update with::

      conda update ucsc-maftoaxt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maftoaxt


.. |required_by_ucsc-maftoaxt| conda:required_by:: ucsc-maftoaxt
.. |downloads_ucsc-maftoaxt| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maftoaxt.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maftoaxt| image:: https://quay.io/repository/biocontainers/ucsc-maftoaxt/status
   :target: https://quay.io/repository/biocontainers/ucsc-maftoaxt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maftoaxt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maftoaxt/README.html

