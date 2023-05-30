:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minute'
.. highlight: bash

minute
======

.. conda:recipe:: minute
   :replaces_section_title:
   :noindex:

   MINUTE\-ChIP data analysis workflow

   :homepage: https://github.com/NBISweden/minute/
   :license: MIT
   :recipe: /`minute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minute/meta.yaml>`_

   


.. conda:package:: minute

   |downloads_minute| |docker_minute|

   :versions:
      
      

      ``0.3.3-0``,  ``0.2.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends bowtie2: ``>=2.4.4``
   :depends cutadapt: ``>=3.7``
   :depends deeptools: ``>=3.5.0``
   :depends fastqc: ``>=0.11.9``
   :depends igvtools: ``>=2.5.3``
   :depends je-suite: ``>=2.0.RC``
   :depends multiqc: ``1.13.*``
   :depends picard: ``>=2.26.0``
   :depends python: ``>=3.7``
   :depends r-base: ``>=4.0.0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.3.0``
   :depends ruamel.yaml: 
   :depends samtools: ``>=1.13``
   :depends snakemake-minimal: ``>=7.22.0``
   :depends sra-tools: ``>=2.11.0``
   :depends xopen: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minute

   and update with::

      conda update minute

   or use the docker container::

      docker pull quay.io/biocontainers/minute:<tag>

   (see `minute/tags`_ for valid values for ``<tag>``)


.. |downloads_minute| image:: https://img.shields.io/conda/dn/bioconda/minute.svg?style=flat
   :target: https://anaconda.org/bioconda/minute
   :alt:   (downloads)
.. |docker_minute| image:: https://quay.io/repository/biocontainers/minute/status
   :target: https://quay.io/repository/biocontainers/minute
.. _`minute/tags`: https://quay.io/repository/biocontainers/minute?tab=tags


.. raw:: html

    <script>
        var package = "minute";
        var versions = ["0.3.3","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minute/README.html