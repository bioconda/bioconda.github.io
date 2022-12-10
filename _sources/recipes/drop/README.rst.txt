:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drop'
.. highlight: bash

drop
====

.. conda:recipe:: drop
   :replaces_section_title:
   :noindex:

   Detection of RNA Outlier Pipeline

   :homepage: https://github.com/gagneurlab/drop
   :documentation: https://gagneurlab-drop.readthedocs.io/en/latest/
   
   :license: OTHER / MIT
   :recipe: /`drop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drop/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41596-020-00462-5`

   


.. conda:package:: drop

   |downloads_drop| |docker_drop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends bcftools: ``>=1.9``
   :depends bioconductor-deseq2: 
   :depends bioconductor-fraser: ``>=1.10.0``
   :depends bioconductor-genomicscores: 
   :depends bioconductor-outrider: ``>=1.6.1``
   :depends bioconductor-variantannotation: 
   :depends click: ``>=7.0``
   :depends click-log: 
   :depends gatk4: ``>=4.0.4``
   :depends graphviz: 
   :depends htslib: 
   :depends pandas: 
   :depends pandoc: 
   :depends python: ``>=3.6``
   :depends python-dateutil: 
   :depends r-base: ``>=4.0.0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-rmarkdown: 
   :depends r-tidyr: 
   :depends r-tmae: ``>=1.0.4``
   :depends samtools: ``>=1.9``
   :depends snakemake-minimal: ``>=5.5.2``
   :depends star: ``>=2.7``
   :depends wbuild: ``>=1.8``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drop

   and update with::

      conda update drop

   or use the docker container::

      docker pull quay.io/biocontainers/drop:<tag>

   (see `drop/tags`_ for valid values for ``<tag>``)


.. |downloads_drop| image:: https://img.shields.io/conda/dn/bioconda/drop.svg?style=flat
   :target: https://anaconda.org/bioconda/drop
   :alt:   (downloads)
.. |docker_drop| image:: https://quay.io/repository/biocontainers/drop/status
   :target: https://quay.io/repository/biocontainers/drop
.. _`drop/tags`: https://quay.io/repository/biocontainers/drop?tab=tags


.. raw:: html

    <script>
        var package = "drop";
        var versions = ["1.2.4","1.2.3","1.2.2","1.2.1","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drop/README.html