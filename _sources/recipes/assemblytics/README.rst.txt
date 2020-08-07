:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblytics'
.. highlight: bash

assemblytics
============

.. conda:recipe:: assemblytics
   :replaces_section_title:
   :noindex:

   analyze a genome assembly by comparing it to a reference genome

   :homepage: http://assemblytics.com/
   :license: MIT
   :recipe: /`assemblytics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblytics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblytics/meta.yaml>`_

   Assemblytics detects and analyzes variants from a de novo genome assembly aligned to a reference genome. It incorporates a unique anchor filtering approach to increase robustness to repetitive elements and identifies six classes of variants based on their distinct alignment signatures. Assemblytics can be applied both to comparing aberrant genomes\, such as human cancers\, to a reference\, or to identify differences between related species.


.. conda:package:: assemblytics

   |downloads_assemblytics| |docker_assemblytics|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends mummer: 
   :depends numpy: 
   :depends python: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install assemblytics

   and update with::

      conda update assemblytics

   or use the docker container::

      docker pull quay.io/biocontainers/assemblytics:<tag>

   (see `assemblytics/tags`_ for valid values for ``<tag>``)


.. |downloads_assemblytics| image:: https://img.shields.io/conda/dn/bioconda/assemblytics.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblytics
   :alt:   (downloads)
.. |docker_assemblytics| image:: https://quay.io/repository/biocontainers/assemblytics/status
   :target: https://quay.io/repository/biocontainers/assemblytics
.. _`assemblytics/tags`: https://quay.io/repository/biocontainers/assemblytics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblytics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblytics/README.html