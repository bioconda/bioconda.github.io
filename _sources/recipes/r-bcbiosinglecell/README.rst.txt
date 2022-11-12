:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiosinglecell'
.. highlight: bash

r-bcbiosinglecell
=================

.. conda:recipe:: r-bcbiosinglecell
   :replaces_section_title:
   :noindex:

   R package for bcbio single\-cell RNA\-seq analysis.

   :homepage: https://r.acidgenomics.com/packages/bcbiosinglecell/
   :developer docs: https://github.com/hbc/bcbioSingleCell
   :license: MIT
   :recipe: /`r-bcbiosinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiosinglecell/meta.yaml>`_

   


.. conda:package:: r-bcbiosinglecell

   |downloads_r-bcbiosinglecell| |docker_r-bcbiosinglecell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.5.0-0</code>,  <code>0.4.16-1</code>,  <code>0.4.16-0</code>,  <code>0.4.13-0</code>,  <code>0.4.12-1</code>,  <code>0.4.12-0</code>,  <code>0.4.11-0</code>,  </span></summary>
      

      ``0.6.2-1``,  ``0.6.2-0``,  ``0.5.0-0``,  ``0.4.16-1``,  ``0.4.16-0``,  ``0.4.13-0``,  ``0.4.12-1``,  ``0.4.12-0``,  ``0.4.11-0``,  ``0.4.10-1``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.42.0``
   :depends bioconductor-biocparallel: ``>=1.30.0``
   :depends bioconductor-biostrings: ``>=2.64.0``
   :depends bioconductor-iranges: ``>=2.30.0``
   :depends bioconductor-s4vectors: ``>=0.34.0``
   :depends bioconductor-singlecellexperiment: ``>=1.18.0``
   :depends bioconductor-summarizedexperiment: ``>=1.26.0``
   :depends r-acidbase: ``>=0.6.8``
   :depends r-acidcli: ``>=0.2.4``
   :depends r-acidexperiment: ``>=0.4.4``
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-acidgenomes: ``>=0.4.4``
   :depends r-acidmarkdown: ``>=0.2.4``
   :depends r-acidplots: ``>=0.5.1``
   :depends r-acidplyr: ``>=0.3.2``
   :depends r-acidsinglecell: ``>=0.3.3``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-basejump: ``>=0.16.0``
   :depends r-bcbiobase: ``>=0.8.1``
   :depends r-ggplot2: ``>=3.3.6``
   :depends r-ggridges: ``>=0.5.4``
   :depends r-goalie: ``>=0.6.6``
   :depends r-pipette: ``>=0.10.0``
   :depends r-rmarkdown: ``>=2.17``
   :depends r-stringi: ``>=1.7.8``
   :depends r-syntactic: ``>=0.6.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiosinglecell

   and update with::

      conda update r-bcbiosinglecell

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiosinglecell:<tag>

   (see `r-bcbiosinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiosinglecell| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiosinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiosinglecell
   :alt:   (downloads)
.. |docker_r-bcbiosinglecell| image:: https://quay.io/repository/biocontainers/r-bcbiosinglecell/status
   :target: https://quay.io/repository/biocontainers/r-bcbiosinglecell
.. _`r-bcbiosinglecell/tags`: https://quay.io/repository/biocontainers/r-bcbiosinglecell?tab=tags


.. raw:: html

    <script>
        var package = "r-bcbiosinglecell";
        var versions = ["0.6.2","0.6.2","0.5.0","0.4.16","0.4.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiosinglecell/README.html