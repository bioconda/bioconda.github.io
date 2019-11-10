:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap'
.. highlight: bash

minimap
=======

.. conda:recipe:: minimap
   :replaces_section_title:

   Experimental tool to find approximate mapping positions between long sequences

   :homepage: https://github.com/lh3/minimap
   :license: MIT
   :recipe: /`minimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap/meta.yaml>`_

   


.. conda:package:: minimap

   |downloads_minimap| |docker_minimap|

   :versions: 0.2-0, 0.2_r124-3, 0.2_r124-2, 0.2_r124-1, 0.2_r124-0
   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minimap

   and update with::

      conda update minimap

   or use the docker container::

      docker pull quay.io/biocontainers/minimap:<tag>

   (see `minimap/tags`_ for valid values for ``<tag>``)


.. |downloads_minimap| image:: https://img.shields.io/conda/dn/bioconda/minimap.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap
   :alt:   (downloads)
.. |docker_minimap| image:: https://quay.io/repository/biocontainers/minimap/status
   :target: https://quay.io/repository/biocontainers/minimap
.. _`minimap/tags`: https://quay.io/repository/biocontainers/minimap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap/README.html