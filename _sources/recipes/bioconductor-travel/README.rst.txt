:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-travel'
.. highlight: bash

bioconductor-travel
===================

.. conda:recipe:: bioconductor-travel
   :replaces_section_title:
   :noindex:

   An utility to create an ALTREP object with a virtual pointer

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Travel.html
   :license: GPL-3
   :recipe: /`bioconductor-travel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-travel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-travel/meta.yaml>`_

   Creates a virtual pointer for R\'s ALTREP object which does not have the data allocates in memory. The pointer is made by the file mapping of a virtual file so it behaves exactly the same as a regular pointer. All the requests to access the pointer will be sent to the underlying file system and eventually handled by a customized data\-reading function. The main purpose of the package is to reduce the memory consumption when using R\'s vector to represent a large data. The use cases of the package include on\-disk data representation\, compressed vector\(e.g. RLE\) and etc.


.. conda:package:: bioconductor-travel

   |downloads_bioconductor-travel| |docker_bioconductor-travel|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-travel

   and update with::

      conda update bioconductor-travel

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-travel:<tag>

   (see `bioconductor-travel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-travel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-travel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-travel
   :alt:   (downloads)
.. |docker_bioconductor-travel| image:: https://quay.io/repository/biocontainers/bioconductor-travel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-travel
.. _`bioconductor-travel/tags`: https://quay.io/repository/biocontainers/bioconductor-travel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-travel";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-travel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-travel/README.html