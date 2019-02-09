.. title:: Package Recipe 'ucsc-featurebits'
.. highlight: bash


ucsc-featurebits
================

.. conda:recipe:: ucsc-featurebits
   :replaces_section_title:

   Correlate tables via bitmap projections. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-featurebits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-featurebits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-featurebits/meta.yaml>`_

   


.. conda:package:: ucsc-featurebits

   |downloads_ucsc-featurebits| |docker_ucsc-featurebits|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-featurebits|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-featurebits

   and update with::

      conda update ucsc-featurebits

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-featurebits


.. |required_by_ucsc-featurebits| conda:required_by:: ucsc-featurebits
.. |downloads_ucsc-featurebits| image:: https://img.shields.io/conda/dn/bioconda/ucsc-featurebits.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-featurebits| image:: https://quay.io/repository/biocontainers/ucsc-featurebits/status
   :target: https://quay.io/repository/biocontainers/ucsc-featurebits







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-featurebits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-featurebits/README.html

