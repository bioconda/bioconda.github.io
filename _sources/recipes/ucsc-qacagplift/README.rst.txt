.. title:: Package Recipe 'ucsc-qacagplift'
.. highlight: bash


ucsc-qacagplift
===============

.. conda:recipe:: ucsc-qacagplift
   :replaces_section_title:

   Use AGP to combine per\-scaffold qac into per\-chrom qac.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-qacagplift <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qacagplift>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qacagplift/meta.yaml>`_

   


.. conda:package:: ucsc-qacagplift

   |downloads_ucsc-qacagplift| |docker_ucsc-qacagplift|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-qacagplift|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-qacagplift

   and update with::

      conda update ucsc-qacagplift

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-qacagplift


.. |required_by_ucsc-qacagplift| conda:required_by:: ucsc-qacagplift
.. |downloads_ucsc-qacagplift| image:: https://img.shields.io/conda/dn/bioconda/ucsc-qacagplift.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-qacagplift| image:: https://quay.io/repository/biocontainers/ucsc-qacagplift/status
   :target: https://quay.io/repository/biocontainers/ucsc-qacagplift







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-qacagplift/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-qacagplift/README.html

