.. title:: Package Recipe 'ucsc-paranodestop'
.. highlight: bash


ucsc-paranodestop
=================

.. conda:recipe:: ucsc-paranodestop
   :replaces_section_title:

    Shut down parasol node daemons on a list of machines 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paranodestop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paranodestop/meta.yaml>`_

   


.. conda:package:: ucsc-paranodestop

   |downloads_ucsc-paranodestop| |docker_ucsc-paranodestop|

   :versions: 366

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-paranodestop|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paranodestop

   and update with::

      conda update ucsc-paranodestop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-paranodestop


.. |required_by_ucsc-paranodestop| conda:required_by:: ucsc-paranodestop
.. |downloads_ucsc-paranodestop| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paranodestop.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paranodestop| image:: https://quay.io/repository/biocontainers/ucsc-paranodestop/status
   :target: https://quay.io/repository/biocontainers/ucsc-paranodestop







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paranodestop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paranodestop/README.html

