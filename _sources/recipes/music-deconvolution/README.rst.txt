:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'music-deconvolution'
.. highlight: bash

music-deconvolution
===================

.. conda:recipe:: music-deconvolution
   :replaces_section_title:
   :noindex:

   Multi\-subject single cell deconvolution

   :homepage: https://github.com/xuranw/MuSiC
   :license: GPL (>= 3)
   :recipe: /`music-deconvolution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music-deconvolution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/music-deconvolution/meta.yaml>`_

   Companion package to \"A bulk tissue deconvolution method with multi\-subject single cell expression reference.\" This package providase functions to estimate bulk tissue cell type proportions with multi\-subject single cell expression as reference.


.. conda:package:: music-deconvolution

   |downloads_music-deconvolution| |docker_music-deconvolution|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bioconductor-biobase: 
   :depends r-base: ``>=3.5.1,<3.5.2.0a0``
   :depends r-ggplot2: 
   :depends r-mcmcpack: 
   :depends r-nnls: 
   :depends r-plyr: 
   :depends xbioc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install music-deconvolution

   and update with::

      conda update music-deconvolution

   or use the docker container::

      docker pull quay.io/biocontainers/music-deconvolution:<tag>

   (see `music-deconvolution/tags`_ for valid values for ``<tag>``)


.. |downloads_music-deconvolution| image:: https://img.shields.io/conda/dn/bioconda/music-deconvolution.svg?style=flat
   :target: https://anaconda.org/bioconda/music-deconvolution
   :alt:   (downloads)
.. |docker_music-deconvolution| image:: https://quay.io/repository/biocontainers/music-deconvolution/status
   :target: https://quay.io/repository/biocontainers/music-deconvolution
.. _`music-deconvolution/tags`: https://quay.io/repository/biocontainers/music-deconvolution?tab=tags


.. raw:: html

    <script>
        var package = "music-deconvolution";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/music-deconvolution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/music-deconvolution/README.html