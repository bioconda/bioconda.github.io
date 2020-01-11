:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcs'
.. highlight: bash

arcs
====

.. conda:recipe:: arcs
   :replaces_section_title:

   Scaffolding genome sequence assemblies using 10X Genomics data

   :homepage: https://github.com/bcgsc/arcs
   :license: GPL-3.0
   :recipe: /`arcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcs/meta.yaml>`_

   


.. conda:package:: arcs

   |downloads_arcs| |docker_arcs|

   :versions: 1.1.1-0, 1.1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arcs

   and update with::

      conda update arcs

   or use the docker container::

      docker pull quay.io/biocontainers/arcs:<tag>

   (see `arcs/tags`_ for valid values for ``<tag>``)


.. |downloads_arcs| image:: https://img.shields.io/conda/dn/bioconda/arcs.svg?style=flat
   :target: https://anaconda.org/bioconda/arcs
   :alt:   (downloads)
.. |docker_arcs| image:: https://quay.io/repository/biocontainers/arcs/status
   :target: https://quay.io/repository/biocontainers/arcs
.. _`arcs/tags`: https://quay.io/repository/biocontainers/arcs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcs/README.html