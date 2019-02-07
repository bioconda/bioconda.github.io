.. title:: Package Recipe 'ucsc-para'
.. highlight: bash


ucsc-para
=========

.. conda:recipe:: ucsc-para
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-para <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-para>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-para/meta.yaml>`_

   


.. conda:package:: ucsc-para

   |downloads_ucsc-para| |docker_ucsc-para|

   :versions: 366

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-para|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-para

   and update with::

      conda update ucsc-para

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-para


.. |required_by_ucsc-para| conda:required_by:: ucsc-para
.. |downloads_ucsc-para| image:: https://img.shields.io/conda/dn/bioconda/ucsc-para.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-para| image:: https://quay.io/repository/biocontainers/ucsc-para/status
   :target: https://quay.io/repository/biocontainers/ucsc-para







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-para/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-para/README.html

