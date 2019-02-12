.. title:: Package Recipe 'ucsc-bigwigsummary'
.. highlight: bash


ucsc-bigwigsummary
==================

.. conda:recipe:: ucsc-bigwigsummary
   :replaces_section_title:

   Extract summary information from a bigWig file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigsummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigsummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigsummary/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigsummary

   |downloads_ucsc-bigwigsummary| |docker_ucsc-bigwigsummary|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigwigsummary|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigsummary

   and update with::

      conda update ucsc-bigwigsummary

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigsummary


.. |required_by_ucsc-bigwigsummary| conda:required_by:: ucsc-bigwigsummary
.. |downloads_ucsc-bigwigsummary| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigsummary.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigsummary| image:: https://quay.io/repository/biocontainers/ucsc-bigwigsummary/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigsummary







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigsummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigsummary/README.html

