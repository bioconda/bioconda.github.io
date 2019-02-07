.. title:: Package Recipe 'bioconductor-slgi'
.. highlight: bash


bioconductor-slgi
=================

.. conda:recipe:: bioconductor-slgi
   :replaces_section_title:

   A variety of data files and functions for the analysis of genetic interactions

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SLGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-slgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slgi/meta.yaml>`_
   :links: biotools: :biotools:`slgi`, doi: :doi:`10.1186/gb-2008-9-9-r135`

   


.. conda:package:: bioconductor-slgi

   |downloads_bioconductor-slgi| |docker_bioconductor-slgi|

   :versions: 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-scisi` >=1.54.0,<1.55.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  

   :required~by: |required_by_bioconductor-slgi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-slgi

   and update with::

      conda update bioconductor-slgi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-slgi


.. |required_by_bioconductor-slgi| conda:required_by:: bioconductor-slgi
.. |downloads_bioconductor-slgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slgi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-slgi| image:: https://quay.io/repository/biocontainers/bioconductor-slgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slgi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slgi/README.html

