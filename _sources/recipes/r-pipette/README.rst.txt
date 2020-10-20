:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pipette'
.. highlight: bash

r-pipette
=========

.. conda:recipe:: r-pipette
   :replaces_section_title:
   :noindex:

   Pipette biological data in and out of R.

   :homepage: https://pipette.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/pipette
   :license: GPL-3.0-only
   :recipe: /`r-pipette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pipette/meta.yaml>`_

   


.. conda:package:: r-pipette

   |downloads_r-pipette| |docker_r-pipette|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.19-0</code>,  <code>0.4.14-0</code>,  <code>0.4.13-0</code>,  <code>0.4.10-0</code>,  <code>0.4.9-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.3-1</code>,  </span></summary>
      

      ``0.4.19-0``,  ``0.4.14-0``,  ``0.4.13-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: 
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rtracklayer: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-singlecellexperiment: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-acidbase: ``>=0.2.3``
   :depends r-acidgenerics: ``>=0.4``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cli: ``>=2.0``
   :depends r-data.table: ``>=1.13``
   :depends r-goalie: ``>=0.4.9``
   :depends r-jsonlite: ``>=1.7``
   :depends r-matrix: ``>=1.2``
   :depends r-rappdirs: ``>=0.3``
   :depends r-rcurl: ``>=1.98``
   :depends r-readr: ``>=1.4.0``
   :depends r-readxl: ``>=1.3``
   :depends r-rio: ``>=0.5.16``
   :depends r-stringr: ``>=1.4``
   :depends r-syntactic: ``>=0.4.3``
   :depends r-tibble: ``>=3.0``
   :depends r-vroom: ``>=1.3``
   :depends r-yaml: ``>=2.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pipette

   and update with::

      conda update r-pipette

   or use the docker container::

      docker pull quay.io/biocontainers/r-pipette:<tag>

   (see `r-pipette/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pipette| image:: https://img.shields.io/conda/dn/bioconda/r-pipette.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pipette
   :alt:   (downloads)
.. |docker_r-pipette| image:: https://quay.io/repository/biocontainers/r-pipette/status
   :target: https://quay.io/repository/biocontainers/r-pipette
.. _`r-pipette/tags`: https://quay.io/repository/biocontainers/r-pipette?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pipette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pipette/README.html