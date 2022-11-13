:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbwa'
.. highlight: bash

bioconductor-rbwa
=================

.. conda:recipe:: bioconductor-rbwa
   :replaces_section_title:
   :noindex:

   R wrapper for BWA\-backtrack and BWA\-MEM aligners

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Rbwa.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rbwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbwa/meta.yaml>`_

   Provides an R wrapper for BWA alignment algorithms. Both BWA\-backtrack and BWA\-MEM are available. Convenience function to build a BWA index from a reference genome is also provided. Currently not supported for Windows machines.


.. conda:package:: bioconductor-rbwa

   |downloads_bioconductor-rbwa| |docker_bioconductor-rbwa|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbwa

   and update with::

      conda update bioconductor-rbwa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbwa:<tag>

   (see `bioconductor-rbwa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbwa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbwa
   :alt:   (downloads)
.. |docker_bioconductor-rbwa| image:: https://quay.io/repository/biocontainers/bioconductor-rbwa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbwa
.. _`bioconductor-rbwa/tags`: https://quay.io/repository/biocontainers/bioconductor-rbwa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbwa";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbwa/README.html