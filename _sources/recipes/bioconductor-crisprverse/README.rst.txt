:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprverse'
.. highlight: bash

bioconductor-crisprverse
========================

.. conda:recipe:: bioconductor-crisprverse
   :replaces_section_title:
   :noindex:

   Easily install and load the crisprVerse ecosystem for CRISPR gRNA design

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/crisprVerse.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprverse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprverse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprverse/meta.yaml>`_

   The crisprVerse is a modular ecosystem of R packages developed for the design and manipulation of CRISPR guide RNAs \(gRNAs\). All packages share a common language and design principles. This package is designed to make it easy to install and load the crisprVerse packages in a single step. To learn more about the crisprVerse\, visit \<https\:\/\/www.github.com\/crisprVerse\>.


.. conda:package:: bioconductor-crisprverse

   |downloads_bioconductor-crisprverse| |docker_bioconductor-crisprverse|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-crisprbase: ``>=1.4.0,<1.5.0``
   :depends bioconductor-crisprbowtie: ``>=1.4.0,<1.5.0``
   :depends bioconductor-crisprdesign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-crisprscore: ``>=1.4.0,<1.5.0``
   :depends bioconductor-crisprscoredata: ``>=1.4.0,<1.5.0``
   :depends bioconductor-crisprviz: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-cli: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprverse

   and update with::

      conda update bioconductor-crisprverse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprverse:<tag>

   (see `bioconductor-crisprverse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprverse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprverse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprverse
   :alt:   (downloads)
.. |docker_bioconductor-crisprverse| image:: https://quay.io/repository/biocontainers/bioconductor-crisprverse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprverse
.. _`bioconductor-crisprverse/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprverse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprverse";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprverse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprverse/README.html