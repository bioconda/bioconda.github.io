.. title:: Package Recipe 'bioconductor-pd.ecoli'
.. highlight: bash


bioconductor-pd.ecoli
=====================

.. conda:recipe:: bioconductor-pd.ecoli
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Ecoli

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.ecoli.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.ecoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ecoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.ecoli/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.ecoli

   |downloads_bioconductor-pd.ecoli| |docker_bioconductor-pd.ecoli|

   :versions: 3.12.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.3.1 :conda:package:`r-rsqlite` >=1.0.0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-pd.ecoli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.ecoli

   and update with::

      conda update bioconductor-pd.ecoli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pd.ecoli


.. |required_by_bioconductor-pd.ecoli| conda:required_by:: bioconductor-pd.ecoli
.. |downloads_bioconductor-pd.ecoli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.ecoli.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.ecoli| image:: https://quay.io/repository/biocontainers/bioconductor-pd.ecoli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.ecoli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.ecoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.ecoli/README.html

