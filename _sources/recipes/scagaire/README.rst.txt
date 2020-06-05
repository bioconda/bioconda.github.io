:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scagaire'
.. highlight: bash

scagaire
========

.. conda:recipe:: scagaire
   :replaces_section_title:
   :noindex:

   Scagaire allows you to take in gene predictions from a metagenomic sample and filter them by bacterial\/pathogenic species

   :homepage: https://github.com/quadram-institute-bioscience/scagaire
   :license: GPLv3
   :recipe: /`scagaire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scagaire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scagaire/meta.yaml>`_

   


.. conda:package:: scagaire

   |downloads_scagaire| |docker_scagaire|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends biopython: ``>=1.68``
   :depends mash: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scagaire

   and update with::

      conda update scagaire

   or use the docker container::

      docker pull quay.io/biocontainers/scagaire:<tag>

   (see `scagaire/tags`_ for valid values for ``<tag>``)


.. |downloads_scagaire| image:: https://img.shields.io/conda/dn/bioconda/scagaire.svg?style=flat
   :target: https://anaconda.org/bioconda/scagaire
   :alt:   (downloads)
.. |docker_scagaire| image:: https://quay.io/repository/biocontainers/scagaire/status
   :target: https://quay.io/repository/biocontainers/scagaire
.. _`scagaire/tags`: https://quay.io/repository/biocontainers/scagaire?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scagaire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scagaire/README.html