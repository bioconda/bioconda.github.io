:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-selex'
.. highlight: bash

bioconductor-selex
==================

.. conda:recipe:: bioconductor-selex
   :replaces_section_title:
   :noindex:

   Functions for analyzing SELEX\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SELEX.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-selex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-selex/meta.yaml>`_

   Tools for quantifying DNA binding specificities based on SELEX\-seq data.


.. conda:package:: bioconductor-selex

   |downloads_bioconductor-selex| |docker_bioconductor-selex|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends openjdk: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rjava: ``>=0.5-0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-selex

   and update with::

      conda update bioconductor-selex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-selex:<tag>

   (see `bioconductor-selex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-selex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-selex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-selex
   :alt:   (downloads)
.. |docker_bioconductor-selex| image:: https://quay.io/repository/biocontainers/bioconductor-selex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-selex
.. _`bioconductor-selex/tags`: https://quay.io/repository/biocontainers/bioconductor-selex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-selex";
        var versions = ["1.26.0","1.24.0","1.22.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-selex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-selex/README.html