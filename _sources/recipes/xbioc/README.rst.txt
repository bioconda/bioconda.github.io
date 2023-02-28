:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xbioc'
.. highlight: bash

xbioc
=====

.. conda:recipe:: xbioc
   :replaces_section_title:
   :noindex:

   Extra Base Functions for Bioconductor

   :homepage: https://github.com/renozao/xbioc
   :license: GPL (>= 3)
   :recipe: /`xbioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xbioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xbioc/meta.yaml>`_

   


.. conda:package:: xbioc

   |downloads_xbioc| |docker_xbioc|

   :versions:
      
      

      ``0.1.19-2``,  ``0.1.19-1``,  ``0.1.19-0``,  ``0.1.18-2``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.16-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-biobase: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-checkmate: 
   :depends r-digest: 
   :depends r-pkgmaker: ``>=0.26.6``
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xbioc

   and update with::

      conda update xbioc

   or use the docker container::

      docker pull quay.io/biocontainers/xbioc:<tag>

   (see `xbioc/tags`_ for valid values for ``<tag>``)


.. |downloads_xbioc| image:: https://img.shields.io/conda/dn/bioconda/xbioc.svg?style=flat
   :target: https://anaconda.org/bioconda/xbioc
   :alt:   (downloads)
.. |docker_xbioc| image:: https://quay.io/repository/biocontainers/xbioc/status
   :target: https://quay.io/repository/biocontainers/xbioc
.. _`xbioc/tags`: https://quay.io/repository/biocontainers/xbioc?tab=tags


.. raw:: html

    <script>
        var package = "xbioc";
        var versions = ["0.1.19","0.1.19","0.1.19","0.1.18","0.1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xbioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xbioc/README.html