.. title:: Package Recipe 'ucsc-autoxml'
.. highlight: bash


ucsc-autoxml
============

.. conda:recipe:: ucsc-autoxml
   :replaces_section_title:

   Generate structures code and parser for XML file from DTD\-like spec

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-autoxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-autoxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-autoxml/meta.yaml>`_

   


.. conda:package:: ucsc-autoxml

   |downloads_ucsc-autoxml| |docker_ucsc-autoxml|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-autoxml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-autoxml

   and update with::

      conda update ucsc-autoxml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-autoxml


.. |required_by_ucsc-autoxml| conda:required_by:: ucsc-autoxml
.. |downloads_ucsc-autoxml| image:: https://img.shields.io/conda/dn/bioconda/ucsc-autoxml.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-autoxml| image:: https://quay.io/repository/biocontainers/ucsc-autoxml/status
   :target: https://quay.io/repository/biocontainers/ucsc-autoxml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-autoxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-autoxml/README.html

