:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-evaluomer'
.. highlight: bash

bioconductor-evaluomer
======================

.. conda:recipe:: bioconductor-evaluomer
   :replaces_section_title:

   Evaluation of Bioinformatics Metrics

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/evaluomeR.html
   :license: GPL-3
   :recipe: /`bioconductor-evaluomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer/meta.yaml>`_

   Evaluating the reliability of your own metrics and the measurements done on your own datasets by analysing the stability and goodness of the classifications of such metrics.


.. conda:package:: bioconductor-evaluomer

   |downloads_bioconductor-evaluomer| |docker_bioconductor-evaluomer|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-multiassayexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: >=2.0.7-1
   :depends r-corrplot: >=0.84
   :depends r-rdpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-evaluomer

   and update with::

      conda update bioconductor-evaluomer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-evaluomer:<tag>

   (see `bioconductor-evaluomer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-evaluomer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-evaluomer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-evaluomer
   :alt:   (downloads)
.. |docker_bioconductor-evaluomer| image:: https://quay.io/repository/biocontainers/bioconductor-evaluomer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-evaluomer
.. _`bioconductor-evaluomer/tags`: https://quay.io/repository/biocontainers/bioconductor-evaluomer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html