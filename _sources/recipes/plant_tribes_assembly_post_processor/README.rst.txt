:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plant_tribes_assembly_post_processor'
.. highlight: bash

plant_tribes_assembly_post_processor
====================================

.. conda:recipe:: plant_tribes_assembly_post_processor/1.0.4
   :replaces_section_title:

   Transcriptome assembly post processing pipeline

   :homepage: https://github.com/dePamphilis/PlantTribes
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plant_tribes_assembly_post_processor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_assembly_post_processor>`_/`1.0.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_assembly_post_processor/1.0.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_assembly_post_processor/1.0.4/meta.yaml>`_

   


.. conda:package:: plant_tribes_assembly_post_processor

   |downloads_plant_tribes_assembly_post_processor| |docker_plant_tribes_assembly_post_processor|

   :versions: 1.0.4-0, 1.0.3-1, 1.0.3-0, 1.0.2-1, 1.0.2-0, 1.0.1-1, 1.0.1-0, 1.0.0-1, 1.0.0-0
   
   :depends cap3: 
   :depends genometools-genometools: >=1,<2
   :depends hmmer: >=3
   :depends mafft: >=7,<8
   :depends perl: >=5.22
   :depends perl-estscan2: 
   :depends transdecoder: >=5,<6
   :depends trimal: >=1.4,<2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plant_tribes_assembly_post_processor

   and update with::

      conda update plant_tribes_assembly_post_processor

   or use the docker container::

      docker pull quay.io/biocontainers/plant_tribes_assembly_post_processor:<tag>

   (see `plant_tribes_assembly_post_processor/tags`_ for valid values for ``<tag>``)


.. |downloads_plant_tribes_assembly_post_processor| image:: https://img.shields.io/conda/dn/bioconda/plant_tribes_assembly_post_processor.svg?style=flat
   :target: https://anaconda.org/bioconda/plant_tribes_assembly_post_processor
   :alt:   (downloads)
.. |docker_plant_tribes_assembly_post_processor| image:: https://quay.io/repository/biocontainers/plant_tribes_assembly_post_processor/status
   :target: https://quay.io/repository/biocontainers/plant_tribes_assembly_post_processor
.. _`plant_tribes_assembly_post_processor/tags`: https://quay.io/repository/biocontainers/plant_tribes_assembly_post_processor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plant_tribes_assembly_post_processor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plant_tribes_assembly_post_processor/README.html