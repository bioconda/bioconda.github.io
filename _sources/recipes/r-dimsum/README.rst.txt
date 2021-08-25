:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dimsum'
.. highlight: bash

r-dimsum
========

.. conda:recipe:: r-dimsum
   :replaces_section_title:
   :noindex:

   An error model and pipeline for analyzing deep mutational scanning \(DMS\) data and diagnosing common experimental pathologies

   :homepage: https://github.com/lehner-lab/DiMSum
   :license: MIT
   :recipe: /`r-dimsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dimsum/meta.yaml>`_

   


.. conda:package:: r-dimsum

   |downloads_r-dimsum| |docker_r-dimsum|

   :versions:
      
      

      ``1.2.8-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-iranges: 
   :depends bioconductor-shortread: 
   :depends cutadapt: 
   :depends fastqc: 
   :depends pandoc: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cairo: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-seqinr: 
   :depends r-stringr: 
   :depends starcode: 
   :depends vsearch: ``>=2.17``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dimsum

   and update with::

      conda update r-dimsum

   or use the docker container::

      docker pull quay.io/biocontainers/r-dimsum:<tag>

   (see `r-dimsum/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dimsum| image:: https://img.shields.io/conda/dn/bioconda/r-dimsum.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dimsum
   :alt:   (downloads)
.. |docker_r-dimsum| image:: https://quay.io/repository/biocontainers/r-dimsum/status
   :target: https://quay.io/repository/biocontainers/r-dimsum
.. _`r-dimsum/tags`: https://quay.io/repository/biocontainers/r-dimsum?tab=tags


.. raw:: html

    <script>
        var package = "r-dimsum";
        var versions = ["1.2.8","1.2.7","1.2.7","1.2.7","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dimsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dimsum/README.html