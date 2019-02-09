.. title:: Package Recipe 'ucsc-texthistogram'
.. highlight: bash


ucsc-texthistogram
==================

.. conda:recipe:: ucsc-texthistogram
   :replaces_section_title:

   Make a histogram in ascii

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-texthistogram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-texthistogram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-texthistogram/meta.yaml>`_

   


.. conda:package:: ucsc-texthistogram

   |downloads_ucsc-texthistogram| |docker_ucsc-texthistogram|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-texthistogram|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-texthistogram

   and update with::

      conda update ucsc-texthistogram

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-texthistogram


.. |required_by_ucsc-texthistogram| conda:required_by:: ucsc-texthistogram
.. |downloads_ucsc-texthistogram| image:: https://img.shields.io/conda/dn/bioconda/ucsc-texthistogram.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-texthistogram| image:: https://quay.io/repository/biocontainers/ucsc-texthistogram/status
   :target: https://quay.io/repository/biocontainers/ucsc-texthistogram







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-texthistogram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-texthistogram/README.html

