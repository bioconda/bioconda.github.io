.. title:: Package Recipe 'ucsc-netchainsubset'
.. highlight: bash


ucsc-netchainsubset
===================

.. conda:recipe:: ucsc-netchainsubset
   :replaces_section_title:

   Create chain file with subset of chains that appear in the net

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-netchainsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netchainsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netchainsubset/meta.yaml>`_

   


.. conda:package:: ucsc-netchainsubset

   |downloads_ucsc-netchainsubset| |docker_ucsc-netchainsubset|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-netchainsubset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-netchainsubset

   and update with::

      conda update ucsc-netchainsubset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-netchainsubset


.. |required_by_ucsc-netchainsubset| conda:required_by:: ucsc-netchainsubset
.. |downloads_ucsc-netchainsubset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-netchainsubset.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-netchainsubset| image:: https://quay.io/repository/biocontainers/ucsc-netchainsubset/status
   :target: https://quay.io/repository/biocontainers/ucsc-netchainsubset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-netchainsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-netchainsubset/README.html

