:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biochail'
.. highlight: bash

bioconductor-biochail
=====================

.. conda:recipe:: bioconductor-biochail
   :replaces_section_title:
   :noindex:

   basilisk and hail

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocHail.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biochail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochail/meta.yaml>`_

   Use hail via basilisk when appropriate\, or via reticulate. This package can be used in terra.bio to interact with UK Biobank resources processed by hail.is.


.. conda:package:: bioconductor-biochail

   |downloads_bioconductor-biochail| |docker_bioconductor-biochail|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biochail

   and update with::

      conda update bioconductor-biochail

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biochail:<tag>

   (see `bioconductor-biochail/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biochail| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biochail.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biochail
   :alt:   (downloads)
.. |docker_bioconductor-biochail| image:: https://quay.io/repository/biocontainers/bioconductor-biochail/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biochail
.. _`bioconductor-biochail/tags`: https://quay.io/repository/biocontainers/bioconductor-biochail?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biochail";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biochail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biochail/README.html