:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsnp'
.. highlight: bash

vsnp
====

.. conda:recipe:: vsnp
   :replaces_section_title:
   :noindex:

   Rapidly call\, validate\, and compare SNPs from FASTQ files in a timely manner utilizing large data sets.

   :homepage: https://github.com/USDA-VS/vSNP
   :license: GPL3
   :recipe: /`vsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp/meta.yaml>`_

   


.. conda:package:: vsnp

   |downloads_vsnp| |docker_vsnp|

   :versions:
      
      

      ``2.03-2``,  ``2.03-1``,  ``2.03-0``,  ``0.2.02-0``,  ``0.2.01-0``,  ``0.2.0-0``

      

   
   :depends abyss: 
   :depends biopython: 
   :depends bwa: 
   :depends dask: 
   :depends freebayes: 
   :depends humanize: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends picard: 
   :depends py-cpuinfo: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends pyvcf: 
   :depends raxml: 
   :depends regex: 
   :depends samtools: 
   :depends scikit-allel: 
   :depends vcflib: 
   :depends xlrd: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vsnp

   and update with::

      conda update vsnp

   or use the docker container::

      docker pull quay.io/biocontainers/vsnp:<tag>

   (see `vsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_vsnp| image:: https://img.shields.io/conda/dn/bioconda/vsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/vsnp
   :alt:   (downloads)
.. |docker_vsnp| image:: https://quay.io/repository/biocontainers/vsnp/status
   :target: https://quay.io/repository/biocontainers/vsnp
.. _`vsnp/tags`: https://quay.io/repository/biocontainers/vsnp?tab=tags


.. raw:: html

    <script>
        var package = "vsnp";
        var versions = ["2.03","2.03","2.03","0.2.02","0.2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsnp/README.html