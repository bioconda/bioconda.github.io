:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffmunger'
.. highlight: bash

gffmunger
=========

.. conda:recipe:: gffmunger
   :replaces_section_title:

   Munges GFF3 files exported from Chado database to make them suitable for loading into WebApollo

   :homepage: https://github.com/sanger-pathogens/gffmunger
   :license: GPL / GPL-3.0
   :recipe: /`gffmunger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffmunger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffmunger/meta.yaml>`_

   


.. conda:package:: gffmunger

   |downloads_gffmunger| |docker_gffmunger|

   :versions: 0.1.2-0, 0.1.1-0, 0.0.1-2, 0.0.1-1, 0.0.1-0
   
   :depends biopython: >=1.68
   :depends genometools-genometools: 
   :depends gffutils: 
   :depends python: >=3.6
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffmunger

   and update with::

      conda update gffmunger

   or use the docker container::

      docker pull quay.io/biocontainers/gffmunger:<tag>

   (see `gffmunger/tags`_ for valid values for ``<tag>``)


.. |downloads_gffmunger| image:: https://img.shields.io/conda/dn/bioconda/gffmunger.svg?style=flat
   :target: https://anaconda.org/bioconda/gffmunger
   :alt:   (downloads)
.. |docker_gffmunger| image:: https://quay.io/repository/biocontainers/gffmunger/status
   :target: https://quay.io/repository/biocontainers/gffmunger
.. _`gffmunger/tags`: https://quay.io/repository/biocontainers/gffmunger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffmunger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffmunger/README.html