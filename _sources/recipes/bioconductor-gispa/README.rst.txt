.. title:: Package Recipe 'bioconductor-gispa'
.. highlight: bash


bioconductor-gispa
==================

.. conda:recipe:: bioconductor-gispa
   :replaces_section_title:

   GISPA is a method intended for the researchers who are interested in defining gene sets with similar\, a priori specified molecular profile. GISPA method has been previously published in Nucleic Acid Research \(Kowalski et al.\, 2016\; PMID\: 26826710\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-gispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa/meta.yaml>`_

   


.. conda:package:: bioconductor-gispa

   |downloads_bioconductor-gispa| |docker_bioconductor-gispa|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-changepoint`  :conda:package:`r-data.table`  :conda:package:`r-hh`  :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-plyr`  :conda:package:`r-scatterplot3d`  

   :required~by: |required_by_bioconductor-gispa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gispa

   and update with::

      conda update bioconductor-gispa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gispa


.. |required_by_bioconductor-gispa| conda:required_by:: bioconductor-gispa
.. |downloads_bioconductor-gispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gispa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gispa| image:: https://quay.io/repository/biocontainers/bioconductor-gispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gispa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gispa/README.html

