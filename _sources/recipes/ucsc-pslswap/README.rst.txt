.. title:: Package Recipe 'ucsc-pslswap'
.. highlight: bash


ucsc-pslswap
============

.. conda:recipe:: ucsc-pslswap
   :replaces_section_title:

    Swap target and query in psls 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslswap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslswap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslswap/meta.yaml>`_

   


.. conda:package:: ucsc-pslswap

   |downloads_ucsc-pslswap| |docker_ucsc-pslswap|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslswap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslswap

   and update with::

      conda update ucsc-pslswap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslswap


.. |required_by_ucsc-pslswap| conda:required_by:: ucsc-pslswap
.. |downloads_ucsc-pslswap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslswap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslswap| image:: https://quay.io/repository/biocontainers/ucsc-pslswap/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslswap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslswap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslswap/README.html

