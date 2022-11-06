:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgsea'
.. highlight: bash

r-acidgsea
==========

.. conda:recipe:: r-acidgsea
   :replaces_section_title:
   :noindex:

   Parameterized fast gene set enrichment analysis.

   :homepage: https://r.acidgenomics.com/packages/acidgsea/
   :developer docs: https://github.com/acidgenomics/r-acidgsea
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea/meta.yaml>`_

   


.. conda:package:: r-acidgsea

   |downloads_r-acidgsea| |docker_r-acidgsea|

   :versions:
      
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``

      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-biocparallel: 
   :depends bioconductor-fgsea: 
   :depends bioconductor-genomeinfodb: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
   :depends bioconductor-summarizedexperiment: 
   :depends r-acidbase: 
   :depends r-acidcli: 
   :depends r-acidexperiment: 
   :depends r-acidgenerics: 
   :depends r-acidgenomes: 
   :depends r-acidmarkdown: 
   :depends r-acidplots: 
   :depends r-acidplyr: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-basejump: 
   :depends r-deseqanalysis: 
   :depends r-ggplot2: 
   :depends r-goalie: 
   :depends r-knitr: 
   :depends r-pipette: 
   :depends r-rmarkdown: 
   :depends r-sessioninfo: 
   :depends r-syntactic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidgsea

   and update with::

      conda update r-acidgsea

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidgsea:<tag>

   (see `r-acidgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgsea| image:: https://img.shields.io/conda/dn/bioconda/r-acidgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgsea
   :alt:   (downloads)
.. |docker_r-acidgsea| image:: https://quay.io/repository/biocontainers/r-acidgsea/status
   :target: https://quay.io/repository/biocontainers/r-acidgsea
.. _`r-acidgsea/tags`: https://quay.io/repository/biocontainers/r-acidgsea?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgsea";
        var versions = ["0.7.0","0.7.0","0.6.4","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgsea/README.html