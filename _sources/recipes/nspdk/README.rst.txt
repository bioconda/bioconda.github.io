.. title:: Package Recipe 'nspdk'
.. highlight: bash


nspdk
=====

.. conda:recipe:: nspdk
   :replaces_section_title:

   Neighborhood Subgraph Pairwise Distance Kernel \(NSPDK\).

   :homepage: http://dtai.cs.kuleuven.be/ml/systems/nspdk
   :license: GNUv3
   :recipe: /`nspdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk/meta.yaml>`_

   


.. conda:package:: nspdk

   |downloads_nspdk| |docker_nspdk|

   :versions: 9.2

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_nspdk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nspdk

   and update with::

      conda update nspdk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nspdk


.. |required_by_nspdk| conda:required_by:: nspdk
.. |downloads_nspdk| image:: https://img.shields.io/conda/dn/bioconda/nspdk.svg?style=flat
   :alt:   (downloads)
.. |docker_nspdk| image:: https://quay.io/repository/biocontainers/nspdk/status
   :target: https://quay.io/repository/biocontainers/nspdk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nspdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nspdk/README.html

