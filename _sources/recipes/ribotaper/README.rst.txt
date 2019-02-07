.. title:: Package Recipe 'ribotaper'
.. highlight: bash


ribotaper
=========

.. conda:recipe:: ribotaper
   :replaces_section_title:

   RiboTaper is a new analysis pipeline for Ribosome Profiling \(Ribo\-seq\) experiments\, which exploits the triplet periodicity of ribosomal footprints to call translated regions.

   :homepage: https://ohlerlab.mdc-berlin.de/software/RiboTaper_126/
   :license: GPL
   :recipe: /`ribotaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper/meta.yaml>`_
   :links: biotools: :biotools:`ribotaper`, doi: :doi:`10.1038/nmeth.3688`

   


.. conda:package:: ribotaper

   |downloads_ribotaper| |docker_ribotaper|

   :versions: 1.3.1, 1.3.1a

   :depends: :conda:package:`bedtools` ==2.17.0 :conda:package:`r-ade4`  :conda:package:`r-domc`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-multitaper`  :conda:package:`r-seqinr`  :conda:package:`r-xnomial`  :conda:package:`samtools`  

   :required~by: |required_by_ribotaper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotaper

   and update with::

      conda update ribotaper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ribotaper


.. |required_by_ribotaper| conda:required_by:: ribotaper
.. |downloads_ribotaper| image:: https://img.shields.io/conda/dn/bioconda/ribotaper.svg?style=flat
   :alt:   (downloads)
.. |docker_ribotaper| image:: https://quay.io/repository/biocontainers/ribotaper/status
   :target: https://quay.io/repository/biocontainers/ribotaper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotaper/README.html

