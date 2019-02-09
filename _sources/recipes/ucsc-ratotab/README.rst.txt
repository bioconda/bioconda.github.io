.. title:: Package Recipe 'ucsc-ratotab'
.. highlight: bash


ucsc-ratotab
============

.. conda:recipe:: ucsc-ratotab
   :replaces_section_title:

   Convert ra file to table.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-ratotab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ratotab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ratotab/meta.yaml>`_

   


.. conda:package:: ucsc-ratotab

   |downloads_ucsc-ratotab| |docker_ucsc-ratotab|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-ratotab|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-ratotab

   and update with::

      conda update ucsc-ratotab

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-ratotab


.. |required_by_ucsc-ratotab| conda:required_by:: ucsc-ratotab
.. |downloads_ucsc-ratotab| image:: https://img.shields.io/conda/dn/bioconda/ucsc-ratotab.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-ratotab| image:: https://quay.io/repository/biocontainers/ucsc-ratotab/status
   :target: https://quay.io/repository/biocontainers/ucsc-ratotab







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-ratotab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-ratotab/README.html

