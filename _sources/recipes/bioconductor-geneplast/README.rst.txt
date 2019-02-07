.. title:: Package Recipe 'bioconductor-geneplast'
.. highlight: bash


bioconductor-geneplast
======================

.. conda:recipe:: bioconductor-geneplast
   :replaces_section_title:

   Geneplast is designed for evolutionary and plasticity analysis based on orthologous groups distribution in a given species tree. It uses Shannon information theory and orthologs abundance to estimate the Evolutionary Plasticity Index. Additionally\, it implements the Bridge algorithm to determine the evolutionary root of a given gene based on its orthologs distribution.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geneplast.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneplast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplast/meta.yaml>`_
   :links: biotools: :biotools:`geneplast`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-geneplast

   |downloads_bioconductor-geneplast| |docker_bioconductor-geneplast|

   :versions: 1.8.0, 1.6.2, 1.4.0

   :depends: :conda:package:`r-ape`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  :conda:package:`r-snow`  

   :required~by: |required_by_bioconductor-geneplast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneplast

   and update with::

      conda update bioconductor-geneplast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-geneplast


.. |required_by_bioconductor-geneplast| conda:required_by:: bioconductor-geneplast
.. |downloads_bioconductor-geneplast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplast.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geneplast| image:: https://quay.io/repository/biocontainers/bioconductor-geneplast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplast/README.html

