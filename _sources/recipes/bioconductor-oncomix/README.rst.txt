.. title:: Package Recipe 'bioconductor-oncomix'
.. highlight: bash


bioconductor-oncomix
====================

.. conda:recipe:: bioconductor-oncomix
   :replaces_section_title:

   This package helps identify mRNAs that are overexpressed in subsets of tumors relative to normal tissue. Ideal inputs would be paired tumor\-normal data from the same tissue from many patients \(\>15 pairs\). This unsupervised approach relies on the observation that oncogenes are characteristically overexpressed in only a subset of tumors in the population\, and may help identify oncogene candidates purely based on differences in mRNA expression between previously unknown subtypes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/oncomix.html
   :license: GPL-3
   :recipe: /`bioconductor-oncomix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncomix/meta.yaml>`_

   


.. conda:package:: bioconductor-oncomix

   |downloads_bioconductor-oncomix| |docker_bioconductor-oncomix|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-mclust`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-oncomix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oncomix

   and update with::

      conda update bioconductor-oncomix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-oncomix


.. |required_by_bioconductor-oncomix| conda:required_by:: bioconductor-oncomix
.. |downloads_bioconductor-oncomix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncomix.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-oncomix| image:: https://quay.io/repository/biocontainers/bioconductor-oncomix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncomix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncomix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncomix/README.html

