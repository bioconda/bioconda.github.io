.. title:: Package Recipe 'bioconductor-stringdb'
.. highlight: bash


bioconductor-stringdb
=====================

.. conda:recipe:: bioconductor-stringdb
   :replaces_section_title:

   The STRINGdb package provides a R interface to the STRING protein\-protein interactions database \(http\:\/\/www.string\-db.org\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/STRINGdb.html
   :license: GPL-2
   :recipe: /`bioconductor-stringdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stringdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stringdb/meta.yaml>`_
   :links: biotools: :biotools:`stringdb`

   


.. conda:package:: bioconductor-stringdb

   |downloads_bioconductor-stringdb| |docker_bioconductor-stringdb|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-hash`  :conda:package:`r-igraph`  :conda:package:`r-plotrix`  :conda:package:`r-plyr`  :conda:package:`r-png`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcurl`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-stringdb|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-stringdb

   and update with::

      conda update bioconductor-stringdb

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-stringdb


.. |required_by_bioconductor-stringdb| conda:required_by:: bioconductor-stringdb
.. |downloads_bioconductor-stringdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stringdb.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-stringdb| image:: https://quay.io/repository/biocontainers/bioconductor-stringdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stringdb







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stringdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stringdb/README.html

