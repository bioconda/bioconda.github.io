.. title:: Package Recipe 'ucsc-mafaddirows'
.. highlight: bash


ucsc-mafaddirows
================

.. conda:recipe:: ucsc-mafaddirows
   :replaces_section_title:

   add \'i\' rows to a maf

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafaddirows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddirows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddirows/meta.yaml>`_

   


.. conda:package:: ucsc-mafaddirows

   |downloads_ucsc-mafaddirows| |docker_ucsc-mafaddirows|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafaddirows|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafaddirows

   and update with::

      conda update ucsc-mafaddirows

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafaddirows


.. |required_by_ucsc-mafaddirows| conda:required_by:: ucsc-mafaddirows
.. |downloads_ucsc-mafaddirows| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafaddirows.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafaddirows| image:: https://quay.io/repository/biocontainers/ucsc-mafaddirows/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafaddirows







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafaddirows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafaddirows/README.html

