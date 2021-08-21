:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stecfinder'
.. highlight: bash

stecfinder
==========

.. conda:recipe:: stecfinder
   :replaces_section_title:
   :noindex:

   Cluster informed Shigatoxin producing E. coli \(STEC\) serotyping tool from Illumina reads and assemblies

   :homepage: https://github.com/LanLab/STECFinder
   :license: GPL3
   :recipe: /`stecfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stecfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stecfinder/meta.yaml>`_

   


.. conda:package:: stecfinder

   |downloads_stecfinder| |docker_stecfinder|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends kma: ``>=1.3.15``
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stecfinder

   and update with::

      conda update stecfinder

   or use the docker container::

      docker pull quay.io/biocontainers/stecfinder:<tag>

   (see `stecfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_stecfinder| image:: https://img.shields.io/conda/dn/bioconda/stecfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/stecfinder
   :alt:   (downloads)
.. |docker_stecfinder| image:: https://quay.io/repository/biocontainers/stecfinder/status
   :target: https://quay.io/repository/biocontainers/stecfinder
.. _`stecfinder/tags`: https://quay.io/repository/biocontainers/stecfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stecfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stecfinder/README.html