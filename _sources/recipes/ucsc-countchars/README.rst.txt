.. title:: Package Recipe 'ucsc-countchars'
.. highlight: bash


ucsc-countchars
===============

.. conda:recipe:: ucsc-countchars
   :replaces_section_title:

   Count the number of occurrences of a particular char

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-countchars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-countchars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-countchars/meta.yaml>`_

   


.. conda:package:: ucsc-countchars

   |downloads_ucsc-countchars| |docker_ucsc-countchars|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-countchars|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-countchars

   and update with::

      conda update ucsc-countchars

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-countchars


.. |required_by_ucsc-countchars| conda:required_by:: ucsc-countchars
.. |downloads_ucsc-countchars| image:: https://img.shields.io/conda/dn/bioconda/ucsc-countchars.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-countchars| image:: https://quay.io/repository/biocontainers/ucsc-countchars/status
   :target: https://quay.io/repository/biocontainers/ucsc-countchars







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-countchars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-countchars/README.html

