.. title:: Package Recipe 'bioconductor-biocviews'
.. highlight: bash


bioconductor-biocviews
======================

.. conda:recipe:: bioconductor-biocviews
   :replaces_section_title:

   Infrastructure to support Bioconductor \'views\' used to classify software packages. \'biocViews\' are directed acyclic graphs of terms from a controlled vocabulary. There are three major classifications\, corresponding to \'software\'\, \'annotation\'\, and \'experiment data\' packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/biocViews.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocviews <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocviews/meta.yaml>`_
   :links: biotools: :biotools:`biocviews`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-biocviews

   |downloads_bioconductor-biocviews| |docker_bioconductor-biocviews|

   :versions: 1.50.9, 1.48.3, 1.46.0, 1.44.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcurl`  :conda:package:`r-runit`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-biocviews|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocviews

   and update with::

      conda update bioconductor-biocviews

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biocviews


.. |required_by_bioconductor-biocviews| conda:required_by:: bioconductor-biocviews
.. |downloads_bioconductor-biocviews| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocviews.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biocviews| image:: https://quay.io/repository/biocontainers/bioconductor-biocviews/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocviews







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocviews/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocviews/README.html

