.. title:: Package Recipe 'bioconductor-scsr'
.. highlight: bash


bioconductor-scsr
=================

.. conda:recipe:: bioconductor-scsr
   :replaces_section_title:

   Corrects genome\-wide siRNA screens for seed mediated off\-target effect. Suitable functions to identify the effective seeds\/miRNAs and to visualize their effect are also provided in the package.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scsR.html
   :license: GPL-2
   :recipe: /`bioconductor-scsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scsr/meta.yaml>`_

   


.. conda:package:: bioconductor-scsr

   |downloads_bioconductor-scsr| |docker_bioconductor-scsr|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-stringdb` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-hash`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-sqldf`  

   :required~by: |required_by_bioconductor-scsr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scsr

   and update with::

      conda update bioconductor-scsr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scsr


.. |required_by_bioconductor-scsr| conda:required_by:: bioconductor-scsr
.. |downloads_bioconductor-scsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scsr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scsr| image:: https://quay.io/repository/biocontainers/bioconductor-scsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scsr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scsr/README.html

