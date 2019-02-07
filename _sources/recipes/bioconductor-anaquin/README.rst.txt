.. title:: Package Recipe 'bioconductor-anaquin'
.. highlight: bash


bioconductor-anaquin
====================

.. conda:recipe:: bioconductor-anaquin
   :replaces_section_title:

   The project is intended to support the use of sequins \(synthetic sequencing spike\-in controls\) owned and made available by the Garvan Institute of Medical Research. The goal is to provide a standard open source library for quantitative analysis\, modelling and visualization of spike\-in controls.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Anaquin.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-anaquin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anaquin/meta.yaml>`_

   


.. conda:package:: bioconductor-anaquin

   |downloads_bioconductor-anaquin| |docker_bioconductor-anaquin|

   :versions: 2.6.0

   :depends: :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=2.2.0 :conda:package:`r-knitr`  :conda:package:`r-locfit`  :conda:package:`r-plyr`  :conda:package:`r-rocr`  

   :required~by: |required_by_bioconductor-anaquin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anaquin

   and update with::

      conda update bioconductor-anaquin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-anaquin


.. |required_by_bioconductor-anaquin| conda:required_by:: bioconductor-anaquin
.. |downloads_bioconductor-anaquin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anaquin.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-anaquin| image:: https://quay.io/repository/biocontainers/bioconductor-anaquin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anaquin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anaquin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anaquin/README.html

