.. title:: Package Recipe 'ucsc-paranode'
.. highlight: bash


ucsc-paranode
=============

.. conda:recipe:: ucsc-paranode
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paranode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranode/meta.yaml>`_

   


.. conda:package:: ucsc-paranode

   |downloads_ucsc-paranode| |docker_ucsc-paranode|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-paranode|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paranode

   and update with::

      conda update ucsc-paranode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-paranode


.. |required_by_ucsc-paranode| conda:required_by:: ucsc-paranode
.. |downloads_ucsc-paranode| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paranode.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paranode| image:: https://quay.io/repository/biocontainers/ucsc-paranode/status
   :target: https://quay.io/repository/biocontainers/ucsc-paranode







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paranode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paranode/README.html

