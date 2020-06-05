:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nspdk'
.. highlight: bash

nspdk
=====

.. conda:recipe:: nspdk
   :replaces_section_title:
   :noindex:

   Neighborhood Subgraph Pairwise Distance Kernel \(NSPDK\).

   :homepage: http://dtai.cs.kuleuven.be/ml/systems/nspdk
   :license: GNUv3
   :recipe: /`nspdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk/meta.yaml>`_

   


.. conda:package:: nspdk

   |downloads_nspdk| |docker_nspdk|

   :versions:
      
      

      ``9.2-0``

      

   
   :depends libgcc: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nspdk

   and update with::

      conda update nspdk

   or use the docker container::

      docker pull quay.io/biocontainers/nspdk:<tag>

   (see `nspdk/tags`_ for valid values for ``<tag>``)


.. |downloads_nspdk| image:: https://img.shields.io/conda/dn/bioconda/nspdk.svg?style=flat
   :target: https://anaconda.org/bioconda/nspdk
   :alt:   (downloads)
.. |docker_nspdk| image:: https://quay.io/repository/biocontainers/nspdk/status
   :target: https://quay.io/repository/biocontainers/nspdk
.. _`nspdk/tags`: https://quay.io/repository/biocontainers/nspdk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nspdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nspdk/README.html