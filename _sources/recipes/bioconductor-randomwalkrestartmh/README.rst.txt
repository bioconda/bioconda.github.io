.. title:: Package Recipe 'bioconductor-randomwalkrestartmh'
.. highlight: bash


bioconductor-randomwalkrestartmh
================================

.. conda:recipe:: bioconductor-randomwalkrestartmh
   :replaces_section_title:

   This package performs Random Walk with Restart on multiplex and heterogeneous networks. It is described in the following article\: \"Random Walk With Restart On Multiplex And Heterogeneous Biological Networks\". https\:\/\/www.biorxiv.org\/content\/early\/2017\/08\/30\/134734 .

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RandomWalkRestartMH.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-randomwalkrestartmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh/meta.yaml>`_

   


.. conda:package:: bioconductor-randomwalkrestartmh

   |downloads_bioconductor-randomwalkrestartmh| |docker_bioconductor-randomwalkrestartmh|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dnet`  :conda:package:`r-igraph`  :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-randomwalkrestartmh|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-randomwalkrestartmh

   and update with::

      conda update bioconductor-randomwalkrestartmh

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh


.. |required_by_bioconductor-randomwalkrestartmh| conda:required_by:: bioconductor-randomwalkrestartmh
.. |downloads_bioconductor-randomwalkrestartmh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randomwalkrestartmh.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-randomwalkrestartmh| image:: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html

