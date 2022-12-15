:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomics-data-index'
.. highlight: bash

genomics-data-index
===================

.. conda:recipe:: genomics-data-index
   :replaces_section_title:
   :noindex:

   Indexes genomics data \(nucleotide variants\, kmers\, MLST\) for fast querying of features.

   :homepage: https://github.com/apetkau/genomics-data-index
   :license: Apache-2.0
   :recipe: /`genomics-data-index <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomics-data-index>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomics-data-index/meta.yaml>`_

   


.. conda:package:: genomics-data-index

   |downloads_genomics-data-index| |docker_genomics-data-index|

   :versions:
      
      

      ``0.9.2-0``

      

   
   :depends bamtools: 
   :depends bcftools: ``>=1.13``
   :depends bedtools: 
   :depends biocommons.seqrepo: 
   :depends biopython: ``>=1.70``
   :depends click: 
   :depends click-config-file: 
   :depends coloredlogs: 
   :depends ete3: 
   :depends fasttree: 
   :depends htslib: ``>=1.13``
   :depends iqtree: 
   :depends jinja2: 
   :depends minimap2: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: ``>=1.0.0``
   :depends pathvalidate: 
   :depends pybedtools: 
   :depends pymysql: 
   :depends pyqt: 
   :depends pyroaring: 
   :depends pytest: 
   :depends python: ``>=3.8,<3.10``
   :depends pyyaml: 
   :depends requests: 
   :depends requests-html: 
   :depends samtools: ``>=1.13``
   :depends scikit-bio: 
   :depends scipy: ``<1.9``
   :depends snakemake: 
   :depends snpeff: 
   :depends sourmash: 
   :depends sqlalchemy: 
   :depends vcfpy: 
   :depends zipp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomics-data-index

   and update with::

      conda update genomics-data-index

   or use the docker container::

      docker pull quay.io/biocontainers/genomics-data-index:<tag>

   (see `genomics-data-index/tags`_ for valid values for ``<tag>``)


.. |downloads_genomics-data-index| image:: https://img.shields.io/conda/dn/bioconda/genomics-data-index.svg?style=flat
   :target: https://anaconda.org/bioconda/genomics-data-index
   :alt:   (downloads)
.. |docker_genomics-data-index| image:: https://quay.io/repository/biocontainers/genomics-data-index/status
   :target: https://quay.io/repository/biocontainers/genomics-data-index
.. _`genomics-data-index/tags`: https://quay.io/repository/biocontainers/genomics-data-index?tab=tags


.. raw:: html

    <script>
        var package = "genomics-data-index";
        var versions = ["0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomics-data-index/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomics-data-index/README.html