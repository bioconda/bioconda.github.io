:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs-assembler'
.. highlight: bash

wgs-assembler
=============

.. conda:recipe:: wgs-assembler
   :replaces_section_title:
   :noindex:

   Celera Assembler \(wgs\-assembler\) is a de novo whole\-genome shotgun \(WGS\) DNA sequence assembler

   :homepage: http://wgs-assembler.sourceforge.net/wiki/index.php?title=Main_Page
   :license: MIT
   :recipe: /`wgs-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler/meta.yaml>`_

   


.. conda:package:: wgs-assembler

   |downloads_wgs-assembler| |docker_wgs-assembler|

   :versions:
      
      

      ``8.3-0``

      

   
   :depends atac: 
   :depends blasr: 
   :depends estmapper: 
   :depends falcon: 
   :depends jellyfish: 
   :depends libgcc: 
   :depends meryl: 
   :depends pbdagcon: 
   :depends perl: ``5.22.0*``
   :depends samtools: 
   :depends sim4db: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgs-assembler

   and update with::

      conda update wgs-assembler

   or use the docker container::

      docker pull quay.io/biocontainers/wgs-assembler:<tag>

   (see `wgs-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_wgs-assembler| image:: https://img.shields.io/conda/dn/bioconda/wgs-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/wgs-assembler
   :alt:   (downloads)
.. |docker_wgs-assembler| image:: https://quay.io/repository/biocontainers/wgs-assembler/status
   :target: https://quay.io/repository/biocontainers/wgs-assembler
.. _`wgs-assembler/tags`: https://quay.io/repository/biocontainers/wgs-assembler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs-assembler/README.html