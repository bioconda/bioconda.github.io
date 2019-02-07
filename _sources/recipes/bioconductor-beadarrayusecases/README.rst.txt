.. title:: Package Recipe 'bioconductor-beadarrayusecases'
.. highlight: bash


bioconductor-beadarrayusecases
==============================

.. conda:recipe:: bioconductor-beadarrayusecases
   :replaces_section_title:

   Example data files and use cases for processing Illumina BeadArray expression data using Bioconductor

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/BeadArrayUseCases.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarrayusecases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarrayusecases/meta.yaml>`_

   


.. conda:package:: bioconductor-beadarrayusecases

   |downloads_bioconductor-beadarrayusecases| |docker_bioconductor-beadarrayusecases|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-beadarray` >=2.32.0,<2.33.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-beadarrayusecases|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarrayusecases

   and update with::

      conda update bioconductor-beadarrayusecases

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-beadarrayusecases


.. |required_by_bioconductor-beadarrayusecases| conda:required_by:: bioconductor-beadarrayusecases
.. |downloads_bioconductor-beadarrayusecases| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarrayusecases.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-beadarrayusecases| image:: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarrayusecases







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarrayusecases/README.html

