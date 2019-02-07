.. title:: Package Recipe 'bioconductor-timerquant'
.. highlight: bash


bioconductor-timerquant
=======================

.. conda:recipe:: bioconductor-timerquant
   :replaces_section_title:

   Supplementary Data package for tandem timer methods paper by Barry et al. \(2015\) including TimerQuant shiny applications.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/TimerQuant.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-timerquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-timerquant/meta.yaml>`_

   


.. conda:package:: bioconductor-timerquant

   |downloads_bioconductor-timerquant| |docker_bioconductor-timerquant|

   :versions: 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-desolve`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-locfit`  :conda:package:`r-shiny`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-timerquant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-timerquant

   and update with::

      conda update bioconductor-timerquant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-timerquant


.. |required_by_bioconductor-timerquant| conda:required_by:: bioconductor-timerquant
.. |downloads_bioconductor-timerquant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-timerquant.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-timerquant| image:: https://quay.io/repository/biocontainers/bioconductor-timerquant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-timerquant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-timerquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-timerquant/README.html

