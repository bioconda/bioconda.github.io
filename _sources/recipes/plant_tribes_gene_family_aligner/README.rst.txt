:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plant_tribes_gene_family_aligner'
.. highlight: bash

plant_tribes_gene_family_aligner
================================

.. conda:recipe:: plant_tribes_gene_family_aligner/1.0.2
   :replaces_section_title:

   Gene family aligner pipeline

   :homepage: https://github.com/dePamphilis/PlantTribes
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`plant_tribes_gene_family_aligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_aligner>`_/`1.0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_aligner/1.0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plant_tribes_gene_family_aligner/1.0.2/meta.yaml>`_

   


.. conda:package:: plant_tribes_gene_family_aligner

   |downloads_plant_tribes_gene_family_aligner| |docker_plant_tribes_gene_family_aligner|

   :versions: 1.0.3-0, 1.0.2-1, 1.0.2-0, 1.0.0-1, 1.0.0-0
   
   :depends mafft: >=7,<8
   
   :depends pasta: >=1.7.8
   
   :depends perl: 5.22.0*
   
   :depends python: 2.7*
   
   :depends trimal: >=1.4,<2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plant_tribes_gene_family_aligner

   and update with::

      conda update plant_tribes_gene_family_aligner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/plant_tribes_gene_family_aligner:<tag>

   (see `plant_tribes_gene_family_aligner/tags`_ for valid values for ``<tag>``)


.. |downloads_plant_tribes_gene_family_aligner| image:: https://img.shields.io/conda/dn/bioconda/plant_tribes_gene_family_aligner.svg?style=flat
   :alt:   (downloads)
.. |docker_plant_tribes_gene_family_aligner| image:: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner/status
   :target: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner
.. _`plant_tribes_gene_family_aligner/tags`: https://quay.io/repository/biocontainers/plant_tribes_gene_family_aligner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plant_tribes_gene_family_aligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plant_tribes_gene_family_aligner/README.html