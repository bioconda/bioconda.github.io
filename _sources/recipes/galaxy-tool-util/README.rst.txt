:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-tool-util'
.. highlight: bash

galaxy-tool-util
================

.. conda:recipe:: galaxy-tool-util
   :replaces_section_title:

   Galaxy Tool and Tool Dependency Utilities

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: AFL-3.0
   :recipe: /`galaxy-tool-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-tool-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-tool-util/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-tool-util

   |downloads_galaxy-tool-util| |docker_galaxy-tool-util|

   :versions: 19.9.1-0
   
   :depends galaxy-containers: >=19.9
   :depends galaxy-util: >=19.9
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-tool-util

   and update with::

      conda update galaxy-tool-util

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-tool-util:<tag>

   (see `galaxy-tool-util/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-tool-util| image:: https://img.shields.io/conda/dn/bioconda/galaxy-tool-util.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-tool-util
   :alt:   (downloads)
.. |docker_galaxy-tool-util| image:: https://quay.io/repository/biocontainers/galaxy-tool-util/status
   :target: https://quay.io/repository/biocontainers/galaxy-tool-util
.. _`galaxy-tool-util/tags`: https://quay.io/repository/biocontainers/galaxy-tool-util?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-tool-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-tool-util/README.html