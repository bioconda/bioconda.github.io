:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaclassifier'
.. highlight: bash

metaclassifier
==============

.. conda:recipe:: metaclassifier
   :replaces_section_title:
   :noindex:

   MetaClassifier is an integrated pipeline for classifying and quantifying DNA metabarcoding data into taxonomy groups

   :homepage: https://github.com/ewafula/MetaClassifier
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`metaclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaclassifier/meta.yaml>`_

   MetaClassifier is an integrated pipeline for identifying the floral composition of honey using DNA metabarcoding to determine the plants that honey bees visit. MetaClassifier utilizes a database of marker sequences and their corresponding taxonomy lineage information to classify high\-throughput metabarcoding sample sequencing reads data into taxonomic groups and quantify taxon abundance. MetaClassifier can also be employed in other studies that utilize barcoding\, metabarcoding\, and metagenomics techniques to characterize richness\, abundance\, relatedness\, and interactions in ecological communities.


.. conda:package:: metaclassifier

   |downloads_metaclassifier| |docker_metaclassifier|

   :versions:
      
      

      ``v1.0.1-0``

      

   
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=1.2.2``
   :depends pear: ``>=0.9.6``
   :depends python: ``>=3.7``
   :depends seqtk: ``>=1.3``
   :depends vsearch: ``>=2.15.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaclassifier

   and update with::

      conda update metaclassifier

   or use the docker container::

      docker pull quay.io/biocontainers/metaclassifier:<tag>

   (see `metaclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_metaclassifier| image:: https://img.shields.io/conda/dn/bioconda/metaclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/metaclassifier
   :alt:   (downloads)
.. |docker_metaclassifier| image:: https://quay.io/repository/biocontainers/metaclassifier/status
   :target: https://quay.io/repository/biocontainers/metaclassifier
.. _`metaclassifier/tags`: https://quay.io/repository/biocontainers/metaclassifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaclassifier/README.html