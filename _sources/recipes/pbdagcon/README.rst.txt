:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbdagcon'
.. highlight: bash

pbdagcon
========

.. conda:recipe:: pbdagcon
   :replaces_section_title:

   A sequence consensus algorithm implementation based on using directed acyclic graphs to encode multiple sequence alignment

   :homepage: https://github.com/PacificBiosciences/pbdagcon
   :license: BSD-3-Clause-Clear
   :recipe: /`pbdagcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbdagcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbdagcon/meta.yaml>`_

   


.. conda:package:: pbdagcon

   |downloads_pbdagcon| |docker_pbdagcon|

   :versions: 0.1-0
   
   :depends blasr_libcpp: 
   
   :depends daligner: 
   
   :depends dazz_db: 
   
   :depends libgcc: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbdagcon

   and update with::

      conda update pbdagcon

   or use the docker container::

      docker pull quay.io/biocontainers/pbdagcon:<tag>

   (see `pbdagcon/tags`_ for valid values for ``<tag>``)


.. |downloads_pbdagcon| image:: https://img.shields.io/conda/dn/bioconda/pbdagcon.svg?style=flat
   :alt:   (downloads)
.. |docker_pbdagcon| image:: https://quay.io/repository/biocontainers/pbdagcon/status
   :target: https://quay.io/repository/biocontainers/pbdagcon
.. _`pbdagcon/tags`: https://quay.io/repository/biocontainers/pbdagcon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbdagcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbdagcon/README.html