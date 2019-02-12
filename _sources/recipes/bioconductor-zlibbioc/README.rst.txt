.. title:: Package Recipe 'bioconductor-zlibbioc'
.. highlight: bash


bioconductor-zlibbioc
=====================

.. conda:recipe:: bioconductor-zlibbioc
   :replaces_section_title:

   This package uses the source code of zlib\-1.2.5 to create libraries for systems that do not have these available via other means \(most Linux and Mac users should have system\-level access to zlib\, and no direct need for this package\). See the vignette for instructions on use.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/zlibbioc.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-zlibbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zlibbioc/meta.yaml>`_
   :links: biotools: :biotools:`zlibbioc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-zlibbioc

   |downloads_bioconductor-zlibbioc| |docker_bioconductor-zlibbioc|

   :versions: 1.28.0, 1.26.0, 1.24.0, 1.22.0, 1.20.0, 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-zlibbioc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zlibbioc

   and update with::

      conda update bioconductor-zlibbioc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-zlibbioc


.. |required_by_bioconductor-zlibbioc| conda:required_by:: bioconductor-zlibbioc
.. |downloads_bioconductor-zlibbioc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zlibbioc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-zlibbioc| image:: https://quay.io/repository/biocontainers/bioconductor-zlibbioc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zlibbioc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zlibbioc/README.html

