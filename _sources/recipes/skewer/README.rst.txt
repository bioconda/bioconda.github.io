:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skewer'
.. highlight: bash

skewer
======

.. conda:recipe:: skewer
   :replaces_section_title:

   A fast and accurate adapter trimmer for paired\-end reads.

   :homepage: https://github.com/relipmoc/skewer.git
   :license: MIT
   :recipe: /`skewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skewer/meta.yaml>`_
   :links: biotools: :biotools:`skewer`

   


.. conda:package:: skewer

   |downloads_skewer| |docker_skewer|

   :versions: 0.2.2-2, 0.2.2-1, 0.2.2-0, 0.1.126-1, 0.1.126-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install skewer

   and update with::

      conda update skewer

   or use the docker container::

      docker pull quay.io/biocontainers/skewer:<tag>

   (see `skewer/tags`_ for valid values for ``<tag>``)


.. |downloads_skewer| image:: https://img.shields.io/conda/dn/bioconda/skewer.svg?style=flat
   :alt:   (downloads)
.. |docker_skewer| image:: https://quay.io/repository/biocontainers/skewer/status
   :target: https://quay.io/repository/biocontainers/skewer
.. _`skewer/tags`: https://quay.io/repository/biocontainers/skewer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skewer/README.html