:orphan:  .. only available via index, not via toctree

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

   :versions: 0.99.3-2, 0.99.2-2, 0.99.2-0
   
   :depends biopython: 
   
   :depends ete3: 3.1.*
   
   :depends goatools: 0.7.*
   
   :depends libiconv: 
   
   :depends numpy: 1.15.*
   
   :depends pandas: 0.23.*
   
   :depends python: >=3
   
   :depends r-base: 3.4.*
   
   :depends r-ggplot2: 
   
   :depends r-gplots: 3.0.*
   
   :depends r-jsonlite: 
   
   :depends statsmodels: 0.8.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaquantome

   and update with::

      conda update metaquantome

   or use the docker container::

      docker pull quay.io/biocontainers/metaquantome:<tag>

   (see `metaquantome/tags`_ for valid values for ``<tag>``)


.. |downloads_metaquantome| image:: https://img.shields.io/conda/dn/bioconda/metaquantome.svg?style=flat
   :alt:   (downloads)
.. |docker_metaquantome| image:: https://quay.io/repository/biocontainers/metaquantome/status
   :target: https://quay.io/repository/biocontainers/metaquantome
.. _`metaquantome/tags`: https://quay.io/repository/biocontainers/metaquantome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquantome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquantome/README.html