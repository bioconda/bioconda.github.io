:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-plasmidprofiler'
.. highlight: bash

r-plasmidprofiler
=================

.. conda:recipe:: r-plasmidprofiler
   :replaces_section_title:

   Contains functions developed to combine the results of querying a plasmid database using short\-read sequence typing with the results of a blast analysis against the query results.

   :homepage: https://CRAN.R-project.org/package=Plasmidprofiler
   :license: APACHE / Apache License 2.0
   :recipe: /`r-plasmidprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-plasmidprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-plasmidprofiler/meta.yaml>`_

   


.. conda:package:: r-plasmidprofiler

   |downloads_r-plasmidprofiler| |docker_r-plasmidprofiler|

   :versions: 0.1.6-3, 0.1.6-2, 0.1.6-1, 0.1.6-0, 0.1.4-0
   
   :depends pandoc: 1.19.2
   
   :depends r: 3.3.1
   
   :depends r-ape: 3.5
   
   :depends r-dplyr: 0.5.0
   
   :depends r-gdata: 2.17.0
   
   :depends r-ggdendro: 0.1_17
   
   :depends r-ggplot2: 2.1.0
   
   :depends r-gridextra: 2.2.1
   
   :depends r-gtable: 0.2.0
   
   :depends r-htmlwidgets: 0.6
   
   :depends r-magrittr: 1.5
   
   :depends r-plotly: 4.5.2
   
   :depends r-plyr: 1.8.4
   
   :depends r-rcolorbrewer: 1.1_2
   
   :depends r-reshape2: 1.4.2
   
   :depends r-stringr: 1.1.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-plasmidprofiler

   and update with::

      conda update r-plasmidprofiler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-plasmidprofiler:<tag>

   (see `r-plasmidprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_r-plasmidprofiler| image:: https://img.shields.io/conda/dn/bioconda/r-plasmidprofiler.svg?style=flat
   :alt:   (downloads)
.. |docker_r-plasmidprofiler| image:: https://quay.io/repository/biocontainers/r-plasmidprofiler/status
   :target: https://quay.io/repository/biocontainers/r-plasmidprofiler
.. _`r-plasmidprofiler/tags`: https://quay.io/repository/biocontainers/r-plasmidprofiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-plasmidprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-plasmidprofiler/README.html