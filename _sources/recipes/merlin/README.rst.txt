:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merlin'
.. highlight: bash

merlin
======

.. conda:recipe:: merlin
   :replaces_section_title:

   MERLIN uses sparse trees to represent gene flow in pedigrees and is a fast pedigree analysis package

   :homepage: http://csg.sph.umich.edu/abecasis/merlin
   :license: OpenSource
   :recipe: /`merlin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merlin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merlin/meta.yaml>`_
   :links: biotools: :biotools:`Merlin`, doi: :doi:`10.1038/ng786`

   


.. conda:package:: merlin

   |downloads_merlin| |docker_merlin|

   :versions: 1.1.2-2, 1.1.2-1, 1.1.2-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install merlin

   and update with::

      conda update merlin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/merlin:<tag>

   (see `merlin/tags`_ for valid values for ``<tag>``)


.. |downloads_merlin| image:: https://img.shields.io/conda/dn/bioconda/merlin.svg?style=flat
   :alt:   (downloads)
.. |docker_merlin| image:: https://quay.io/repository/biocontainers/merlin/status
   :target: https://quay.io/repository/biocontainers/merlin
.. _`merlin/tags`: https://quay.io/repository/biocontainers/merlin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merlin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merlin/README.html