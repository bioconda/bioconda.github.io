:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadarida-d'
.. highlight: bash

tadarida-d
==========

.. conda:recipe:: tadarida-d
   :replaces_section_title:

   Tadarida\-D \(Toolbox for Animal Detection on Acoustic Recordings \- Detection and Feature extraction part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-D
   :license: LGPL / LGPL-3.0
   :recipe: /`tadarida-d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-d/meta.yaml>`_

   


.. conda:package:: tadarida-d

   |downloads_tadarida-d| |docker_tadarida-d|

   :versions: 1.03-3, 1.03-1, 1.03-0, 1.02-0, 1.01-0, 1.0-0
   
   :depends fftw: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libsndfile: 
   
   :depends libstdcxx-ng: >=4.9
   
   :depends qt: >=4.8.7,<4.9.0a0
   
   :depends xorg-libsm: 
   
   :depends xorg-libx11: 
   
   :depends xorg-libxau: 
   
   :depends xorg-libxdmcp: 
   
   :depends xorg-libxext: 
   
   :depends xorg-libxrender: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadarida-d

   and update with::

      conda update tadarida-d

   or use the docker container::

      docker pull quay.io/biocontainers/tadarida-d:<tag>

   (see `tadarida-d/tags`_ for valid values for ``<tag>``)


.. |downloads_tadarida-d| image:: https://img.shields.io/conda/dn/bioconda/tadarida-d.svg?style=flat
   :alt:   (downloads)
.. |docker_tadarida-d| image:: https://quay.io/repository/biocontainers/tadarida-d/status
   :target: https://quay.io/repository/biocontainers/tadarida-d
.. _`tadarida-d/tags`: https://quay.io/repository/biocontainers/tadarida-d?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-d/README.html