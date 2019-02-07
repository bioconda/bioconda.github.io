.. title:: Package Recipe 'ucsc-hubcheck'
.. highlight: bash


ucsc-hubcheck
=============

.. conda:recipe:: ucsc-hubcheck
   :replaces_section_title:

   Check a track data hub for integrity.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hubcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubcheck/meta.yaml>`_

   


.. conda:package:: ucsc-hubcheck

   |downloads_ucsc-hubcheck| |docker_ucsc-hubcheck|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hubcheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hubcheck

   and update with::

      conda update ucsc-hubcheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hubcheck


.. |required_by_ucsc-hubcheck| conda:required_by:: ucsc-hubcheck
.. |downloads_ucsc-hubcheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hubcheck.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hubcheck| image:: https://quay.io/repository/biocontainers/ucsc-hubcheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-hubcheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hubcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hubcheck/README.html

