.. title:: Package Recipe 'bioconductor-pd.citrus'
.. highlight: bash


bioconductor-pd.citrus
======================

.. conda:recipe:: bioconductor-pd.citrus
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Citrus

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.citrus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.citrus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.citrus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.citrus/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.citrus

   |downloads_bioconductor-pd.citrus| |docker_bioconductor-pd.citrus|

   :versions: 3.12.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.3.1 :conda:package:`r-rsqlite` >=1.0.0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-pd.citrus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.citrus

   and update with::

      conda update bioconductor-pd.citrus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pd.citrus


.. |required_by_bioconductor-pd.citrus| conda:required_by:: bioconductor-pd.citrus
.. |downloads_bioconductor-pd.citrus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.citrus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.citrus| image:: https://quay.io/repository/biocontainers/bioconductor-pd.citrus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.citrus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.citrus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.citrus/README.html

