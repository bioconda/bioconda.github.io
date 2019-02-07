.. title:: Package Recipe 'bioconductor-prostar'
.. highlight: bash


bioconductor-prostar
====================

.. conda:recipe:: bioconductor-prostar
   :replaces_section_title:

   This package provides a GUI interface for DAPAR.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Prostar.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostar/meta.yaml>`_

   


.. conda:package:: bioconductor-prostar

   |downloads_bioconductor-prostar| |docker_bioconductor-prostar|

   :versions: 1.14.8

   :depends: :conda:package:`bioconductor-dapar` >=1.14.0,<1.15.0 :conda:package:`bioconductor-dapardata` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-colourpicker`  :conda:package:`r-data.table`  :conda:package:`r-dt`  :conda:package:`r-future`  :conda:package:`r-highcharter`  :conda:package:`r-htmlwidgets`  :conda:package:`r-later`  :conda:package:`r-promises`  :conda:package:`r-r.utils`  :conda:package:`r-rclipboard`  :conda:package:`r-rhandsontable`  :conda:package:`r-shiny`  :conda:package:`r-shinyace`  :conda:package:`r-shinybs`  :conda:package:`r-shinycssloaders`  :conda:package:`r-shinyjqui`  :conda:package:`r-shinyjs`  :conda:package:`r-shinythemes`  :conda:package:`r-shinytree`  :conda:package:`r-shinywidgets`  :conda:package:`r-webshot`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-prostar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostar

   and update with::

      conda update bioconductor-prostar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-prostar


.. |required_by_bioconductor-prostar| conda:required_by:: bioconductor-prostar
.. |downloads_bioconductor-prostar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prostar| image:: https://quay.io/repository/biocontainers/bioconductor-prostar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostar/README.html

