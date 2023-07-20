:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbioformats'
.. highlight: bash

bioconductor-rbioformats
========================

.. conda:recipe:: bioconductor-rbioformats
   :replaces_section_title:
   :noindex:

   R interface to Bio\-Formats

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RBioFormats.html
   :license: GPL-3
   :recipe: /`bioconductor-rbioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbioformats/meta.yaml>`_

   An R package which interfaces the OME Bio\-Formats Java library to allow reading of proprietary microscopy image data and metadata.


.. conda:package:: bioconductor-rbioformats

   |downloads_bioconductor-rbioformats| |docker_bioconductor-rbioformats|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.42.0,<4.43.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rjava: ``>=0.9-6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbioformats

   and update with::

      conda update bioconductor-rbioformats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbioformats:<tag>

   (see `bioconductor-rbioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbioformats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbioformats
   :alt:   (downloads)
.. |docker_bioconductor-rbioformats| image:: https://quay.io/repository/biocontainers/bioconductor-rbioformats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbioformats
.. _`bioconductor-rbioformats/tags`: https://quay.io/repository/biocontainers/bioconductor-rbioformats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbioformats";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbioformats/README.html