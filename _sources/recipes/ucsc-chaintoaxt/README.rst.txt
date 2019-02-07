.. title:: Package Recipe 'ucsc-chaintoaxt'
.. highlight: bash


ucsc-chaintoaxt
===============

.. conda:recipe:: ucsc-chaintoaxt
   :replaces_section_title:

   Convert from chain to axt file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chaintoaxt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintoaxt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaintoaxt/meta.yaml>`_

   


.. conda:package:: ucsc-chaintoaxt

   |downloads_ucsc-chaintoaxt| |docker_ucsc-chaintoaxt|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chaintoaxt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chaintoaxt

   and update with::

      conda update ucsc-chaintoaxt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chaintoaxt


.. |required_by_ucsc-chaintoaxt| conda:required_by:: ucsc-chaintoaxt
.. |downloads_ucsc-chaintoaxt| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chaintoaxt.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chaintoaxt| image:: https://quay.io/repository/biocontainers/ucsc-chaintoaxt/status
   :target: https://quay.io/repository/biocontainers/ucsc-chaintoaxt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chaintoaxt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chaintoaxt/README.html

