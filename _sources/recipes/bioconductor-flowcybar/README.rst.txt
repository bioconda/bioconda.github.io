:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcybar'
.. highlight: bash

bioconductor-flowcybar
======================

.. conda:recipe:: bioconductor-flowcybar
   :replaces_section_title:
   :noindex:

   Analyze flow cytometric data using gate information

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/flowCyBar.html
   :license: GPL-2
   :recipe: /`bioconductor-flowcybar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcybar/meta.yaml>`_

   A package to analyze flow cytometric data using gate information to follow population\/community dynamics


.. conda:package:: bioconductor-flowcybar

   |downloads_bioconductor-flowcybar| |docker_bioconductor-flowcybar|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcybar

   and update with::

      conda update bioconductor-flowcybar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcybar:<tag>

   (see `bioconductor-flowcybar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcybar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcybar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcybar
   :alt:   (downloads)
.. |docker_bioconductor-flowcybar| image:: https://quay.io/repository/biocontainers/bioconductor-flowcybar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcybar
.. _`bioconductor-flowcybar/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcybar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowcybar";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcybar/README.html