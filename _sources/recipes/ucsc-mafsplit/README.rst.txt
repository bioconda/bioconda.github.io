.. title:: Package Recipe 'ucsc-mafsplit'
.. highlight: bash


ucsc-mafsplit
=============

.. conda:recipe:: ucsc-mafsplit
   :replaces_section_title:

   Split multiple alignment files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsplit/meta.yaml>`_

   


.. conda:package:: ucsc-mafsplit

   |downloads_ucsc-mafsplit| |docker_ucsc-mafsplit|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafsplit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafsplit

   and update with::

      conda update ucsc-mafsplit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafsplit


.. |required_by_ucsc-mafsplit| conda:required_by:: ucsc-mafsplit
.. |downloads_ucsc-mafsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafsplit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafsplit| image:: https://quay.io/repository/biocontainers/ucsc-mafsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafsplit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafsplit/README.html

