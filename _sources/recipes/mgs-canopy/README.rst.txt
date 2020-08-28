:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgs-canopy'
.. highlight: bash

mgs-canopy
==========

.. conda:recipe:: mgs-canopy
   :replaces_section_title:
   :noindex:

   Canopy clustering algorithm

   :homepage: https://github.com/fplaza/mgs-canopy-algorithm
   :license: GPL3
   :recipe: /`mgs-canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nbt.2939`

   


.. conda:package:: mgs-canopy

   |downloads_mgs-canopy| |docker_mgs-canopy|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgs-canopy

   and update with::

      conda update mgs-canopy

   or use the docker container::

      docker pull quay.io/biocontainers/mgs-canopy:<tag>

   (see `mgs-canopy/tags`_ for valid values for ``<tag>``)


.. |downloads_mgs-canopy| image:: https://img.shields.io/conda/dn/bioconda/mgs-canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/mgs-canopy
   :alt:   (downloads)
.. |docker_mgs-canopy| image:: https://quay.io/repository/biocontainers/mgs-canopy/status
   :target: https://quay.io/repository/biocontainers/mgs-canopy
.. _`mgs-canopy/tags`: https://quay.io/repository/biocontainers/mgs-canopy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgs-canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgs-canopy/README.html