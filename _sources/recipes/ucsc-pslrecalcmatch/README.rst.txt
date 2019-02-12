.. title:: Package Recipe 'ucsc-pslrecalcmatch'
.. highlight: bash


ucsc-pslrecalcmatch
===================

.. conda:recipe:: ucsc-pslrecalcmatch
   :replaces_section_title:

   Recalculate match\,mismatch\,repMatch columns in psl file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslrecalcmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslrecalcmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslrecalcmatch/meta.yaml>`_

   


.. conda:package:: ucsc-pslrecalcmatch

   |downloads_ucsc-pslrecalcmatch| |docker_ucsc-pslrecalcmatch|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslrecalcmatch|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslrecalcmatch

   and update with::

      conda update ucsc-pslrecalcmatch

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslrecalcmatch


.. |required_by_ucsc-pslrecalcmatch| conda:required_by:: ucsc-pslrecalcmatch
.. |downloads_ucsc-pslrecalcmatch| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslrecalcmatch.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslrecalcmatch| image:: https://quay.io/repository/biocontainers/ucsc-pslrecalcmatch/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslrecalcmatch







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslrecalcmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslrecalcmatch/README.html

