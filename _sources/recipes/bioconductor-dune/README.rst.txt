:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dune'
.. highlight: bash

bioconductor-dune
=================

.. conda:recipe:: bioconductor-dune
   :replaces_section_title:
   :noindex:

   Improving replicability in single\-cell RNA\-Seq cell type discovery

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Dune.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dune/meta.yaml>`_

   Given a set of clustering labels\, Dune merges pairs of clusters to increase mean ARI between labels\, improving replicability.


.. conda:package:: bioconductor-dune

   |downloads_bioconductor-dune| |docker_bioconductor-dune|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-aricode: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-gganimate: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dune

   and update with::

      conda update bioconductor-dune

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dune:<tag>

   (see `bioconductor-dune/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dune| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dune.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dune
   :alt:   (downloads)
.. |docker_bioconductor-dune| image:: https://quay.io/repository/biocontainers/bioconductor-dune/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dune
.. _`bioconductor-dune/tags`: https://quay.io/repository/biocontainers/bioconductor-dune?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dune";
        var versions = ["1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dune/README.html