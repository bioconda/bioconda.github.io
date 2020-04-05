:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bifrost'
.. highlight: bash

bifrost
=======

.. conda:recipe:: bifrost
   :replaces_section_title:

   Highly parallel construction and indexing of colored and compacted de Bruijn graphs

   :homepage: https://github.com/pmelsted/bifrost
   :license: BSD / BSD-2
   :recipe: /`bifrost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bifrost/meta.yaml>`_
   :links: doi: :doi:`10.1101/695338`

   


.. conda:package:: bifrost

   |downloads_bifrost| |docker_bifrost|

   :versions: 1.0.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pthread-stubs: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bifrost

   and update with::

      conda update bifrost

   or use the docker container::

      docker pull quay.io/biocontainers/bifrost:<tag>

   (see `bifrost/tags`_ for valid values for ``<tag>``)


.. |downloads_bifrost| image:: https://img.shields.io/conda/dn/bioconda/bifrost.svg?style=flat
   :target: https://anaconda.org/bioconda/bifrost
   :alt:   (downloads)
.. |docker_bifrost| image:: https://quay.io/repository/biocontainers/bifrost/status
   :target: https://quay.io/repository/biocontainers/bifrost
.. _`bifrost/tags`: https://quay.io/repository/biocontainers/bifrost?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bifrost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bifrost/README.html