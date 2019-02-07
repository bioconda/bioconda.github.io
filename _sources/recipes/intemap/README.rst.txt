.. title:: Package Recipe 'intemap'
.. highlight: bash


intemap
=======

.. conda:recipe:: intemap
   :replaces_section_title:

   Integrated metagenomic assembly pipeline for short reads

   :homepage: http://cqb.pku.edu.cn/ZhuLab/InteMAP/index.html
   :license: 
   :recipe: /`intemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intemap/meta.yaml>`_

   


.. conda:package:: intemap

   |downloads_intemap| |docker_intemap|

   :versions: 1.0

   :depends: :conda:package:`abyss`  :conda:package:`bowtie2`  :conda:package:`idba`  :conda:package:`libgcc`  :conda:package:`python` 2.7* :conda:package:`quake`  :conda:package:`wgs-assembler`  

   :required~by: |required_by_intemap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intemap

   and update with::

      conda update intemap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/intemap


.. |required_by_intemap| conda:required_by:: intemap
.. |downloads_intemap| image:: https://img.shields.io/conda/dn/bioconda/intemap.svg?style=flat
   :alt:   (downloads)
.. |docker_intemap| image:: https://quay.io/repository/biocontainers/intemap/status
   :target: https://quay.io/repository/biocontainers/intemap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intemap/README.html

