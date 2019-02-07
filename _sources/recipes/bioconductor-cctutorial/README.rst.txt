.. title:: Package Recipe 'bioconductor-cctutorial'
.. highlight: bash


bioconductor-cctutorial
=======================

.. conda:recipe:: bioconductor-cctutorial
   :replaces_section_title:

   This is a data package that accompanies a ChIP\-chip tutorial\, which has been published in PLoS Computational Biology. The data and source code in this package allow the reader to completely reproduce the steps in the tutorial.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ccTutorial.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cctutorial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cctutorial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cctutorial/meta.yaml>`_

   


.. conda:package:: bioconductor-cctutorial

   |downloads_bioconductor-cctutorial| |docker_bioconductor-cctutorial|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-ringo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-topgo` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cctutorial|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cctutorial

   and update with::

      conda update bioconductor-cctutorial

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cctutorial


.. |required_by_bioconductor-cctutorial| conda:required_by:: bioconductor-cctutorial
.. |downloads_bioconductor-cctutorial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cctutorial.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cctutorial| image:: https://quay.io/repository/biocontainers/bioconductor-cctutorial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cctutorial







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cctutorial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cctutorial/README.html

