:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panpasco'
.. highlight: bash

panpasco
========

.. conda:recipe:: panpasco
   :replaces_section_title:
   :noindex:

   Pipeline for pangenome mapping and pairwise SNP distance

   :homepage: https://gitlab.com/rki_bioinformatics/panpasco
   :license: MIT
   :recipe: /`panpasco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco/meta.yaml>`_

   PANPASCO uses linear computational pan\-genomes 
   and pairwise SNP distance calculation to improve
   distance matrix analyses


.. conda:package:: panpasco

   |downloads_panpasco| |docker_panpasco|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: ``2.27.*``
   :depends bioconductor-genomicranges: 
   :depends bwa: ``0.7.17.*``
   :depends flash: ``1.2.11.*``
   :depends gatk: ``3.8.*``
   :depends picard: ``2.18.*``
   :depends python: ``>3``
   :depends r-argparse: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends samtools: 
   :depends seqtk: 
   :depends snakemake: 
   :depends tabix: 
   :depends trimmomatic: ``0.36.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panpasco

   and update with::

      conda update panpasco

   or use the docker container::

      docker pull quay.io/biocontainers/panpasco:<tag>

   (see `panpasco/tags`_ for valid values for ``<tag>``)


.. |downloads_panpasco| image:: https://img.shields.io/conda/dn/bioconda/panpasco.svg?style=flat
   :target: https://anaconda.org/bioconda/panpasco
   :alt:   (downloads)
.. |docker_panpasco| image:: https://quay.io/repository/biocontainers/panpasco/status
   :target: https://quay.io/repository/biocontainers/panpasco
.. _`panpasco/tags`: https://quay.io/repository/biocontainers/panpasco?tab=tags


.. raw:: html

    <script>
        var package = "panpasco";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panpasco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panpasco/README.html