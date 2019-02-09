.. title:: Package Recipe 'ucsc-avecols'
.. highlight: bash


ucsc-avecols
============

.. conda:recipe:: ucsc-avecols
   :replaces_section_title:

   average together columns

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-avecols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-avecols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-avecols/meta.yaml>`_

   


.. conda:package:: ucsc-avecols

   |downloads_ucsc-avecols| |docker_ucsc-avecols|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-avecols|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-avecols

   and update with::

      conda update ucsc-avecols

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-avecols


.. |required_by_ucsc-avecols| conda:required_by:: ucsc-avecols
.. |downloads_ucsc-avecols| image:: https://img.shields.io/conda/dn/bioconda/ucsc-avecols.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-avecols| image:: https://quay.io/repository/biocontainers/ucsc-avecols/status
   :target: https://quay.io/repository/biocontainers/ucsc-avecols







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-avecols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-avecols/README.html

