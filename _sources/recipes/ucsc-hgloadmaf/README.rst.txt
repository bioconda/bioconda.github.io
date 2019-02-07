.. title:: Package Recipe 'ucsc-hgloadmaf'
.. highlight: bash


ucsc-hgloadmaf
==============

.. conda:recipe:: ucsc-hgloadmaf
   :replaces_section_title:

   Load a maf file index into the database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadmaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadmaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadmaf/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadmaf

   |downloads_ucsc-hgloadmaf| |docker_ucsc-hgloadmaf|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadmaf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadmaf

   and update with::

      conda update ucsc-hgloadmaf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadmaf


.. |required_by_ucsc-hgloadmaf| conda:required_by:: ucsc-hgloadmaf
.. |downloads_ucsc-hgloadmaf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadmaf.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadmaf| image:: https://quay.io/repository/biocontainers/ucsc-hgloadmaf/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadmaf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadmaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadmaf/README.html

