.. title:: Package Recipe 'sharedmem'
.. highlight: bash


sharedmem
=========

.. conda:recipe:: sharedmem
   :replaces_section_title:

   Dispatch your trivially parallizable jobs with sharedmem. 

   :homepage: http://github.com/rainwoodman/sharedmem
   :license: Public-Domain / None
   :recipe: /`sharedmem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharedmem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharedmem/meta.yaml>`_

   


.. conda:package:: sharedmem

   |downloads_sharedmem| |docker_sharedmem|

   :versions: 0.3.5

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* 

   :required~by: |required_by_sharedmem|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sharedmem

   and update with::

      conda update sharedmem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sharedmem


.. |required_by_sharedmem| conda:required_by:: sharedmem
.. |downloads_sharedmem| image:: https://img.shields.io/conda/dn/bioconda/sharedmem.svg?style=flat
   :alt:   (downloads)
.. |docker_sharedmem| image:: https://quay.io/repository/biocontainers/sharedmem/status
   :target: https://quay.io/repository/biocontainers/sharedmem







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sharedmem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sharedmem/README.html

