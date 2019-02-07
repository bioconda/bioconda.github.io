.. title:: Package Recipe 'bioconductor-noiseq'
.. highlight: bash


bioconductor-noiseq
===================

.. conda:recipe:: bioconductor-noiseq
   :replaces_section_title:

   Analysis of RNA\-seq expression data or other similar kind of data. Exploratory plots to evualuate saturation\, count distribution\, expression per chromosome\, type of detected features\, features length\, etc. Differential expression between two experimental conditions with no parametric assumptions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NOISeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-noiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-noiseq/meta.yaml>`_
   :links: biotools: :biotools:`noiseq`

   


.. conda:package:: bioconductor-noiseq

   |downloads_bioconductor-noiseq| |docker_bioconductor-noiseq|

   :versions: 2.26.0, 2.24.0, 2.22.0, 2.20.0, 2.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrix` >=1.2 

   :required~by: |required_by_bioconductor-noiseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-noiseq

   and update with::

      conda update bioconductor-noiseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-noiseq


.. |required_by_bioconductor-noiseq| conda:required_by:: bioconductor-noiseq
.. |downloads_bioconductor-noiseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-noiseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-noiseq| image:: https://quay.io/repository/biocontainers/bioconductor-noiseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-noiseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-noiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-noiseq/README.html

