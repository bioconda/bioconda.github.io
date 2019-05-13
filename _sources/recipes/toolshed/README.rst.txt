:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toolshed'
.. highlight: bash

toolshed
========

.. conda:recipe:: toolshed
   :replaces_section_title:

   flexible and easy file manipulation

   :homepage: https://github.com/brentp/toolshed
   :license: MIT License
   :recipe: /`toolshed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toolshed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toolshed/meta.yaml>`_

   


.. conda:package:: toolshed

   |downloads_toolshed| |docker_toolshed|

   :versions: 0.4.6-1, 0.4.6-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toolshed

   and update with::

      conda update toolshed

   or use the docker container::

      docker pull quay.io/biocontainers/toolshed:<tag>

   (see `toolshed/tags`_ for valid values for ``<tag>``)


.. |downloads_toolshed| image:: https://img.shields.io/conda/dn/bioconda/toolshed.svg?style=flat
   :target: https://anaconda.org/bioconda/toolshed
   :alt:   (downloads)
.. |docker_toolshed| image:: https://quay.io/repository/biocontainers/toolshed/status
   :target: https://quay.io/repository/biocontainers/toolshed
.. _`toolshed/tags`: https://quay.io/repository/biocontainers/toolshed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toolshed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toolshed/README.html