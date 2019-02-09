.. title:: Package Recipe 'ucsc-mafspecieslist'
.. highlight: bash


ucsc-mafspecieslist
===================

.. conda:recipe:: ucsc-mafspecieslist
   :replaces_section_title:

   Scan maf and output all species used in it.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafspecieslist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspecieslist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafspecieslist/meta.yaml>`_

   


.. conda:package:: ucsc-mafspecieslist

   |downloads_ucsc-mafspecieslist| |docker_ucsc-mafspecieslist|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafspecieslist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafspecieslist

   and update with::

      conda update ucsc-mafspecieslist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafspecieslist


.. |required_by_ucsc-mafspecieslist| conda:required_by:: ucsc-mafspecieslist
.. |downloads_ucsc-mafspecieslist| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafspecieslist.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafspecieslist| image:: https://quay.io/repository/biocontainers/ucsc-mafspecieslist/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafspecieslist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafspecieslist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafspecieslist/README.html

