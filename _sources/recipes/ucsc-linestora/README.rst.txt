.. title:: Package Recipe 'ucsc-linestora'
.. highlight: bash


ucsc-linestora
==============

.. conda:recipe:: ucsc-linestora
   :replaces_section_title:

   generate .ra format from lines with pipe\-separated fields

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-linestora <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-linestora>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-linestora/meta.yaml>`_

   


.. conda:package:: ucsc-linestora

   |downloads_ucsc-linestora| |docker_ucsc-linestora|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-linestora|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-linestora

   and update with::

      conda update ucsc-linestora

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-linestora


.. |required_by_ucsc-linestora| conda:required_by:: ucsc-linestora
.. |downloads_ucsc-linestora| image:: https://img.shields.io/conda/dn/bioconda/ucsc-linestora.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-linestora| image:: https://quay.io/repository/biocontainers/ucsc-linestora/status
   :target: https://quay.io/repository/biocontainers/ucsc-linestora







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-linestora/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-linestora/README.html

