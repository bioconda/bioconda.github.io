.. title:: Package Recipe 'ucsc-maffilter'
.. highlight: bash


ucsc-maffilter
==============

.. conda:recipe:: ucsc-maffilter
   :replaces_section_title:

   Filter out maf files. Output goes to standard out

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maffilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffilter/meta.yaml>`_

   


.. conda:package:: ucsc-maffilter

   |downloads_ucsc-maffilter| |docker_ucsc-maffilter|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-maffilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maffilter

   and update with::

      conda update ucsc-maffilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maffilter


.. |required_by_ucsc-maffilter| conda:required_by:: ucsc-maffilter
.. |downloads_ucsc-maffilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maffilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maffilter| image:: https://quay.io/repository/biocontainers/ucsc-maffilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-maffilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maffilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maffilter/README.html

