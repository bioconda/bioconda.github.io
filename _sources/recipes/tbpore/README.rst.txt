:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbpore'
.. highlight: bash

tbpore
======

.. conda:recipe:: tbpore
   :replaces_section_title:
   :noindex:

   Mycobacterium tuberculosis genomic analysis from Nanopore sequencing data

   :homepage: https://github.com/mbhall88/tbpore
   :license: MIT
   :recipe: /`tbpore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbpore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbpore/meta.yaml>`_

   


.. conda:package:: tbpore

   |downloads_tbpore| |docker_tbpore|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends bcftools: ``1.13.*``
   :depends click: ``>=8.0.3,<9.0``
   :depends cyvcf2: ``>=0.30,<1.0``
   :depends loguru: ``>=0.5.3,<1.0``
   :depends minimap2: ``2.22.*``
   :depends mykrobe: ``0.11.*``
   :depends networkx: ``>=2.8,<3.0``
   :depends pandas: ``>=1.4.2,<2.0``
   :depends psdm: ``0.1.*``
   :depends pysam: ``0.17.*``
   :depends python: ``>=3.8,<3.10``
   :depends pyyaml: ``>=6.0``
   :depends rasusa: 
   :depends samtools: ``1.13.*``
   :depends seqkit: ``2.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tbpore

   and update with::

      conda update tbpore

   or use the docker container::

      docker pull quay.io/biocontainers/tbpore:<tag>

   (see `tbpore/tags`_ for valid values for ``<tag>``)


.. |downloads_tbpore| image:: https://img.shields.io/conda/dn/bioconda/tbpore.svg?style=flat
   :target: https://anaconda.org/bioconda/tbpore
   :alt:   (downloads)
.. |docker_tbpore| image:: https://quay.io/repository/biocontainers/tbpore/status
   :target: https://quay.io/repository/biocontainers/tbpore
.. _`tbpore/tags`: https://quay.io/repository/biocontainers/tbpore?tab=tags


.. raw:: html

    <script>
        var package = "tbpore";
        var versions = ["0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbpore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbpore/README.html