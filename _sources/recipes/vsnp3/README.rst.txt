:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsnp3'
.. highlight: bash

vsnp3
=====

.. conda:recipe:: vsnp3
   :replaces_section_title:
   :noindex:

   Rapidly call\, validate\, and compare SNPs from FASTQ files in a timely manner utilizing large data sets.

   :homepage: https://github.com/USDA-VS/vsnp3
   :license: GPL3
   :recipe: /`vsnp3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3/meta.yaml>`_

   


.. conda:package:: vsnp3

   |downloads_vsnp3| |docker_vsnp3|

   :versions:
      
      

      ``3.02-0``,  ``3.01-0``

      

   
   :depends biopython: 
   :depends cairosvg: 
   :depends dask: 
   :depends freebayes: 
   :depends humanize: 
   :depends minimap2: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends parallel: 
   :depends pigz: 
   :depends py-cpuinfo: 
   :depends python: ``>=3.7``
   :depends pyvcf: 
   :depends raxml: 
   :depends regex: 
   :depends samtools: ``1.14``
   :depends scikit-allel: 
   :depends seqkit: 
   :depends sourmash: 
   :depends spades: 
   :depends svgwrite: 
   :depends vcflib: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vsnp3

   and update with::

      conda update vsnp3

   or use the docker container::

      docker pull quay.io/biocontainers/vsnp3:<tag>

   (see `vsnp3/tags`_ for valid values for ``<tag>``)


.. |downloads_vsnp3| image:: https://img.shields.io/conda/dn/bioconda/vsnp3.svg?style=flat
   :target: https://anaconda.org/bioconda/vsnp3
   :alt:   (downloads)
.. |docker_vsnp3| image:: https://quay.io/repository/biocontainers/vsnp3/status
   :target: https://quay.io/repository/biocontainers/vsnp3
.. _`vsnp3/tags`: https://quay.io/repository/biocontainers/vsnp3?tab=tags


.. raw:: html

    <script>
        var package = "vsnp3";
        var versions = ["3.02","3.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsnp3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsnp3/README.html