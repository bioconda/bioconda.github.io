.. title:: Package Recipe 'metaquantome'
.. highlight: bash


metaquantome
============

.. conda:recipe:: metaquantome
   :replaces_section_title:

   Quantitative metaproteomics analysis of taxonomy and function.

   :homepage: https://github.com/galaxyproteomics/metaquant
   :license: APACHE / Apache Software License
   :recipe: /`metaquantome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquantome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquantome/meta.yaml>`_

   


.. conda:package:: metaquantome

   |downloads_metaquantome| |docker_metaquantome|

   :versions: 0.99.3, 0.99.2

   :depends: :conda:package:`biopython`  :conda:package:`ete3` 3.1.* :conda:package:`goatools` 0.7.* :conda:package:`libiconv`  :conda:package:`numpy` 1.15.* :conda:package:`pandas` 0.23.* :conda:package:`python` >=3 :conda:package:`r-base` 3.4.* :conda:package:`r-ggplot2`  :conda:package:`r-gplots` 3.0.* :conda:package:`r-jsonlite`  :conda:package:`statsmodels` 0.8.* 

   :required~by: |required_by_metaquantome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaquantome

   and update with::

      conda update metaquantome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaquantome


.. |required_by_metaquantome| conda:required_by:: metaquantome
.. |downloads_metaquantome| image:: https://img.shields.io/conda/dn/bioconda/metaquantome.svg?style=flat
   :alt:   (downloads)
.. |docker_metaquantome| image:: https://quay.io/repository/biocontainers/metaquantome/status
   :target: https://quay.io/repository/biocontainers/metaquantome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquantome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquantome/README.html

