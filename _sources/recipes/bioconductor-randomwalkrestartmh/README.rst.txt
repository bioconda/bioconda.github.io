:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randomwalkrestartmh'
.. highlight: bash

bioconductor-randomwalkrestartmh
================================

.. conda:recipe:: bioconductor-randomwalkrestartmh
   :replaces_section_title:
   :noindex:

   Random walk with restart on multiplex and heterogeneous Networks

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/RandomWalkRestartMH.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-randomwalkrestartmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh/meta.yaml>`_

   This package performs Random Walk with Restart on multiplex and heterogeneous networks. It is described in the following article\: \"Random Walk With Restart On Multiplex And Heterogeneous Biological Networks\". https\:\/\/www.biorxiv.org\/content\/early\/2017\/08\/30\/134734 .


.. conda:package:: bioconductor-randomwalkrestartmh

   |downloads_bioconductor-randomwalkrestartmh| |docker_bioconductor-randomwalkrestartmh|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dnet: 
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-randomwalkrestartmh

   and update with::

      conda update bioconductor-randomwalkrestartmh

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-randomwalkrestartmh:<tag>

   (see `bioconductor-randomwalkrestartmh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-randomwalkrestartmh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randomwalkrestartmh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randomwalkrestartmh
   :alt:   (downloads)
.. |docker_bioconductor-randomwalkrestartmh| image:: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh
.. _`bioconductor-randomwalkrestartmh/tags`: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-randomwalkrestartmh";
        var versions = ["1.12.0","1.10.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html