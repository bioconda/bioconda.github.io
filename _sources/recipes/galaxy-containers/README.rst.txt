:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-containers'
.. highlight: bash

galaxy-containers
=================

.. conda:recipe:: galaxy-containers
   :replaces_section_title:
   :noindex:

   Galaxy Container Modeling and Interaction Abstractions

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-containers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-containers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-containers/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-containers

   |downloads_galaxy-containers| |docker_galaxy-containers|

   :versions:
      
      

      ``19.9.0-0``

      

   
   :depends galaxy-util: ``>=19.9``
   :depends python: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-containers

   and update with::

      conda update galaxy-containers

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-containers:<tag>

   (see `galaxy-containers/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-containers| image:: https://img.shields.io/conda/dn/bioconda/galaxy-containers.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-containers
   :alt:   (downloads)
.. |docker_galaxy-containers| image:: https://quay.io/repository/biocontainers/galaxy-containers/status
   :target: https://quay.io/repository/biocontainers/galaxy-containers
.. _`galaxy-containers/tags`: https://quay.io/repository/biocontainers/galaxy-containers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-containers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-containers/README.html