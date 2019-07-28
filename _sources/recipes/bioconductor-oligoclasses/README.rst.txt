:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oligoclasses'
.. highlight: bash

bioconductor-oligoclasses
=========================

.. conda:recipe:: bioconductor-oligoclasses
   :replaces_section_title:

   This package contains class definitions\, validity checks\, and initialization methods for classes used by the oligo and crlmm packages.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/oligoClasses.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-oligoclasses <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligoclasses>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligoclasses/meta.yaml>`_
   :links: biotools: :biotools:`oligoclasses`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-oligoclasses

   |downloads_bioconductor-oligoclasses| |docker_bioconductor-oligoclasses|

   :versions: 1.46.0-1, 1.44.0-0, 1.42.0-0, 1.40.0-0, 1.38.0-0
   
   :depends bioconductor-affyio: >=1.54.0,<1.55.0
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-dbi: 
   :depends r-ff: 
   :depends r-foreach: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oligoclasses

   and update with::

      conda update bioconductor-oligoclasses

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oligoclasses:<tag>

   (see `bioconductor-oligoclasses/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oligoclasses| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oligoclasses.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oligoclasses
   :alt:   (downloads)
.. |docker_bioconductor-oligoclasses| image:: https://quay.io/repository/biocontainers/bioconductor-oligoclasses/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oligoclasses
.. _`bioconductor-oligoclasses/tags`: https://quay.io/repository/biocontainers/bioconductor-oligoclasses?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oligoclasses/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oligoclasses/README.html