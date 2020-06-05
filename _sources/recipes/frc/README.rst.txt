:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'frc'
.. highlight: bash

frc
===

.. conda:recipe:: frc
   :replaces_section_title:
   :noindex:

   Computes FRC from SAM\/BAM file and not from afg files

   :homepage: https://github.com/vezzi/FRC_align
   :license: GPLv3
   :recipe: /`frc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/frc/meta.yaml>`_

   


.. conda:package:: frc

   |downloads_frc| |docker_frc|

   :versions:
      
      

      ``5b3f53e-0``

      

   
   :depends bamtools: 
   :depends boost: ``1.61*``
   :depends libgcc: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install frc

   and update with::

      conda update frc

   or use the docker container::

      docker pull quay.io/biocontainers/frc:<tag>

   (see `frc/tags`_ for valid values for ``<tag>``)


.. |downloads_frc| image:: https://img.shields.io/conda/dn/bioconda/frc.svg?style=flat
   :target: https://anaconda.org/bioconda/frc
   :alt:   (downloads)
.. |docker_frc| image:: https://quay.io/repository/biocontainers/frc/status
   :target: https://quay.io/repository/biocontainers/frc
.. _`frc/tags`: https://quay.io/repository/biocontainers/frc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/frc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/frc/README.html