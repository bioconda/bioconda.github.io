:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msi'
.. highlight: bash

msi
===

.. conda:recipe:: msi
   :replaces_section_title:
   :noindex:

   Metabarcoding sequences identification \- from nanopore reads to taxa tables.

   :homepage: http://github.com/nunofonseca/msi/
   :license: GPL / GPL-3
   :recipe: /`msi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msi/meta.yaml>`_
   :links: biotools: :biotools:`msi`, doi: :doi:`10.5281/zenodo.3855032`

   


.. conda:package:: msi

   |downloads_msi| |docker_msi|

   :versions:
      
      

      ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-3``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends cd-hit: 
   :depends cutadapt: 
   :depends emboss: 
   :depends fastq_utils: 
   :depends fastqc: 
   :depends isonclust: 
   :depends metabinkit: 
   :depends minimap2: 
   :depends pcre: 
   :depends python: ``3.8.*``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-optparse: 
   :depends r-r.utils: 
   :depends r-tidyr: 
   :depends racon: 
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msi

   and update with::

      conda update msi

   or use the docker container::

      docker pull quay.io/biocontainers/msi:<tag>

   (see `msi/tags`_ for valid values for ``<tag>``)


.. |downloads_msi| image:: https://img.shields.io/conda/dn/bioconda/msi.svg?style=flat
   :target: https://anaconda.org/bioconda/msi
   :alt:   (downloads)
.. |docker_msi| image:: https://quay.io/repository/biocontainers/msi/status
   :target: https://quay.io/repository/biocontainers/msi
.. _`msi/tags`: https://quay.io/repository/biocontainers/msi?tab=tags


.. raw:: html

    <script>
        var package = "msi";
        var versions = ["0.3.7","0.3.6","0.3.5","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msi/README.html