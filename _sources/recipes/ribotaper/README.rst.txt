:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotaper'
.. highlight: bash

ribotaper
=========

.. conda:recipe:: ribotaper
   :replaces_section_title:
   :noindex:

   RiboTaper is a new analysis pipeline for Ribosome Profiling \(Ribo\-seq\) experiments\, which exploits the triplet periodicity of ribosomal footprints to call translated regions.

   :homepage: https://ohlerlab.mdc-berlin.de/software/RiboTaper_126/
   :license: GPL
   :recipe: /`ribotaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper/meta.yaml>`_
   :links: biotools: :biotools:`ribotaper`, doi: :doi:`10.1038/nmeth.3688`

   


.. conda:package:: ribotaper

   |downloads_ribotaper| |docker_ribotaper|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.1a-6``,  ``1.3.1a-5``,  ``1.3.1a-4``,  ``1.3.1a-3``,  ``1.3.1a-2``,  ``1.3.1a-1``,  ``1.3.1a-0``

      

   
   :depends bedtools: ``==2.17.0``
   :depends r-ade4: 
   :depends r-domc: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-multitaper: 
   :depends r-seqinr: 
   :depends r-xnomial: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribotaper

   and update with::

      conda update ribotaper

   or use the docker container::

      docker pull quay.io/biocontainers/ribotaper:<tag>

   (see `ribotaper/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotaper| image:: https://img.shields.io/conda/dn/bioconda/ribotaper.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotaper
   :alt:   (downloads)
.. |docker_ribotaper| image:: https://quay.io/repository/biocontainers/ribotaper/status
   :target: https://quay.io/repository/biocontainers/ribotaper
.. _`ribotaper/tags`: https://quay.io/repository/biocontainers/ribotaper?tab=tags


.. raw:: html

    <script>
        var package = "ribotaper";
        var versions = ["1.3.1","1.3.1a","1.3.1a","1.3.1a","1.3.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotaper/README.html