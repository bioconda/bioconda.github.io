.. title:: Package Recipe 'bioconductor-twoddpcr'
.. highlight: bash


bioconductor-twoddpcr
=====================

.. conda:recipe:: bioconductor-twoddpcr
   :replaces_section_title:

   The twoddpcr package takes Droplet Digital PCR \(ddPCR\) droplet amplitude data from Bio\-Rad\'s QuantaSoft and can classify the droplets. A summary of the positive\/negative droplet counts can be generated\, which can then be used to estimate the number of molecules using the Poisson distribution. This is the first open source package that facilitates the automatic classification of general two channel ddPCR data. Previous work includes \'definetherain\' \(Jones et al.\, 2014\) and \'ddpcRquant\' \(Trypsteen et al.\, 2015\) which both handle one channel ddPCR experiments only. The \'ddpcr\' package available on CRAN \(Attali et al.\, 2016\) supports automatic gating of a specific class of two channel ddPCR experiments only.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/twoddpcr.html
   :license: GPL-3
   :recipe: /`bioconductor-twoddpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twoddpcr/meta.yaml>`_

   


.. conda:package:: bioconductor-twoddpcr

   |downloads_bioconductor-twoddpcr| |docker_bioconductor-twoddpcr|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-class`  :conda:package:`r-ggplot2`  :conda:package:`r-hexbin`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-scales`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-twoddpcr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-twoddpcr

   and update with::

      conda update bioconductor-twoddpcr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-twoddpcr


.. |required_by_bioconductor-twoddpcr| conda:required_by:: bioconductor-twoddpcr
.. |downloads_bioconductor-twoddpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twoddpcr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-twoddpcr| image:: https://quay.io/repository/biocontainers/bioconductor-twoddpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twoddpcr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twoddpcr/README.html

