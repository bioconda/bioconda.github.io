.. title:: Package Recipe 'ucsc-headrest'
.. highlight: bash


ucsc-headrest
=============

.. conda:recipe:: ucsc-headrest
   :replaces_section_title:

   Return all \*but\* the first N lines of a file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-headrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-headrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-headrest/meta.yaml>`_

   


.. conda:package:: ucsc-headrest

   |downloads_ucsc-headrest| |docker_ucsc-headrest|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-headrest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-headrest

   and update with::

      conda update ucsc-headrest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-headrest


.. |required_by_ucsc-headrest| conda:required_by:: ucsc-headrest
.. |downloads_ucsc-headrest| image:: https://img.shields.io/conda/dn/bioconda/ucsc-headrest.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-headrest| image:: https://quay.io/repository/biocontainers/ucsc-headrest/status
   :target: https://quay.io/repository/biocontainers/ucsc-headrest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-headrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-headrest/README.html

