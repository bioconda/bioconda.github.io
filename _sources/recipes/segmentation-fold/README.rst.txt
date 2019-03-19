:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segmentation-fold'
.. highlight: bash

segmentation-fold
=================

.. conda:recipe:: segmentation-fold
   :replaces_section_title:

   RNA\-Folding with predefined segments including K\-turns and loop\-E\-motifs

   :homepage: https://github.com/yhoogstrate/segmentation-fold
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`segmentation-fold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold/meta.yaml>`_

   


.. conda:package:: segmentation-fold

   |downloads_segmentation-fold| |docker_segmentation-fold|

   :versions: 1.7.0-1, 1.7.0-0, 1.6.8-0
   
   :depends boost: >=1.63.0,<1.63.1.0a0
   
   :depends click: >=4.0
   
   :depends htseq: >=0.6.1
   
   :depends libgcc-ng: >=4.9
   
   :depends pysam: >=0.8.1,<=0.8.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segmentation-fold

   and update with::

      conda update segmentation-fold

   or use the docker container::

      docker pull quay.io/biocontainers/segmentation-fold:<tag>

   (see `segmentation-fold/tags`_ for valid values for ``<tag>``)


.. |downloads_segmentation-fold| image:: https://img.shields.io/conda/dn/bioconda/segmentation-fold.svg?style=flat
   :alt:   (downloads)
.. |docker_segmentation-fold| image:: https://quay.io/repository/biocontainers/segmentation-fold/status
   :target: https://quay.io/repository/biocontainers/segmentation-fold
.. _`segmentation-fold/tags`: https://quay.io/repository/biocontainers/segmentation-fold?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmentation-fold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmentation-fold/README.html