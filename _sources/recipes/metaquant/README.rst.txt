:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaquant'
.. highlight: bash

metaquant
=========

.. conda:recipe:: metaquant
   :replaces_section_title:
   :noindex:

   Quantitative microbiome analysis

   :homepage: The package home page
   :developer docs: https://github.com/caleb-easterly/metaquant
   :license: APACHE / Apache Software License
   :recipe: /`metaquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant/meta.yaml>`_

   


.. conda:package:: metaquant

   |downloads_metaquant| |docker_metaquant|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends ete3: 
   :depends goatools: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends statsmodels: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaquant

   and update with::

      conda update metaquant

   or use the docker container::

      docker pull quay.io/biocontainers/metaquant:<tag>

   (see `metaquant/tags`_ for valid values for ``<tag>``)


.. |downloads_metaquant| image:: https://img.shields.io/conda/dn/bioconda/metaquant.svg?style=flat
   :target: https://anaconda.org/bioconda/metaquant
   :alt:   (downloads)
.. |docker_metaquant| image:: https://quay.io/repository/biocontainers/metaquant/status
   :target: https://quay.io/repository/biocontainers/metaquant
.. _`metaquant/tags`: https://quay.io/repository/biocontainers/metaquant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquant/README.html