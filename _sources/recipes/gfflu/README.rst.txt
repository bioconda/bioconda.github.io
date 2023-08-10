:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfflu'
.. highlight: bash

gfflu
=====

.. conda:recipe:: gfflu
   :replaces_section_title:
   :noindex:

   Annotate Influenza A virus gene segment sequences and output GFF3 files.

   :homepage: https://github.com/CFIA-NCFAD/gfflu
   :license: MIT
   :recipe: /`gfflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfflu/meta.yaml>`_

   


.. conda:package:: gfflu

   |downloads_gfflu| |docker_gfflu|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends blast: 
   :depends miniprot: 
   :depends polars: 
   :depends python: ``>=3.8``
   :depends rich: 
   :depends typer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfflu

   and update with::

      conda update gfflu

   or use the docker container::

      docker pull quay.io/biocontainers/gfflu:<tag>

   (see `gfflu/tags`_ for valid values for ``<tag>``)


.. |downloads_gfflu| image:: https://img.shields.io/conda/dn/bioconda/gfflu.svg?style=flat
   :target: https://anaconda.org/bioconda/gfflu
   :alt:   (downloads)
.. |docker_gfflu| image:: https://quay.io/repository/biocontainers/gfflu/status
   :target: https://quay.io/repository/biocontainers/gfflu
.. _`gfflu/tags`: https://quay.io/repository/biocontainers/gfflu?tab=tags


.. raw:: html

    <script>
        var package = "gfflu";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfflu/README.html