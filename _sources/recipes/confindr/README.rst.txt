.. title:: Package Recipe 'confindr'
.. highlight: bash


confindr
========

.. conda:recipe:: confindr
   :replaces_section_title:

   Detect intra\- and inter\-species bacterial contamination in NGS reads

   :homepage: https://github.com/OLC-Bioinformatics/ConFindr
   :documentation: https://OLC-Bioinformatics.github.io/ConFindr/
   
   :license: MIT / MIT
   :recipe: /`confindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/confindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/confindr/meta.yaml>`_

   


.. conda:package:: confindr

   |downloads_confindr| |docker_confindr|

   :versions: 0.5.1, 0.5.0, 0.4.8, 0.4.7, 0.4.6, 0.4.5, 0.4.4, 0.4.3, 0.4.2, 0.4.1, 0.4.0, 0.3.4, 0.3.3, 0.3.2

   :depends: :conda:package:`bbmap` >=38 :conda:package:`biopython`  :conda:package:`mash` >=2 :conda:package:`minimap2`  :conda:package:`pysam` >=0.15 :conda:package:`pytest`  :conda:package:`python` >=3 :conda:package:`rauth`  :conda:package:`samtools` >=1.6 

   :required~by: |required_by_confindr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install confindr

   and update with::

      conda update confindr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/confindr


.. |required_by_confindr| conda:required_by:: confindr
.. |downloads_confindr| image:: https://img.shields.io/conda/dn/bioconda/confindr.svg?style=flat
   :alt:   (downloads)
.. |docker_confindr| image:: https://quay.io/repository/biocontainers/confindr/status
   :target: https://quay.io/repository/biocontainers/confindr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/confindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/confindr/README.html

