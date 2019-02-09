.. title:: Package Recipe 'ucsc-mafmefirst'
.. highlight: bash


ucsc-mafmefirst
===============

.. conda:recipe:: ucsc-mafmefirst
   :replaces_section_title:

   Move component to top if it is one of the named ones.  

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafmefirst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafmefirst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafmefirst/meta.yaml>`_

   


.. conda:package:: ucsc-mafmefirst

   |downloads_ucsc-mafmefirst| |docker_ucsc-mafmefirst|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-mafmefirst|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafmefirst

   and update with::

      conda update ucsc-mafmefirst

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafmefirst


.. |required_by_ucsc-mafmefirst| conda:required_by:: ucsc-mafmefirst
.. |downloads_ucsc-mafmefirst| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafmefirst.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafmefirst| image:: https://quay.io/repository/biocontainers/ucsc-mafmefirst/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafmefirst







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafmefirst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafmefirst/README.html

