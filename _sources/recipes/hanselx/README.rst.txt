:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hanselx'
.. highlight: bash

hanselx
=======

.. conda:recipe:: hanselx
   :replaces_section_title:

   A graph\-inspired data structure for determining likely chains of sequences from breadcrumbs of evidence

   :homepage: https://github.com/SamStudio8/hansel
   :license: MIT
   :recipe: /`hanselx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hanselx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hanselx/meta.yaml>`_

   


.. conda:package:: hanselx

   |downloads_hanselx| |docker_hanselx|

   :versions: 0.0.81-1, 0.0.81-0
   
   :depends numpy: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hanselx

   and update with::

      conda update hanselx

   or use the docker container::

      docker pull quay.io/biocontainers/hanselx:<tag>

   (see `hanselx/tags`_ for valid values for ``<tag>``)


.. |downloads_hanselx| image:: https://img.shields.io/conda/dn/bioconda/hanselx.svg?style=flat
   :alt:   (downloads)
.. |docker_hanselx| image:: https://quay.io/repository/biocontainers/hanselx/status
   :target: https://quay.io/repository/biocontainers/hanselx
.. _`hanselx/tags`: https://quay.io/repository/biocontainers/hanselx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hanselx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hanselx/README.html