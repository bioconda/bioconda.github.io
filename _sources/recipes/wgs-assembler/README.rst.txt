.. title:: Package Recipe 'wgs-assembler'
.. highlight: bash


wgs-assembler
=============

.. conda:recipe:: wgs-assembler
   :replaces_section_title:

   Celera Assembler \(wgs\-assembler\) is a de novo whole\-genome shotgun \(WGS\) DNA sequence assembler

   :homepage: http://wgs-assembler.sourceforge.net/wiki/index.php?title=Main_Page
   :license: MIT
   :recipe: /`wgs-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs-assembler/meta.yaml>`_

   


.. conda:package:: wgs-assembler

   |downloads_wgs-assembler| |docker_wgs-assembler|

   :versions: 8.3

   :depends: :conda:package:`atac`  :conda:package:`blasr`  :conda:package:`estmapper`  :conda:package:`falcon`  :conda:package:`jellyfish`  :conda:package:`libgcc`  :conda:package:`meryl`  :conda:package:`pbdagcon`  :conda:package:`perl` 5.22.0* :conda:package:`samtools`  :conda:package:`sim4db`  

   :required~by: |required_by_wgs-assembler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgs-assembler

   and update with::

      conda update wgs-assembler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/wgs-assembler


.. |required_by_wgs-assembler| conda:required_by:: wgs-assembler
.. |downloads_wgs-assembler| image:: https://img.shields.io/conda/dn/bioconda/wgs-assembler.svg?style=flat
   :alt:   (downloads)
.. |docker_wgs-assembler| image:: https://quay.io/repository/biocontainers/wgs-assembler/status
   :target: https://quay.io/repository/biocontainers/wgs-assembler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs-assembler/README.html

