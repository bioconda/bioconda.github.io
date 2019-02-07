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

   :versions: 1.03, 1.02, 1.01, 1.0

   :depends: :conda:package:`fftw` 3.3.4 :conda:package:`libgcc`  :conda:package:`libsndfile` 1.0.27 :conda:package:`qt` 4.8.7 :conda:package:`xorg-libsm`  :conda:package:`xorg-libx11`  :conda:package:`xorg-libxau`  :conda:package:`xorg-libxdmcp`  :conda:package:`xorg-libxext`  :conda:package:`xorg-libxrender`  :conda:package:`zlib`  

   :required~by: |required_by_tadarida-d|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tadarida-d

   and update with::

      conda update tadarida-d

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tadarida-d


.. |required_by_tadarida-d| conda:required_by:: tadarida-d
.. |downloads_tadarida-d| image:: https://img.shields.io/conda/dn/bioconda/tadarida-d.svg?style=flat
   :alt:   (downloads)
.. |docker_tadarida-d| image:: https://quay.io/repository/biocontainers/tadarida-d/status
   :target: https://quay.io/repository/biocontainers/tadarida-d







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-d/README.html

