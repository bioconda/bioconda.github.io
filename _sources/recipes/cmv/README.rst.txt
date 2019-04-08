:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmv'
.. highlight: bash

cmv
===

.. conda:recipe:: cmv
   :replaces_section_title:

   A collection of tools for the visualisation of Hidden Markov Models \(HMMV\) and RNA\-family models \(CMV\).

   :homepage: https://github.com/eggzilla/cmv
   :license: GPL-3
   :recipe: /`cmv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmv/meta.yaml>`_

   


.. conda:package:: cmv

   |downloads_cmv| |docker_cmv|

   :versions: 1.0.8-1, 1.0.8-0, 1.0.7-0, 1.0.6-0, 1.0.5-0, 1.0.2-0
   
   :depends cairo: 
   :depends gmp: 5.1*
   :depends libgcc: 
   :depends libxml2: 
   :depends pango: 
   :depends pthread-stubs: 
   :depends xorg-libsm: 
   :depends xorg-libxext: 
   :depends xorg-libxrender: 
   :depends zlib: 1.2.11*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmv

   and update with::

      conda update cmv

   or use the docker container::

      docker pull quay.io/biocontainers/cmv:<tag>

   (see `cmv/tags`_ for valid values for ``<tag>``)


.. |downloads_cmv| image:: https://img.shields.io/conda/dn/bioconda/cmv.svg?style=flat
   :alt:   (downloads)
.. |docker_cmv| image:: https://quay.io/repository/biocontainers/cmv/status
   :target: https://quay.io/repository/biocontainers/cmv
.. _`cmv/tags`: https://quay.io/repository/biocontainers/cmv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmv/README.html