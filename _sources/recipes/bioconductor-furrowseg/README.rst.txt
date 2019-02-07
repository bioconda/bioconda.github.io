.. title:: Package Recipe 'bioconductor-furrowseg'
.. highlight: bash


bioconductor-furrowseg
======================

.. conda:recipe:: bioconductor-furrowseg
   :replaces_section_title:

   Image feature data and analysis codes for the Guglielmi\, Barry et al. paper describing the application of an optogenetics tools to disrupt Drosophila embryo furrowing.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/furrowSeg.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-furrowseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-furrowseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-furrowseg/meta.yaml>`_

   


.. conda:package:: bioconductor-furrowseg

   |downloads_bioconductor-furrowseg| |docker_bioconductor-furrowseg|

   :versions: 1.10.0

   :depends: :conda:package:`bioconductor-ebimage` >=4.24.0,<4.25.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-locfit`  :conda:package:`r-tiff`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-furrowseg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-furrowseg

   and update with::

      conda update bioconductor-furrowseg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-furrowseg


.. |required_by_bioconductor-furrowseg| conda:required_by:: bioconductor-furrowseg
.. |downloads_bioconductor-furrowseg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-furrowseg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-furrowseg| image:: https://quay.io/repository/biocontainers/bioconductor-furrowseg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-furrowseg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-furrowseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-furrowseg/README.html

