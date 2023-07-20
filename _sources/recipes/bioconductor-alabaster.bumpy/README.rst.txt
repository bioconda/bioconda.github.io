:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.bumpy'
.. highlight: bash

bioconductor-alabaster.bumpy
============================

.. conda:recipe:: bioconductor-alabaster.bumpy
   :replaces_section_title:
   :noindex:

   Save and Load BumpyMatrices to\/from file

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.bumpy.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.bumpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.bumpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.bumpy/meta.yaml>`_

   Save BumpyMatrix objects into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.bumpy

   |downloads_bioconductor-alabaster.bumpy| |docker_bioconductor-alabaster.bumpy|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-bumpymatrix: ``>=1.8.0,<1.9.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.bumpy

   and update with::

      conda update bioconductor-alabaster.bumpy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.bumpy:<tag>

   (see `bioconductor-alabaster.bumpy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.bumpy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.bumpy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.bumpy
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.bumpy| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy
.. _`bioconductor-alabaster.bumpy/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.bumpy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.bumpy";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.bumpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.bumpy/README.html