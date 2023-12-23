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
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends mscorefonts: 
   :depends openpyxl: 
   :depends pandas: 
   :depends poppler: 
   :depends reportlab: 
   :depends requests: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install keggcharter

   and update with::

      mamba update keggcharter

  To create a new environment, run::

      mamba create --name myenvname keggcharter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/keggcharter:<tag>

   (see `keggcharter/tags`_ for valid values for ``<tag>``)


.. |downloads_keggcharter| image:: https://img.shields.io/conda/dn/bioconda/keggcharter.svg?style=flat
   :target: https://anaconda.org/bioconda/keggcharter
   :alt:   (downloads)
.. |docker_keggcharter| image:: https://quay.io/repository/biocontainers/keggcharter/status
   :target: https://quay.io/repository/biocontainers/keggcharter
.. _`keggcharter/tags`: https://quay.io/repository/biocontainers/keggcharter?tab=tags


.. raw:: html

    <script>
        var package = "keggcharter";
        var versions = ["1.0.1","1.0.0","0.7.1","0.7.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/keggcharter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/keggcharter/README.html