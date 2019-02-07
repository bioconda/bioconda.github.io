.. title:: Package Recipe 'bioconductor-brainstars'
.. highlight: bash


bioconductor-brainstars
=======================

.. conda:recipe:: bioconductor-brainstars
   :replaces_section_title:

   This package can search and get gene expression data and plots from BrainStars \(B\*\). BrainStars is a quantitative expression database of the adult mouse brain. The database has genome\-wide expression profile at 51 adult mouse CNS regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BrainStars.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brainstars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainstars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brainstars/meta.yaml>`_
   :links: biotools: :biotools:`brainstars`, doi: :doi:`10.1097/HTR.0b013e3181a7ecb0`

   


.. conda:package:: bioconductor-brainstars

   |downloads_bioconductor-brainstars| |docker_bioconductor-brainstars|

   :versions: 1.26.0, 1.24.0, 1.22.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcurl`  :conda:package:`r-rjsonio`  

   :required~by: |required_by_bioconductor-brainstars|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brainstars

   and update with::

      conda update bioconductor-brainstars

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-brainstars


.. |required_by_bioconductor-brainstars| conda:required_by:: bioconductor-brainstars
.. |downloads_bioconductor-brainstars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brainstars.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-brainstars| image:: https://quay.io/repository/biocontainers/bioconductor-brainstars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brainstars







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brainstars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brainstars/README.html

