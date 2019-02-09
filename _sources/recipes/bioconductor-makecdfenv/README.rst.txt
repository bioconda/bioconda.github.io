.. title:: Package Recipe 'bioconductor-makecdfenv'
.. highlight: bash


bioconductor-makecdfenv
=======================

.. conda:recipe:: bioconductor-makecdfenv
   :replaces_section_title:

   This package has two functions. One reads a Affymetrix chip description file \(CDF\) and creates a hash table environment containing the location\/probe set membership mapping. The other creates a package that automatically loads that environment.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/makecdfenv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-makecdfenv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv/meta.yaml>`_
   :links: biotools: :biotools:`makecdfenv`, doi: :doi:`10.1186/1471-2105-13-56`

   


.. conda:package:: bioconductor-makecdfenv

   |downloads_bioconductor-makecdfenv| |docker_bioconductor-makecdfenv|

   :versions: 1.58.0, 1.56.0, 1.54.0, 1.52.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-affyio` >=1.52.0,<1.53.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-makecdfenv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-makecdfenv

   and update with::

      conda update bioconductor-makecdfenv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-makecdfenv


.. |required_by_bioconductor-makecdfenv| conda:required_by:: bioconductor-makecdfenv
.. |downloads_bioconductor-makecdfenv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-makecdfenv.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-makecdfenv| image:: https://quay.io/repository/biocontainers/bioconductor-makecdfenv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-makecdfenv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html

