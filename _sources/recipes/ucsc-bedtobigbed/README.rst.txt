.. title:: Package Recipe 'ucsc-bedtobigbed'
.. highlight: bash


ucsc-bedtobigbed
================

.. conda:recipe:: ucsc-bedtobigbed
   :replaces_section_title:

   Convert bed file to bigBed. \(BigBed version\: 4\)

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedtobigbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtobigbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtobigbed/meta.yaml>`_

   


.. conda:package:: ucsc-bedtobigbed

   |downloads_ucsc-bedtobigbed| |docker_ucsc-bedtobigbed|

   :versions: 366, 357, 332, 324, 323

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedtobigbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedtobigbed

   and update with::

      conda update ucsc-bedtobigbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedtobigbed


.. |required_by_ucsc-bedtobigbed| conda:required_by:: ucsc-bedtobigbed
.. |downloads_ucsc-bedtobigbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedtobigbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedtobigbed| image:: https://quay.io/repository/biocontainers/ucsc-bedtobigbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedtobigbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedtobigbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedtobigbed/README.html

