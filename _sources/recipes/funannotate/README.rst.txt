:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funannotate'
.. highlight: bash

funannotate
===========

.. conda:recipe:: funannotate
   :replaces_section_title:

   funannotate\: eukaryotic genome annotation pipeline

   :homepage: https://github.com/nextgenusfs/funannotate
   :documentation: funannotate.readthedocs.io
   
   :license: BSD / BSD-2
   :recipe: /`funannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate/meta.yaml>`_

   


.. conda:package:: funannotate

   |downloads_funannotate| |docker_funannotate|

   :versions: 1.7.1-0
   
   :depends augustus: 
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 2.2.31
   :depends codingquarry: 
   :depends diamond: >0.9,<=0.9.24
   :depends ete3: 
   :depends evidencemodeler: 
   :depends exonerate: 
   :depends glimmerhmm: 
   :depends goatools: 
   :depends hisat2: 
   :depends hmmer: 
   :depends iqtree: 
   :depends kallisto: 
   :depends mafft: >=7
   :depends matplotlib: 
   :depends minimap2: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pasa: >=2.3
   :depends proteinortho: >=6.0.9
   :depends psutil: 
   :depends python: <3
   :depends raxml: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends snap: 
   :depends stringtie: 
   :depends tantan: 
   :depends tbl2asn: 
   :depends trimal: 
   :depends trimmomatic: 
   :depends trinity: >=2.8.5
   :depends trnascan-se: 
   :depends ucsc-pslcdnafilter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install funannotate

   and update with::

      conda update funannotate

   or use the docker container::

      docker pull quay.io/biocontainers/funannotate:<tag>

   (see `funannotate/tags`_ for valid values for ``<tag>``)


.. |downloads_funannotate| image:: https://img.shields.io/conda/dn/bioconda/funannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/funannotate
   :alt:   (downloads)
.. |docker_funannotate| image:: https://quay.io/repository/biocontainers/funannotate/status
   :target: https://quay.io/repository/biocontainers/funannotate
.. _`funannotate/tags`: https://quay.io/repository/biocontainers/funannotate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funannotate/README.html