:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panacota'
.. highlight: bash

panacota
========

.. conda:recipe:: panacota
   :replaces_section_title:
   :noindex:

   Large scale comparative genomics tools\: annotate genomes\, do pangenome\, core\/persistent genome\, align core\/persistent families\, infer phylogenetic tree.

   :homepage: https://github.com/gem-pasteur/PanACoTA
   :documentation: https://aperrin.pages.pasteur.fr/pipeline_annotation/html-doc/
   
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`panacota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panacota/meta.yaml>`_

   


.. conda:package:: panacota

   |downloads_panacota| |docker_panacota|

   :versions:
      
      

      ``1.0.1.2-0``

      

   
   :depends argparse: 
   :depends biopython: ``>=1.60``
   :depends colorlog: 
   :depends fastme: 
   :depends fasttree: ``>=2.1.10``
   :depends iqtree: ``>=1.6.12``
   :depends mafft: 
   :depends mash: 
   :depends matplotlib-base: ``>=2.0.0``
   :depends mmseqs2: 
   :depends ncbi-genome-download: ``>=0.3.0``
   :depends numpy: ``>=1.11``
   :depends prodigal: ``>=2.6.2``
   :depends progressbar2: ``>=3.18.0``
   :depends prokka: ``>=1.11,<=1.14.5``
   :depends python: ``>=3.4``
   :depends quicktree: 
   :depends scipy: 
   :depends termcolor: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panacota

   and update with::

      conda update panacota

   or use the docker container::

      docker pull quay.io/biocontainers/panacota:<tag>

   (see `panacota/tags`_ for valid values for ``<tag>``)


.. |downloads_panacota| image:: https://img.shields.io/conda/dn/bioconda/panacota.svg?style=flat
   :target: https://anaconda.org/bioconda/panacota
   :alt:   (downloads)
.. |docker_panacota| image:: https://quay.io/repository/biocontainers/panacota/status
   :target: https://quay.io/repository/biocontainers/panacota
.. _`panacota/tags`: https://quay.io/repository/biocontainers/panacota?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panacota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panacota/README.html