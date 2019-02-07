.. title:: Package Recipe 'bioconductor-randpack'
.. highlight: bash


bioconductor-randpack
=====================

.. conda:recipe:: bioconductor-randpack
   :replaces_section_title:

   A suite of classes and functions for randomizing patients in clinical trials.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/randPack.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-randpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randpack/meta.yaml>`_
   :links: biotools: :biotools:`randpack`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-randpack

   |downloads_bioconductor-randpack| |docker_bioconductor-randpack|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-randpack|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-randpack

   and update with::

      conda update bioconductor-randpack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-randpack


.. |required_by_bioconductor-randpack| conda:required_by:: bioconductor-randpack
.. |downloads_bioconductor-randpack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randpack.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-randpack| image:: https://quay.io/repository/biocontainers/bioconductor-randpack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randpack







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randpack/README.html

