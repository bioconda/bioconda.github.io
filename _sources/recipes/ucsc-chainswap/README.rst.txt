.. title:: Package Recipe 'ucsc-chainswap'
.. highlight: bash


ucsc-chainswap
==============

.. conda:recipe:: ucsc-chainswap
   :replaces_section_title:

   Swap target and query in chain

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainswap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainswap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainswap/meta.yaml>`_

   


.. conda:package:: ucsc-chainswap

   |downloads_ucsc-chainswap| |docker_ucsc-chainswap|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainswap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainswap

   and update with::

      conda update ucsc-chainswap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainswap


.. |required_by_ucsc-chainswap| conda:required_by:: ucsc-chainswap
.. |downloads_ucsc-chainswap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainswap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainswap| image:: https://quay.io/repository/biocontainers/ucsc-chainswap/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainswap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainswap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainswap/README.html

