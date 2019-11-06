:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arraymvout'
.. highlight: bash

bioconductor-arraymvout
=======================

.. conda:recipe:: bioconductor-arraymvout
   :replaces_section_title:

   This package supports the application of diverse quality metrics to AffyBatch instances\, summarizing these metrics via PCA\, and then performing parametric outlier detection on the PCs to identify aberrant arrays with a fixed Type I error rate

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/arrayMvout.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arraymvout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout/meta.yaml>`_

   


.. conda:package:: bioconductor-arraymvout

   |downloads_bioconductor-arraymvout| |docker_bioconductor-arraymvout|

   :versions: 1.44.0-0, 1.42.0-1, 1.40.0-0
   
   :depends bioconductor-affy: >=1.64.0,<1.65.0
   :depends bioconductor-affycontam: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-lumi: >=2.38.0,<2.39.0
   :depends bioconductor-mdqc: >=1.48.0,<1.49.0
   :depends bioconductor-parody: >=1.44.0,<1.45.0
   :depends bioconductor-simpleaffy: >=2.62.0,<2.63.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arraymvout

   and update with::

      conda update bioconductor-arraymvout

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arraymvout:<tag>

   (see `bioconductor-arraymvout/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arraymvout| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraymvout.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arraymvout
   :alt:   (downloads)
.. |docker_bioconductor-arraymvout| image:: https://quay.io/repository/biocontainers/bioconductor-arraymvout/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraymvout
.. _`bioconductor-arraymvout/tags`: https://quay.io/repository/biocontainers/bioconductor-arraymvout?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html