.. title:: Package Recipe 'ucsc-axttomaf'
.. highlight: bash


ucsc-axttomaf
=============

.. conda:recipe:: ucsc-axttomaf
   :replaces_section_title:

   Convert from axt to maf format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axttomaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axttomaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axttomaf/meta.yaml>`_

   


.. conda:package:: ucsc-axttomaf

   |downloads_ucsc-axttomaf| |docker_ucsc-axttomaf|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-axttomaf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axttomaf

   and update with::

      conda update ucsc-axttomaf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-axttomaf


.. |required_by_ucsc-axttomaf| conda:required_by:: ucsc-axttomaf
.. |downloads_ucsc-axttomaf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axttomaf.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axttomaf| image:: https://quay.io/repository/biocontainers/ucsc-axttomaf/status
   :target: https://quay.io/repository/biocontainers/ucsc-axttomaf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axttomaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axttomaf/README.html

