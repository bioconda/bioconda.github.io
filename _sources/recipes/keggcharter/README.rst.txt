:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'keggcharter'
.. highlight: bash

keggcharter
===========

.. conda:recipe:: keggcharter
   :replaces_section_title:
   :noindex:

   A tool for representing genomic potential and transcriptomic expression into KEGG pathways

   :homepage: https://github.com/iquasere/KEGGCharter
   :documentation: https://github.com/iquasere/KEGGCharter/blob/master/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`keggcharter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/keggcharter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/keggcharter/meta.yaml>`_

   KEGGCharter takes as input a quantification table of proteins with corresponding
   KEGG IDs available and maps that information into KEGG metabolic maps using 
   the KEGG API. Both genomic potential \(from either genomics or metagenomics\)
   and gene expression quantification \(from either \(meta\)transcriptomics or
   \(meta\)proteomics\) can be represented. Genomic information is mapped in a binary
   exists or not rule\, for each taxon available KEGGCharter will assign a color
   which will be included in the boxes corresponding to functions present in that
   taxon. Gene expression quantification is mapped as differential expression
   where quantification between the several columns specified is represented as
   a single row heatmap for each function present in the data.



.. conda:package:: keggcharter

   |downloads_keggcharter| |docker_keggcharter|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends progressbar: 
   :depends reportlab: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install keggcharter

   and update with::

      conda update keggcharter

   or use the docker container::

      docker pull quay.io/biocontainers/keggcharter:<tag>

   (see `keggcharter/tags`_ for valid values for ``<tag>``)


.. |downloads_keggcharter| image:: https://img.shields.io/conda/dn/bioconda/keggcharter.svg?style=flat
   :target: https://anaconda.org/bioconda/keggcharter
   :alt:   (downloads)
.. |docker_keggcharter| image:: https://quay.io/repository/biocontainers/keggcharter/status
   :target: https://quay.io/repository/biocontainers/keggcharter
.. _`keggcharter/tags`: https://quay.io/repository/biocontainers/keggcharter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/keggcharter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/keggcharter/README.html