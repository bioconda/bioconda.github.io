.. title:: Package Recipe 'ucsc-axtswap'
.. highlight: bash


ucsc-axtswap
============

.. conda:recipe:: ucsc-axtswap
   :replaces_section_title:

   Swap source and query in an axt file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axtswap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtswap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtswap/meta.yaml>`_

   


.. conda:package:: ucsc-axtswap

   |downloads_ucsc-axtswap| |docker_ucsc-axtswap|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-axtswap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axtswap

   and update with::

      conda update ucsc-axtswap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-axtswap


.. |required_by_ucsc-axtswap| conda:required_by:: ucsc-axtswap
.. |downloads_ucsc-axtswap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axtswap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axtswap| image:: https://quay.io/repository/biocontainers/ucsc-axtswap/status
   :target: https://quay.io/repository/biocontainers/ucsc-axtswap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axtswap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axtswap/README.html

