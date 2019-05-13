:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneplotter'
.. highlight: bash

bioconductor-geneplotter
========================

.. conda:recipe:: bioconductor-geneplotter
   :replaces_section_title:

   Functions for plotting genomic data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geneplotter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneplotter/meta.yaml>`_
   :links: biotools: :biotools:`geneplotter`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-geneplotter

   |downloads_bioconductor-geneplotter| |docker_bioconductor-geneplotter|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0
   
   :depends bioconductor-annotate: >=1.60.0,<1.61.0
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lattice: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneplotter

   and update with::

      conda update bioconductor-geneplotter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneplotter:<tag>

   (see `bioconductor-geneplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneplotter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneplotter
   :alt:   (downloads)
.. |docker_bioconductor-geneplotter| image:: https://quay.io/repository/biocontainers/bioconductor-geneplotter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneplotter
.. _`bioconductor-geneplotter/tags`: https://quay.io/repository/biocontainers/bioconductor-geneplotter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneplotter/README.html