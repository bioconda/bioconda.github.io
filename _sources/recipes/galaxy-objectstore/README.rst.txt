:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-objectstore'
.. highlight: bash

galaxy-objectstore
==================

.. conda:recipe:: galaxy-objectstore
   :replaces_section_title:
   :noindex:

   The Galaxy object store framework and default implementations

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-objectstore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-objectstore/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-objectstore

   |downloads_galaxy-objectstore| |docker_galaxy-objectstore|

   :versions:
      
      

      ``20.9.1-0``

      

   
   :depends galaxy-util: ``>=20.9``
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-objectstore

   and update with::

      conda update galaxy-objectstore

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-objectstore:<tag>

   (see `galaxy-objectstore/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-objectstore| image:: https://img.shields.io/conda/dn/bioconda/galaxy-objectstore.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-objectstore
   :alt:   (downloads)
.. |docker_galaxy-objectstore| image:: https://quay.io/repository/biocontainers/galaxy-objectstore/status
   :target: https://quay.io/repository/biocontainers/galaxy-objectstore
.. _`galaxy-objectstore/tags`: https://quay.io/repository/biocontainers/galaxy-objectstore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-objectstore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-objectstore/README.html