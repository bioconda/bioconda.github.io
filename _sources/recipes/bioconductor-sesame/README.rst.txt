.. title:: Package Recipe 'bioconductor-sesame'
.. highlight: bash


bioconductor-sesame
===================

.. conda:recipe:: bioconductor-sesame
   :replaces_section_title:

   Tools For analyzing Illumina Infinium DNA methylation arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sesame.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sesame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame/meta.yaml>`_

   


.. conda:package:: bioconductor-sesame

   |downloads_bioconductor-sesame| |docker_bioconductor-sesame|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-illuminaio` >=0.24.0,<0.25.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-sesamedata` >=1.0.0,<1.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-mass`  :conda:package:`r-r6`  :conda:package:`r-randomforest`  :conda:package:`r-wheatmap`  

   :required~by: |required_by_bioconductor-sesame|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sesame

   and update with::

      conda update bioconductor-sesame

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sesame


.. |required_by_bioconductor-sesame| conda:required_by:: bioconductor-sesame
.. |downloads_bioconductor-sesame| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesame.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sesame| image:: https://quay.io/repository/biocontainers/bioconductor-sesame/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesame







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesame/README.html

