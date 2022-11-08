:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-garnett'
.. highlight: bash

r-garnett
=========

.. conda:recipe:: r-garnett
   :replaces_section_title:
   :noindex:

   Bioconda\-installable version of Garnett cell classification tool.

   :homepage: https://cole-trapnell-lab.github.io/garnett/
   :developer docs: https://github.com/cole-trapnell-lab/garnett
   :license: MIT / MIT
   :recipe: /`r-garnett <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett/meta.yaml>`_

   


.. conda:package:: r-garnett

   |downloads_r-garnett| |docker_r-garnett|

   :versions:
      
      

      ``0.2.8-4``,  ``0.2.8-3``,  ``0.2.8-2``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.1.4-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.44.0``
   :depends bioconductor-biobase: ``>=2.42.0``
   :depends bioconductor-delayedarray: ``>=0.8.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.4.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.7.0``
   :depends bioconductor-org.mm.eg.db: 
   :depends r-assertthat: ``>=0.2.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: ``>=1.0.14``
   :depends r-forcats: ``>=0.3.0``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-ggrepel: ``>=0.8.0``
   :depends r-glmnet: ``>=2.0_16``
   :depends r-igraph: ``>=1.2.2``
   :depends r-irlba: ``>=2.3.2``
   :depends r-matrix: ``>=1.2_15``
   :depends r-monocle3: 
   :depends r-plyr: ``>=1.8.4``
   :depends r-rann: ``>=2.6``
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rly: ``>=1.6.2``
   :depends r-stringr: ``>=1.3.1``
   :depends r-viridis: ``>=0.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-garnett

   and update with::

      conda update r-garnett

   or use the docker container::

      docker pull quay.io/biocontainers/r-garnett:<tag>

   (see `r-garnett/tags`_ for valid values for ``<tag>``)


.. |downloads_r-garnett| image:: https://img.shields.io/conda/dn/bioconda/r-garnett.svg?style=flat
   :target: https://anaconda.org/bioconda/r-garnett
   :alt:   (downloads)
.. |docker_r-garnett| image:: https://quay.io/repository/biocontainers/r-garnett/status
   :target: https://quay.io/repository/biocontainers/r-garnett
.. _`r-garnett/tags`: https://quay.io/repository/biocontainers/r-garnett?tab=tags


.. raw:: html

    <script>
        var package = "r-garnett";
        var versions = ["0.2.8","0.2.8","0.2.8","0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-garnett/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-garnett/README.html