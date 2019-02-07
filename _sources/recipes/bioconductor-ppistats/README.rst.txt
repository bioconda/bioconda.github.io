.. title:: Package Recipe 'bioconductor-ppistats'
.. highlight: bash


bioconductor-ppistats
=====================

.. conda:recipe:: bioconductor-ppistats
   :replaces_section_title:

   Tools for the analysis of protein interaction data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ppiStats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ppistats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppistats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ppistats/meta.yaml>`_
   :links: biotools: :biotools:`ppistats`, doi: :doi:`10.1186/gb-2007-8-9-r186`

   


.. conda:package:: bioconductor-ppistats

   |downloads_bioconductor-ppistats| |docker_bioconductor-ppistats|

   :versions: 1.48.0, 1.46.0, 1.44.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-ppidata` >=0.20.0,<0.21.0 :conda:package:`bioconductor-scisi` >=1.54.0,<1.55.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-ppistats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ppistats

   and update with::

      conda update bioconductor-ppistats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ppistats


.. |required_by_bioconductor-ppistats| conda:required_by:: bioconductor-ppistats
.. |downloads_bioconductor-ppistats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ppistats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ppistats| image:: https://quay.io/repository/biocontainers/bioconductor-ppistats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ppistats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ppistats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ppistats/README.html

