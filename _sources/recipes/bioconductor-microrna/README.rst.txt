.. title:: Package Recipe 'bioconductor-microrna'
.. highlight: bash


bioconductor-microrna
=====================

.. conda:recipe:: bioconductor-microrna
   :replaces_section_title:

   Different data resources for microRNAs and some functions for manipulating them.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/microRNA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-microrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microrna/meta.yaml>`_
   :links: biotools: :biotools:`microrna`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-microrna

   |downloads_bioconductor-microrna| |docker_bioconductor-microrna|

   :versions: 1.40.0, 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-microrna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microrna

   and update with::

      conda update bioconductor-microrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-microrna


.. |required_by_bioconductor-microrna| conda:required_by:: bioconductor-microrna
.. |downloads_bioconductor-microrna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microrna.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-microrna| image:: https://quay.io/repository/biocontainers/bioconductor-microrna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microrna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microrna/README.html

