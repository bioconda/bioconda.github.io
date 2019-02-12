.. title:: Package Recipe 'ucsc-hgloadwiggle'
.. highlight: bash


ucsc-hgloadwiggle
=================

.. conda:recipe:: ucsc-hgloadwiggle
   :replaces_section_title:

   Load a wiggle track definition into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadwiggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadwiggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadwiggle/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadwiggle

   |downloads_ucsc-hgloadwiggle| |docker_ucsc-hgloadwiggle|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadwiggle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadwiggle

   and update with::

      conda update ucsc-hgloadwiggle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadwiggle


.. |required_by_ucsc-hgloadwiggle| conda:required_by:: ucsc-hgloadwiggle
.. |downloads_ucsc-hgloadwiggle| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadwiggle.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadwiggle| image:: https://quay.io/repository/biocontainers/ucsc-hgloadwiggle/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadwiggle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadwiggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadwiggle/README.html

