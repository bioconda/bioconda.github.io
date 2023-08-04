:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'condiga'
.. highlight: bash

condiga
=======

.. conda:recipe:: condiga
   :replaces_section_title:
   :noindex:

   ConDiGA\: Contigs Directed Gene Annotation for accurate protein sequence database construction in metaproteomics

   :homepage: https://github.com/metagentools/ConDiGA
   :license: MIT / MIT
   :recipe: /`condiga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/condiga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/condiga/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.04.19.537311`

   ConDiGA is a taxonomic annotation pipeline for metagenomic data to construct accurate protein sequence databases for deep metaproteomic coverage.



.. conda:package:: condiga

   |downloads_condiga| |docker_condiga|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends minimap2: 
   :depends python: 
   :depends taxonkit: 
   :depends tqdm: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install condiga

   and update with::

      conda update condiga

   or use the docker container::

      docker pull quay.io/biocontainers/condiga:<tag>

   (see `condiga/tags`_ for valid values for ``<tag>``)


.. |downloads_condiga| image:: https://img.shields.io/conda/dn/bioconda/condiga.svg?style=flat
   :target: https://anaconda.org/bioconda/condiga
   :alt:   (downloads)
.. |docker_condiga| image:: https://quay.io/repository/biocontainers/condiga/status
   :target: https://quay.io/repository/biocontainers/condiga
.. _`condiga/tags`: https://quay.io/repository/biocontainers/condiga?tab=tags


.. raw:: html

    <script>
        var package = "condiga";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/condiga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/condiga/README.html