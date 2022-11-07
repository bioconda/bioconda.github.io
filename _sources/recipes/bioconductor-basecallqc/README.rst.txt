:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basecallqc'
.. highlight: bash

bioconductor-basecallqc
=======================

.. conda:recipe:: bioconductor-basecallqc
   :replaces_section_title:
   :noindex:

   Working with Illumina Basecalling and Demultiplexing input and output files

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/basecallQC.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-basecallqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc/meta.yaml>`_

   The basecallQC package provides tools to work with Illumina bcl2Fastq \(versions \>\= 2.1.7\) software.Prior to basecalling and demultiplexing using the bcl2Fastq software\, basecallQC functions allow the user to update Illumina sample sheets from versions \<\= 1.8.9 to \>\= 2.1.7 standards\, clean sample sheets of common problems such as invalid sample names and IDs\, create read and index basemasks and the bcl2Fastq command. Following the generation of basecalled and demultiplexed data\, the basecallQC packages allows the user to generate HTML tables\, plots and a self contained report of summary metrics from Illumina XML output files.


.. conda:package:: bioconductor-basecallqc

   |downloads_bioconductor-basecallqc| |docker_bioconductor-basecallqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-shortread: ``>=1.56.0,<1.57.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-lazyeval: 
   :depends r-magrittr: 
   :depends r-prettydoc: 
   :depends r-raster: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends r-xml: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basecallqc

   and update with::

      conda update bioconductor-basecallqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basecallqc:<tag>

   (see `bioconductor-basecallqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basecallqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basecallqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basecallqc
   :alt:   (downloads)
.. |docker_bioconductor-basecallqc| image:: https://quay.io/repository/biocontainers/bioconductor-basecallqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basecallqc
.. _`bioconductor-basecallqc/tags`: https://quay.io/repository/biocontainers/bioconductor-basecallqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basecallqc";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>





Notes
-----
\'This package relies on bcl2fastq being available in the system PATH.  Due to licensing
restrictions Bioconda does not provide this package.\'



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html