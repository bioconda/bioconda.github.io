.. title:: Package Recipe 'bioconductor-limmagui'
.. highlight: bash


bioconductor-limmagui
=====================

.. conda:recipe:: bioconductor-limmagui
   :replaces_section_title:

   A Graphical User Interface for differential expression analysis of two\-color microarray data using the limma package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/limmaGUI.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-limmagui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limmagui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limmagui/meta.yaml>`_

   


.. conda:package:: bioconductor-limmagui

   |downloads_bioconductor-limmagui| |docker_bioconductor-limmagui|

   :versions: 1.58.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-r2html`  :conda:package:`r-tkrplot`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-limmagui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-limmagui

   and update with::

      conda update bioconductor-limmagui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-limmagui


.. |required_by_bioconductor-limmagui| conda:required_by:: bioconductor-limmagui
.. |downloads_bioconductor-limmagui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limmagui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-limmagui| image:: https://quay.io/repository/biocontainers/bioconductor-limmagui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limmagui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limmagui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limmagui/README.html

