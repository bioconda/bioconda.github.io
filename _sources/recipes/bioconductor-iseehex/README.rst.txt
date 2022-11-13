:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseehex'
.. highlight: bash

bioconductor-iseehex
====================

.. conda:recipe:: bioconductor-iseehex
   :replaces_section_title:
   :noindex:

   iSEE extension for summarising data points in hexagonal bins

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/iSEEhex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-iseehex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseehex/meta.yaml>`_

   This package provides panels summarising data points in hexagonal bins for \`iSEE\`. It is part of \`iSEEu\`\, the iSEE universe of panels that extend the \`iSEE\` package.


.. conda:package:: bioconductor-iseehex

   |downloads_bioconductor-iseehex| |docker_bioconductor-iseehex|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-isee: ``>=2.10.0,<2.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iseehex

   and update with::

      conda update bioconductor-iseehex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iseehex:<tag>

   (see `bioconductor-iseehex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iseehex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseehex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseehex
   :alt:   (downloads)
.. |docker_bioconductor-iseehex| image:: https://quay.io/repository/biocontainers/bioconductor-iseehex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseehex
.. _`bioconductor-iseehex/tags`: https://quay.io/repository/biocontainers/bioconductor-iseehex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseehex";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseehex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseehex/README.html