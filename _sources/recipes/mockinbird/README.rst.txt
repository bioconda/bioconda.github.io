:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mockinbird'
.. highlight: bash

mockinbird
==========

.. conda:recipe:: mockinbird
   :replaces_section_title:

   A fully automatic and reproducible PAR\-CLIP analysis pipeline

   :homepage: https://github.com/soedinglab/mockinbird
   :documentation: http://wwwuser.gwdg.de/~compbiol/mockinbird/doc/
   
   :license: GPL3 / GPL-3
   :recipe: /`mockinbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird/meta.yaml>`_

   


.. conda:package:: mockinbird

   |downloads_mockinbird| |docker_mockinbird|

   :versions: 1.0.0a1-2, 1.0.0a1-1, 1.0.0a1-0
   
   :depends bowtie: 
   :depends fastqc: 
   :depends jinja2: 
   :depends libgcc-ng: >=7.3.0
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: >=3.6,<3.7.0a0
   :depends pyyaml: 
   :depends r-base: 
   :depends r-lsd: 
   :depends samtools: 
   :depends scipy: 
   :depends seaborn: 
   :depends star: 
   :depends xxmotif: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mockinbird

   and update with::

      conda update mockinbird

   or use the docker container::

      docker pull quay.io/biocontainers/mockinbird:<tag>

   (see `mockinbird/tags`_ for valid values for ``<tag>``)


.. |downloads_mockinbird| image:: https://img.shields.io/conda/dn/bioconda/mockinbird.svg?style=flat
   :alt:   (downloads)
.. |docker_mockinbird| image:: https://quay.io/repository/biocontainers/mockinbird/status
   :target: https://quay.io/repository/biocontainers/mockinbird
.. _`mockinbird/tags`: https://quay.io/repository/biocontainers/mockinbird?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mockinbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mockinbird/README.html