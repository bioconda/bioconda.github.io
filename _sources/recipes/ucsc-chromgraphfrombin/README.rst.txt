.. title:: Package Recipe 'ucsc-chromgraphfrombin'
.. highlight: bash


ucsc-chromgraphfrombin
======================

.. conda:recipe:: ucsc-chromgraphfrombin
   :replaces_section_title:

   Convert chromGraph binary to ascii format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chromgraphfrombin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphfrombin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chromgraphfrombin/meta.yaml>`_

   


.. conda:package:: ucsc-chromgraphfrombin

   |downloads_ucsc-chromgraphfrombin| |docker_ucsc-chromgraphfrombin|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chromgraphfrombin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chromgraphfrombin

   and update with::

      conda update ucsc-chromgraphfrombin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chromgraphfrombin


.. |required_by_ucsc-chromgraphfrombin| conda:required_by:: ucsc-chromgraphfrombin
.. |downloads_ucsc-chromgraphfrombin| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chromgraphfrombin.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chromgraphfrombin| image:: https://quay.io/repository/biocontainers/ucsc-chromgraphfrombin/status
   :target: https://quay.io/repository/biocontainers/ucsc-chromgraphfrombin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chromgraphfrombin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chromgraphfrombin/README.html

