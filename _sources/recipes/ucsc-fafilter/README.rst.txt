.. title:: Package Recipe 'ucsc-fafilter'
.. highlight: bash


ucsc-fafilter
=============

.. conda:recipe:: ucsc-fafilter
   :replaces_section_title:

   Filter fa records\, selecting ones that match the specified conditions

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fafilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafilter/meta.yaml>`_

   


.. conda:package:: ucsc-fafilter

   |downloads_ucsc-fafilter| |docker_ucsc-fafilter|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fafilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fafilter

   and update with::

      conda update ucsc-fafilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fafilter


.. |required_by_ucsc-fafilter| conda:required_by:: ucsc-fafilter
.. |downloads_ucsc-fafilter| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fafilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fafilter| image:: https://quay.io/repository/biocontainers/ucsc-fafilter/status
   :target: https://quay.io/repository/biocontainers/ucsc-fafilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fafilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fafilter/README.html

