.. title:: Package Recipe 'ucsc-liftover'
.. highlight: bash


ucsc-liftover
=============

.. conda:recipe:: ucsc-liftover
   :replaces_section_title:

   Move annotations from one assembly to another

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-liftover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftover/meta.yaml>`_

   


.. conda:package:: ucsc-liftover

   |downloads_ucsc-liftover| |docker_ucsc-liftover|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-liftover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-liftover

   and update with::

      conda update ucsc-liftover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-liftover


.. |required_by_ucsc-liftover| conda:required_by:: ucsc-liftover
.. |downloads_ucsc-liftover| image:: https://img.shields.io/conda/dn/bioconda/ucsc-liftover.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-liftover| image:: https://quay.io/repository/biocontainers/ucsc-liftover/status
   :target: https://quay.io/repository/biocontainers/ucsc-liftover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-liftover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-liftover/README.html

