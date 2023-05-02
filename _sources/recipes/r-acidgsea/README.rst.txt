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
      
      

      ``0.8.8-0``,  ``0.8.7-1``,  ``0.8.7-0``,  ``0.8.6-1``,  ``0.8.6-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0``
   :depends bioconductor-biocparallel: ``>=1.32.0``
   :depends bioconductor-fgsea: ``>=1.24.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0``
   :depends bioconductor-iranges: ``>=2.32.0``
   :depends bioconductor-s4vectors: ``>=0.36.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0``
   :depends r-acidbase: ``>=0.6.15``
   :depends r-acidcli: ``>=0.2.7``
   :depends r-acidexperiment: ``>=0.4.7``
   :depends r-acidgenerics: ``>=0.6.7``
   :depends r-acidgenomes: ``>=0.5.0``
   :depends r-acidmarkdown: ``>=0.2.5``
   :depends r-acidplots: ``>=0.5.5``
   :depends r-acidplyr: ``>=0.3.10``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-basejump: ``>=0.16.5``
   :depends r-deseqanalysis: ``>=0.6.8``
   :depends r-ggplot2: ``>=3.4.2``
   :depends r-goalie: ``>=0.6.9``
   :depends r-knitr: ``>=1.42``
   :depends r-pipette: ``>=0.10.9``
   :depends r-rmarkdown: ``>=2.17``
   :depends r-syntactic: ``>=0.6.5``
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
        var versions = ["0.8.8","0.8.7","0.8.7","0.8.6","0.8.6"];
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