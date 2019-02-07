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

   :versions: 0.1.6, 0.1.4

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-gdata`  :conda:package:`r-ggdendro`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-htmlwidgets`  :conda:package:`r-magrittr`  :conda:package:`r-plotly`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  :conda:package:`r-stringr`  

   :required~by: |required_by_r-plasmidprofiler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-plasmidprofiler

   and update with::

      conda update r-plasmidprofiler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-plasmidprofiler


.. |required_by_r-plasmidprofiler| conda:required_by:: r-plasmidprofiler
.. |downloads_r-plasmidprofiler| image:: https://img.shields.io/conda/dn/bioconda/r-plasmidprofiler.svg?style=flat
   :alt:   (downloads)
.. |docker_r-plasmidprofiler| image:: https://quay.io/repository/biocontainers/r-plasmidprofiler/status
   :target: https://quay.io/repository/biocontainers/r-plasmidprofiler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-plasmidprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-plasmidprofiler/README.html

