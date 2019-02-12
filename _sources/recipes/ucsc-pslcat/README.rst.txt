.. title:: Package Recipe 'ucsc-pslcat'
.. highlight: bash


ucsc-pslcat
===========

.. conda:recipe:: ucsc-pslcat
   :replaces_section_title:

   concatenate psl files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslcat/meta.yaml>`_

   


.. conda:package:: ucsc-pslcat

   |downloads_ucsc-pslcat| |docker_ucsc-pslcat|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslcat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslcat

   and update with::

      conda update ucsc-pslcat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslcat


.. |required_by_ucsc-pslcat| conda:required_by:: ucsc-pslcat
.. |downloads_ucsc-pslcat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslcat.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslcat| image:: https://quay.io/repository/biocontainers/ucsc-pslcat/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslcat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslcat/README.html

