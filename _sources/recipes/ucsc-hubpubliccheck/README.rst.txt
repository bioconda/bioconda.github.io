.. title:: Package Recipe 'ucsc-hubpubliccheck'
.. highlight: bash


ucsc-hubpubliccheck
===================

.. conda:recipe:: ucsc-hubpubliccheck
   :replaces_section_title:

   checks that the labels in hubPublic match what is in the hub labels

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hubpubliccheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubpubliccheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubpubliccheck/meta.yaml>`_

   


.. conda:package:: ucsc-hubpubliccheck

   |downloads_ucsc-hubpubliccheck| |docker_ucsc-hubpubliccheck|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hubpubliccheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hubpubliccheck

   and update with::

      conda update ucsc-hubpubliccheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hubpubliccheck


.. |required_by_ucsc-hubpubliccheck| conda:required_by:: ucsc-hubpubliccheck
.. |downloads_ucsc-hubpubliccheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hubpubliccheck.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hubpubliccheck| image:: https://quay.io/repository/biocontainers/ucsc-hubpubliccheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-hubpubliccheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hubpubliccheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hubpubliccheck/README.html

