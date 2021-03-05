:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-util'
.. highlight: bash

galaxy-util
===========

.. conda:recipe:: galaxy-util
   :replaces_section_title:
   :noindex:

   Galaxy Generic Utilities

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-util/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-util

   |downloads_galaxy-util| |docker_galaxy-util|

   :versions:
      
      

      ``20.9.1-1``,  ``20.9.1-0``,  ``20.9.0-0``,  ``20.5.0-0``,  ``19.9.0-1``,  ``19.9.0-0``

      

   
   :depends bleach: 
   :depends boltons: 
   :depends cheetah3: 
   :depends docutils: 
   :depends future: 
   :depends markupsafe: 
   :depends packaging: 
   :depends python: ``>=3.5``
   :depends pyyaml: 
   :depends requests: 
   :depends routes: 
   :depends six: ``>=1.9.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-util

   and update with::

      conda update galaxy-util

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-util:<tag>

   (see `galaxy-util/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-util| image:: https://img.shields.io/conda/dn/bioconda/galaxy-util.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-util
   :alt:   (downloads)
.. |docker_galaxy-util| image:: https://quay.io/repository/biocontainers/galaxy-util/status
   :target: https://quay.io/repository/biocontainers/galaxy-util
.. _`galaxy-util/tags`: https://quay.io/repository/biocontainers/galaxy-util?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-util/README.html