.. title:: Package Recipe 'ucsc-mafsinregion'
.. highlight: bash


ucsc-mafsinregion
=================

.. conda:recipe:: ucsc-mafsinregion
   :replaces_section_title:

   Extract MAFS in a genomic region

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafsinregion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsinregion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsinregion/meta.yaml>`_

   


.. conda:package:: ucsc-mafsinregion

   |downloads_ucsc-mafsinregion| |docker_ucsc-mafsinregion|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafsinregion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafsinregion

   and update with::

      conda update ucsc-mafsinregion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafsinregion


.. |required_by_ucsc-mafsinregion| conda:required_by:: ucsc-mafsinregion
.. |downloads_ucsc-mafsinregion| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafsinregion.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafsinregion| image:: https://quay.io/repository/biocontainers/ucsc-mafsinregion/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafsinregion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafsinregion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafsinregion/README.html

