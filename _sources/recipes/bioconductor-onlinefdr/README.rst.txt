.. title:: Package Recipe 'bioconductor-onlinefdr'
.. highlight: bash


bioconductor-onlinefdr
======================

.. conda:recipe:: bioconductor-onlinefdr
   :replaces_section_title:

   This package allows users to control the false discovery rate for online hypothesis testing\, where hypotheses arrive sequentially in a stream\, as presented by Javanmard and Montanari \(2015\, 2018\). In this framework\, a null hypothesis is rejected based only on the previous decisions\, as the future p\-values and the number of hypotheses to be tested are unknown.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/onlineFDR.html
   :license: GPL-3
   :recipe: /`bioconductor-onlinefdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onlinefdr/meta.yaml>`_

   


.. conda:package:: bioconductor-onlinefdr

   |downloads_bioconductor-onlinefdr| |docker_bioconductor-onlinefdr|

   :versions: 1.0.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-onlinefdr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onlinefdr

   and update with::

      conda update bioconductor-onlinefdr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-onlinefdr


.. |required_by_bioconductor-onlinefdr| conda:required_by:: bioconductor-onlinefdr
.. |downloads_bioconductor-onlinefdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onlinefdr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-onlinefdr| image:: https://quay.io/repository/biocontainers/bioconductor-onlinefdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onlinefdr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onlinefdr/README.html

