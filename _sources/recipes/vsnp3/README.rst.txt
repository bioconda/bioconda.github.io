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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.14-0</code>,  <code>3.13-0</code>,  <code>3.12-0</code>,  <code>3.11-0</code>,  <code>3.10-0</code>,  <code>3.09-0</code>,  <code>3.08-0</code>,  <code>3.07-0</code>,  <code>3.06-0</code>,  </span></summary>
      

      ``3.14-0``,  ``3.13-0``,  ``3.12-0``,  ``3.11-0``,  ``3.10-0``,  ``3.09-0``,  ``3.08-0``,  ``3.07-0``,  ``3.06-0``,  ``3.05-0``,  ``3.04-0``,  ``3.02-0``,  ``3.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends biopython: ``>=1.79``
   :depends bwa: 
   :depends cairosvg: ``>=2.5.2``
   :depends dask: ``>=2022.01.1``
   :depends freebayes: ``>=1.3.5``
   :depends humanize: ``>=3.14.0``
   :depends minimap2: ``>=2.24``
   :depends numpy: ``>=1.21,<=1.23``
   :depends openpyxl: ``>=3.0.9``
   :depends pandas: ``>=1.4.0,<2.0``
   :depends parallel: 
   :depends pigz: 
   :depends py-cpuinfo: 
   :depends python: ``>=3.7``
   :depends pyvcf: 
   :depends raxml: ``>=8.2.12``
   :depends regex: ``>=2.5.110``
   :depends samtools: ``>=1.14``
   :depends scikit-allel: ``>=1.3.5``
   :depends seqkit: ``>=2.1.0``
   :depends sourmash: ``>=4.2.4``
   :depends spades: ``>=3.15.2``
   :depends svgwrite: ``>=1.4.1``
   :depends vcflib: 
   :depends vcftools: 
   :depends xlsxwriter: ``>=3.0.2``
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
        var versions = ["3.14","3.13","3.12","3.11","3.10"];
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