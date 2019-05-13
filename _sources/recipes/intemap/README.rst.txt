:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0-1, 1.0-0
   
   :depends abyss: 
   :depends bowtie2: 
   :depends idba: 
   :depends jellyfish: 
   :depends libgcc: 
   :depends mummer: 
   :depends python: 2.7*
   :depends quake: 
   :depends wgs-assembler: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intemap

   and update with::

      conda update intemap

   or use the docker container::

      docker pull quay.io/biocontainers/intemap:<tag>

   (see `intemap/tags`_ for valid values for ``<tag>``)


.. |downloads_intemap| image:: https://img.shields.io/conda/dn/bioconda/intemap.svg?style=flat
   :target: https://anaconda.org/bioconda/intemap
   :alt:   (downloads)
.. |docker_intemap| image:: https://quay.io/repository/biocontainers/intemap/status
   :target: https://quay.io/repository/biocontainers/intemap
.. _`intemap/tags`: https://quay.io/repository/biocontainers/intemap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intemap/README.html