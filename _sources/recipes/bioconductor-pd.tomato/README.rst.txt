.. title:: Package Recipe 'bioconductor-pd.tomato'
.. highlight: bash


bioconductor-pd.tomato
======================

.. conda:recipe:: bioconductor-pd.tomato
   :replaces_section_title:

   Platform Design Info for The Manufacturer\'s Name Tomato

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/pd.tomato.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.tomato <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.tomato>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.tomato/meta.yaml>`_

   


.. conda:package:: bioconductor-pd.tomato

   |downloads_bioconductor-pd.tomato| |docker_bioconductor-pd.tomato|

   :versions: 3.12.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.3.1 :conda:package:`r-rsqlite` >=1.0.0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-pd.tomato|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.tomato

   and update with::

      conda update bioconductor-pd.tomato

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pd.tomato


.. |required_by_bioconductor-pd.tomato| conda:required_by:: bioconductor-pd.tomato
.. |downloads_bioconductor-pd.tomato| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.tomato.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pd.tomato| image:: https://quay.io/repository/biocontainers/bioconductor-pd.tomato/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.tomato







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.tomato/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.tomato/README.html

