.. title:: Package Recipe 'ucsc-htmlcheck'
.. highlight: bash


ucsc-htmlcheck
==============

.. conda:recipe:: ucsc-htmlcheck
   :replaces_section_title:

   Do a little reading and verification of html file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-htmlcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-htmlcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-htmlcheck/meta.yaml>`_

   


.. conda:package:: ucsc-htmlcheck

   |downloads_ucsc-htmlcheck| |docker_ucsc-htmlcheck|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-htmlcheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-htmlcheck

   and update with::

      conda update ucsc-htmlcheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-htmlcheck


.. |required_by_ucsc-htmlcheck| conda:required_by:: ucsc-htmlcheck
.. |downloads_ucsc-htmlcheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-htmlcheck.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-htmlcheck| image:: https://quay.io/repository/biocontainers/ucsc-htmlcheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-htmlcheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-htmlcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-htmlcheck/README.html

