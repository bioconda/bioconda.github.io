.. title:: Package Recipe 'ucsc-chainmergesort'
.. highlight: bash


ucsc-chainmergesort
===================

.. conda:recipe:: ucsc-chainmergesort
   :replaces_section_title:

   Combine sorted files into larger sorted file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainmergesort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainmergesort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainmergesort/meta.yaml>`_

   


.. conda:package:: ucsc-chainmergesort

   |downloads_ucsc-chainmergesort| |docker_ucsc-chainmergesort|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainmergesort|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainmergesort

   and update with::

      conda update ucsc-chainmergesort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainmergesort


.. |required_by_ucsc-chainmergesort| conda:required_by:: ucsc-chainmergesort
.. |downloads_ucsc-chainmergesort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainmergesort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainmergesort| image:: https://quay.io/repository/biocontainers/ucsc-chainmergesort/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainmergesort







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainmergesort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainmergesort/README.html

