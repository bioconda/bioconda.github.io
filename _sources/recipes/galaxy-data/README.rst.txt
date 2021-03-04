:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-data'
.. highlight: bash

galaxy-data
===========

.. conda:recipe:: galaxy-data
   :replaces_section_title:
   :noindex:

   The Galaxy models\, datatype framework\, and datatype implementations.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-data/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-data

   |downloads_galaxy-data| |docker_galaxy-data|

   :versions:
      
      

      ``20.9.1-1``,  ``20.9.1-0``

      

   
   :depends bdbag: 
   :depends bx-python: 
   :depends galaxy-objectstore: ``>=20.9``
   :depends galaxy-util: ``>=20.9``
   :depends galaxy_sequence_utils: 
   :depends h5py: 
   :depends isa-rwval: 
   :depends numpy: 
   :depends parsley: 
   :depends pycryptodome: 
   :depends pydantic: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends six: ``>=1.9.0``
   :depends social-auth-core: 
   :depends sqlalchemy: 
   :depends sqlalchemy-migrate: 
   :depends sqlalchemy-utils: 
   :depends webob: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-data

   and update with::

      conda update galaxy-data

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-data:<tag>

   (see `galaxy-data/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-data| image:: https://img.shields.io/conda/dn/bioconda/galaxy-data.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-data
   :alt:   (downloads)
.. |docker_galaxy-data| image:: https://quay.io/repository/biocontainers/galaxy-data/status
   :target: https://quay.io/repository/biocontainers/galaxy-data
.. _`galaxy-data/tags`: https://quay.io/repository/biocontainers/galaxy-data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-data/README.html