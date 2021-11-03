:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anf'
.. highlight: bash

bioconductor-anf
================

.. conda:recipe:: bioconductor-anf
   :replaces_section_title:
   :noindex:

   Affinity Network Fusion for Complex Patient Clustering

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ANF.html
   :license: GPL-3
   :recipe: /`bioconductor-anf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anf/meta.yaml>`_

   This package is used for complex patient clustering by integrating multi\-omic data through affinity network fusion.


.. conda:package:: bioconductor-anf

   |downloads_bioconductor-anf| |docker_bioconductor-anf|

   :versions:
      
      

      ``1.16.0-0``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anf

   and update with::

      conda update bioconductor-anf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anf:<tag>

   (see `bioconductor-anf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anf
   :alt:   (downloads)
.. |docker_bioconductor-anf| image:: https://quay.io/repository/biocontainers/bioconductor-anf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anf
.. _`bioconductor-anf/tags`: https://quay.io/repository/biocontainers/bioconductor-anf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anf";
        var versions = ["1.16.0","1.13.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anf/README.html