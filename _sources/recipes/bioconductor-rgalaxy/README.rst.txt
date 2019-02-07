.. title:: Package Recipe 'bioconductor-rgalaxy'
.. highlight: bash


bioconductor-rgalaxy
====================

.. conda:recipe:: bioconductor-rgalaxy
   :replaces_section_title:

   Given an R function and its manual page\, make the documented function available in Galaxy.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RGalaxy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgalaxy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgalaxy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgalaxy/meta.yaml>`_
   :links: biotools: :biotools:`rgalaxy`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rgalaxy

   |downloads_bioconductor-rgalaxy| |docker_bioconductor-rgalaxy|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.1, 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-optparse`  :conda:package:`r-roxygen2`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-rgalaxy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgalaxy

   and update with::

      conda update bioconductor-rgalaxy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rgalaxy


.. |required_by_bioconductor-rgalaxy| conda:required_by:: bioconductor-rgalaxy
.. |downloads_bioconductor-rgalaxy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgalaxy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rgalaxy| image:: https://quay.io/repository/biocontainers/bioconductor-rgalaxy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgalaxy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgalaxy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgalaxy/README.html

