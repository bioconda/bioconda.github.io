.. title:: Package Recipe 'ucsc-twobitdup'
.. highlight: bash


ucsc-twobitdup
==============

.. conda:recipe:: ucsc-twobitdup
   :replaces_section_title:

   check to see if a twobit file has any identical sequences in it

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobitdup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitdup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitdup/meta.yaml>`_

   


.. conda:package:: ucsc-twobitdup

   |downloads_ucsc-twobitdup| |docker_ucsc-twobitdup|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-twobitdup|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-twobitdup

   and update with::

      conda update ucsc-twobitdup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-twobitdup


.. |required_by_ucsc-twobitdup| conda:required_by:: ucsc-twobitdup
.. |downloads_ucsc-twobitdup| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobitdup.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-twobitdup| image:: https://quay.io/repository/biocontainers/ucsc-twobitdup/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobitdup







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobitdup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobitdup/README.html

