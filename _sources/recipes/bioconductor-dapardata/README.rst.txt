:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dapardata'
.. highlight: bash

bioconductor-dapardata
======================

.. conda:recipe:: bioconductor-dapardata
   :replaces_section_title:

   Mass\-spectrometry based UPS proteomics data sets from Ramus C\, Hovasse A\, Marcellin M\, Hesse AM\, Mouton\-Barbosa E\, Bouyssie D\, Vaca S\, Carapito C\, Chaoui K\, Bruley C\, Garin J\, Cianferani S\, Ferro M\, Dorssaeler AV\, Burlet\-Schiltz O\, Schaeffer C\, Coute Y\, Gonzalez de Peredo A. Spiked proteomic standard dataset for testing label\-free quantitative software and statistical methods. Data Brief. 2015 Dec 17\;6\:286\-94 and Giai Gianetto\, Q.\, Combes\, F.\, Ramus\, C.\, Bruley\, C.\, Coute\, Y.\, Burger\, T. \(2016\). Calibration plot for proteomics\: A graphical tool to visually check the assumptions underlying FDR control in quantitative experiments. Proteomics\, 16\(1\)\, 29\-32.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/DAPARdata.html
   :license: GPL-2
   :recipe: /`bioconductor-dapardata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapardata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dapardata/meta.yaml>`_

   


.. conda:package:: bioconductor-dapardata

   |downloads_bioconductor-dapardata| |docker_bioconductor-dapardata|

   :versions: 1.15.9-0, 1.14.0-1, 1.12.1-0
   
   :depends bioconductor-msnbase: >=2.12.0,<2.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-knitr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dapardata

   and update with::

      conda update bioconductor-dapardata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dapardata:<tag>

   (see `bioconductor-dapardata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dapardata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dapardata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dapardata
   :alt:   (downloads)
.. |docker_bioconductor-dapardata| image:: https://quay.io/repository/biocontainers/bioconductor-dapardata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dapardata
.. _`bioconductor-dapardata/tags`: https://quay.io/repository/biocontainers/bioconductor-dapardata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dapardata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dapardata/README.html