.. title:: Package Recipe 'ucsc-mafspeciessubset'
.. highlight: bash


ucsc-mafspeciessubset
=====================

.. conda:recipe:: ucsc-mafspeciessubset
   :replaces_section_title:

   Extract a maf that just has a subset of species.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafspeciessubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspeciessubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspeciessubset/meta.yaml>`_

   


.. conda:package:: ucsc-mafspeciessubset

   |downloads_ucsc-mafspeciessubset| |docker_ucsc-mafspeciessubset|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafspeciessubset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafspeciessubset

   and update with::

      conda update ucsc-mafspeciessubset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafspeciessubset


.. |required_by_ucsc-mafspeciessubset| conda:required_by:: ucsc-mafspeciessubset
.. |downloads_ucsc-mafspeciessubset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafspeciessubset.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafspeciessubset| image:: https://quay.io/repository/biocontainers/ucsc-mafspeciessubset/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafspeciessubset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafspeciessubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafspeciessubset/README.html

