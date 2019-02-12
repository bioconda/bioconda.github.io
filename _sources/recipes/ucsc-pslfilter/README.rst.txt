.. title:: Package Recipe 'ucsc-pslfilter'
.. highlight: bash


ucsc-pslfilter
==============

.. conda:recipe:: ucsc-pslfilter
   :replaces_section_title:

   filter out psl file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslfilter/meta.yaml>`_

   


.. conda:package:: ucsc-pslfilter

   |downloads_ucsc-pslfilter| |docker_ucsc-pslfilter|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslfilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslfilter

   and update with::

      conda update ucsc-pslfilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslfilter


.. |required_by_ucsc-pslfilter| conda:required_by:: ucsc-pslfilter
.. |downloads_ucsc-pslfilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslfilter| image:: https://quay.io/repository/biocontainers/ucsc-pslfilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslfilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslfilter/README.html

