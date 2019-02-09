.. title:: Package Recipe 'frc'
.. highlight: bash


frc
===

.. conda:recipe:: frc
   :replaces_section_title:

   Computes FRC from SAM\/BAM file and not from afg files

   :homepage: https://github.com/vezzi/FRC_align
   :license: GPLv3
   :recipe: /`frc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frc/meta.yaml>`_

   


.. conda:package:: frc

   |downloads_frc| |docker_frc|

   :versions: 5b3f53e

   :depends: :conda:package:`bamtools`  :conda:package:`boost` 1.61* :conda:package:`samtools`  

   :required~by: |required_by_frc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install frc

   and update with::

      conda update frc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/frc


.. |required_by_frc| conda:required_by:: frc
.. |downloads_frc| image:: https://img.shields.io/conda/dn/bioconda/frc.svg?style=flat
   :alt:   (downloads)
.. |docker_frc| image:: https://quay.io/repository/biocontainers/frc/status
   :target: https://quay.io/repository/biocontainers/frc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frc/README.html

