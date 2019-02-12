.. title:: Package Recipe 'ucsc-bigbednameditems'
.. highlight: bash


ucsc-bigbednameditems
=====================

.. conda:recipe:: ucsc-bigbednameditems
   :replaces_section_title:

   Extract item of given name from bigBed

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbednameditems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbednameditems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbednameditems/meta.yaml>`_

   


.. conda:package:: ucsc-bigbednameditems

   |downloads_ucsc-bigbednameditems| |docker_ucsc-bigbednameditems|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigbednameditems|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigbednameditems

   and update with::

      conda update ucsc-bigbednameditems

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigbednameditems


.. |required_by_ucsc-bigbednameditems| conda:required_by:: ucsc-bigbednameditems
.. |downloads_ucsc-bigbednameditems| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbednameditems.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigbednameditems| image:: https://quay.io/repository/biocontainers/ucsc-bigbednameditems/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbednameditems







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbednameditems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbednameditems/README.html

