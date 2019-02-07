.. title:: Package Recipe 'bioconductor-tcgabiolinksgui'
.. highlight: bash


bioconductor-tcgabiolinksgui
============================

.. conda:recipe:: bioconductor-tcgabiolinksgui
   :replaces_section_title:

   \"TCGAbiolinksGUI\: A Graphical User Interface to analyze cancer molecular and clinical data. A demo version of GUI is found in https\:\/\/tcgabiolinksgui.shinyapps.io\/tcgabiolinks\/\"

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TCGAbiolinksGUI.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-tcgabiolinksgui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgabiolinksgui/meta.yaml>`_

   


.. conda:package:: bioconductor-tcgabiolinksgui

   |downloads_bioconductor-tcgabiolinksgui| |docker_bioconductor-tcgabiolinksgui|

   :versions: 1.8.0

   :depends: :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-elmer` >=2.6.0,<2.7.0 :conda:package:`bioconductor-illuminahumanmethylation27kanno.ilmn12.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylation27kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylation450kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylationepicmanifest` >=0.3.0,<0.4.0 :conda:package:`bioconductor-maftools` >=1.8.0,<1.9.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-pathview` >=1.22.0,<1.23.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-tcgabiolinks` >=2.10.0,<2.11.0 :conda:package:`bioconductor-tcgabiolinksgui.data` >=1.2.0,<1.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-caret`  :conda:package:`r-colourpicker`  :conda:package:`r-data.table`  :conda:package:`r-downloader` >=0.4 :conda:package:`r-dt`  :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-ggrepel`  :conda:package:`r-plotly`  :conda:package:`r-readr`  :conda:package:`r-shiny` >=0.14.1 :conda:package:`r-shinybs` >=0.61 :conda:package:`r-shinydashboard` >=0.5.3 :conda:package:`r-shinyfiles` >=0.6.2 :conda:package:`r-shinyjs` >=0.7 :conda:package:`r-stringr` >=1.1.0 

   :required~by: |required_by_bioconductor-tcgabiolinksgui|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tcgabiolinksgui

   and update with::

      conda update bioconductor-tcgabiolinksgui

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui


.. |required_by_bioconductor-tcgabiolinksgui| conda:required_by:: bioconductor-tcgabiolinksgui
.. |downloads_bioconductor-tcgabiolinksgui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgabiolinksgui.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tcgabiolinksgui| image:: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgabiolinksgui







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgabiolinksgui/README.html

