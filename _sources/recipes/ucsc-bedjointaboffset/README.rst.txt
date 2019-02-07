.. title:: Package Recipe 'ucsc-bedjointaboffset'
.. highlight: bash


ucsc-bedjointaboffset
=====================

.. conda:recipe:: ucsc-bedjointaboffset
   :replaces_section_title:

   given a bed file and tab file where each have a column with matching values\: first get the value of column0\, the offset and line length from inTabFile. Then go over the bed file\, use the name field and append its offset and length to the bed file as two separate fields. Write the new bed file to outBed.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedjointaboffset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset/meta.yaml>`_

   


.. conda:package:: ucsc-bedjointaboffset

   |downloads_ucsc-bedjointaboffset| |docker_ucsc-bedjointaboffset|

   :versions: 366

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`python`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedjointaboffset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedjointaboffset

   and update with::

      conda update ucsc-bedjointaboffset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedjointaboffset


.. |required_by_ucsc-bedjointaboffset| conda:required_by:: ucsc-bedjointaboffset
.. |downloads_ucsc-bedjointaboffset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedjointaboffset.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedjointaboffset| image:: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html

