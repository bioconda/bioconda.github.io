.. title:: Package Recipe 'bioconductor-hd2013sgi'
.. highlight: bash


bioconductor-hd2013sgi
======================

.. conda:recipe:: bioconductor-hd2013sgi
   :replaces_section_title:

   This package contains the experimental data and a complete executable transcript \(vignette\) of the analysis of the HCT116 genetic interaction matrix presented in the paper \"Mapping genetic interactions in human cancer cells with RNAi and multiparametric phenotyping\" by C. Laufer\, B. Fischer\, M. Billmann\, W. Huber\, M. Boutros\; Nature Methods \(2013\) 10\:427\-31. doi\: 10.1038\/nmeth.2436.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/HD2013SGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hd2013sgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hd2013sgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hd2013sgi/meta.yaml>`_

   


.. conda:package:: bioconductor-hd2013sgi

   |downloads_bioconductor-hd2013sgi| |docker_bioconductor-hd2013sgi|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-ebimage` >=4.24.0,<4.25.0 :conda:package:`bioconductor-geneplotter` >=1.60.0,<1.61.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-splots` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-lsd`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-vcd`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hd2013sgi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hd2013sgi

   and update with::

      conda update bioconductor-hd2013sgi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hd2013sgi


.. |required_by_bioconductor-hd2013sgi| conda:required_by:: bioconductor-hd2013sgi
.. |downloads_bioconductor-hd2013sgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hd2013sgi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hd2013sgi| image:: https://quay.io/repository/biocontainers/bioconductor-hd2013sgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hd2013sgi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hd2013sgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hd2013sgi/README.html

