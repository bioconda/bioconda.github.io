.. title:: Package Recipe 'bioconductor-oligoclasses'
.. highlight: bash


bioconductor-oligoclasses
=========================

.. conda:recipe:: bioconductor-oligoclasses
   :replaces_section_title:

   This package contains class definitions\, validity checks\, and initialization methods for classes used by the oligo and crlmm packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/oligoClasses.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-oligoclasses <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligoclasses>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oligoclasses/meta.yaml>`_
   :links: biotools: :biotools:`oligoclasses`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-oligoclasses

   |downloads_bioconductor-oligoclasses| |docker_bioconductor-oligoclasses|

   :versions: 1.44.0, 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-dbi`  :conda:package:`r-ff`  :conda:package:`r-foreach`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-oligoclasses|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oligoclasses

   and update with::

      conda update bioconductor-oligoclasses

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-oligoclasses


.. |required_by_bioconductor-oligoclasses| conda:required_by:: bioconductor-oligoclasses
.. |downloads_bioconductor-oligoclasses| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oligoclasses.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-oligoclasses| image:: https://quay.io/repository/biocontainers/bioconductor-oligoclasses/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oligoclasses







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oligoclasses/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oligoclasses/README.html

