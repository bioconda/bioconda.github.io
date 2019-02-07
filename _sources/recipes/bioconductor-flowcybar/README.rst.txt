.. title:: Package Recipe 'bioconductor-flowcybar'
.. highlight: bash


bioconductor-flowcybar
======================

.. conda:recipe:: bioconductor-flowcybar
   :replaces_section_title:

   A package to analyze flow cytometric data using gate information to follow population\/community dynamics

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowCyBar.html
   :license: GPL-2
   :recipe: /`bioconductor-flowcybar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar/meta.yaml>`_

   


.. conda:package:: bioconductor-flowcybar

   |downloads_bioconductor-flowcybar| |docker_bioconductor-flowcybar|

   :versions: 1.18.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-vegan`  

   :required~by: |required_by_bioconductor-flowcybar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcybar

   and update with::

      conda update bioconductor-flowcybar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowcybar


.. |required_by_bioconductor-flowcybar| conda:required_by:: bioconductor-flowcybar
.. |downloads_bioconductor-flowcybar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcybar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowcybar| image:: https://quay.io/repository/biocontainers/bioconductor-flowcybar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcybar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html

