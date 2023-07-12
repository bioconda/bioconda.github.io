:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-loomr'
.. highlight: bash

r-loomr
=======

.. conda:recipe:: r-loomr
   :replaces_section_title:
   :noindex:

   An interface for the single\-cell RNAseq\-oriented loom format. Loom files are an HDF5\-based
   format for storing and interacting with large single\-cell RNAseq datasets. loomR
   provides an interface for working with loom files in a loom\-specific way\; we provide
   routines for validating loom files\, iterating with chunks through data within the
   loom file\, and provide a platform for other packages to build support for loom files.


   :homepage: https://github.com/mojaveazure/loomR
   :license: GPL3 / GPL-3
   :recipe: /`r-loomr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loomr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loomr/meta.yaml>`_

   


.. conda:package:: r-loomr

   |downloads_r-loomr| |docker_r-loomr|

   :versions:
      
      

      ``0.2.0_beta-5``,  ``0.2.0_beta-4``,  ``0.2.0_beta-3``,  ``0.2.0_beta-2``,  ``0.2.0_beta-1``,  ``0.2.0_beta-0``

      

   
   :depends hdf5: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hdf5r: 
   :depends r-iterators: 
   :depends r-itertools: 
   :depends r-matrix: 
   :depends r-r6: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-loomr

   and update with::

      conda update r-loomr

   or use the docker container::

      docker pull quay.io/biocontainers/r-loomr:<tag>

   (see `r-loomr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-loomr| image:: https://img.shields.io/conda/dn/bioconda/r-loomr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-loomr
   :alt:   (downloads)
.. |docker_r-loomr| image:: https://quay.io/repository/biocontainers/r-loomr/status
   :target: https://quay.io/repository/biocontainers/r-loomr
.. _`r-loomr/tags`: https://quay.io/repository/biocontainers/r-loomr?tab=tags


.. raw:: html

    <script>
        var package = "r-loomr";
        var versions = ["0.2.0_beta","0.2.0_beta","0.2.0_beta","0.2.0_beta","0.2.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-loomr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-loomr/README.html