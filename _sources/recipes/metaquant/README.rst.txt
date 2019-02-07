.. title:: Package Recipe 'metaquant'
.. highlight: bash


metaquant
=========

.. conda:recipe:: metaquant
   :replaces_section_title:

   Quantitative microbiome analysis

   :homepage: The package home page
   :developer docs: https://github.com/caleb-easterly/metaquant
   :license: APACHE / Apache Software License
   :recipe: /`metaquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaquant/meta.yaml>`_

   


.. conda:package:: metaquant

   |downloads_metaquant| |docker_metaquant|

   :versions: 0.1.2

   :depends: :conda:package:`ete3`  :conda:package:`goatools`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`statsmodels`  :conda:package:`wget`  

   :required~by: |required_by_metaquant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaquant

   and update with::

      conda update metaquant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaquant


.. |required_by_metaquant| conda:required_by:: metaquant
.. |downloads_metaquant| image:: https://img.shields.io/conda/dn/bioconda/metaquant.svg?style=flat
   :alt:   (downloads)
.. |docker_metaquant| image:: https://quay.io/repository/biocontainers/metaquant/status
   :target: https://quay.io/repository/biocontainers/metaquant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaquant/README.html

