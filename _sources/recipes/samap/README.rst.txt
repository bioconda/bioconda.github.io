:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samap'
.. highlight: bash

samap
=====

.. conda:recipe:: samap
   :replaces_section_title:
   :noindex:

   The SAMap algorithm

   :homepage: https://github.com/atarashansky/SAMap
   :license: MIT / MIT
   :recipe: /`samap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap/meta.yaml>`_

   


.. conda:package:: samap

   |downloads_samap| |docker_samap|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends dill: 
   :depends h5py: ``<=2.10``
   :depends hnswlib: 
   :depends leidenalg: 
   :depends python: 
   :depends sam-algorithm: ``>=0.8.1``
   :depends scanpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samap

   and update with::

      conda update samap

   or use the docker container::

      docker pull quay.io/biocontainers/samap:<tag>

   (see `samap/tags`_ for valid values for ``<tag>``)


.. |downloads_samap| image:: https://img.shields.io/conda/dn/bioconda/samap.svg?style=flat
   :target: https://anaconda.org/bioconda/samap
   :alt:   (downloads)
.. |docker_samap| image:: https://quay.io/repository/biocontainers/samap/status
   :target: https://quay.io/repository/biocontainers/samap
.. _`samap/tags`: https://quay.io/repository/biocontainers/samap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samap/README.html