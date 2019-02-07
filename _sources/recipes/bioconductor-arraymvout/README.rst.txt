.. title:: Package Recipe 'bioconductor-arraymvout'
.. highlight: bash


bioconductor-arraymvout
=======================

.. conda:recipe:: bioconductor-arraymvout
   :replaces_section_title:

   This package supports the application of diverse quality metrics to AffyBatch instances\, summarizing these metrics via PCA\, and then performing parametric outlier detection on the PCs to identify aberrant arrays with a fixed Type I error rate

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/arrayMvout.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arraymvout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arraymvout/meta.yaml>`_

   


.. conda:package:: bioconductor-arraymvout

   |downloads_bioconductor-arraymvout| |docker_bioconductor-arraymvout|

   :versions: 1.40.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affycontam` >=1.40.0,<1.41.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`bioconductor-mdqc` >=1.44.0,<1.45.0 :conda:package:`bioconductor-parody` >=1.40.0,<1.41.0 :conda:package:`bioconductor-simpleaffy` >=2.58.0,<2.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-arraymvout|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arraymvout

   and update with::

      conda update bioconductor-arraymvout

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-arraymvout


.. |required_by_bioconductor-arraymvout| conda:required_by:: bioconductor-arraymvout
.. |downloads_bioconductor-arraymvout| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arraymvout.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-arraymvout| image:: https://quay.io/repository/biocontainers/bioconductor-arraymvout/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arraymvout







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arraymvout/README.html

