:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'colorbrewer'
.. highlight: bash

colorbrewer
===========

.. conda:recipe:: colorbrewer
   :replaces_section_title:
   :noindex:

   An easy way to get access to ColorBrewer schemes from within a Python program

   :homepage: http://noble.gs.washington.edu/~mmh1/software/colorbrewer/
   :license: MIT
   :recipe: /`colorbrewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colorbrewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/colorbrewer/meta.yaml>`_

   


.. conda:package:: colorbrewer

   |downloads_colorbrewer| |docker_colorbrewer|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1.1-2``,  ``0.1.1-1``

      

   
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install colorbrewer

   and update with::

      conda update colorbrewer

   or use the docker container::

      docker pull quay.io/biocontainers/colorbrewer:<tag>

   (see `colorbrewer/tags`_ for valid values for ``<tag>``)


.. |downloads_colorbrewer| image:: https://img.shields.io/conda/dn/bioconda/colorbrewer.svg?style=flat
   :target: https://anaconda.org/bioconda/colorbrewer
   :alt:   (downloads)
.. |docker_colorbrewer| image:: https://quay.io/repository/biocontainers/colorbrewer/status
   :target: https://quay.io/repository/biocontainers/colorbrewer
.. _`colorbrewer/tags`: https://quay.io/repository/biocontainers/colorbrewer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/colorbrewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/colorbrewer/README.html