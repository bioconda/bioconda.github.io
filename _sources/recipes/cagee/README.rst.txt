:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cagee'
.. highlight: bash

cagee
=====

.. conda:recipe:: cagee
   :replaces_section_title:
   :noindex:

   Analyzes changes in gene expression in a way that accounts for phylogenetic history and provides a statistical foundation for evolutionary inferences

   :homepage: https://github.com/hahnlab/CAGEE
   :license: ECL
   :recipe: /`cagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee/meta.yaml>`_

   


.. conda:package:: cagee

   |downloads_cagee| |docker_cagee|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=15.0.7``
   :depends llvm-openmp: ``>=16.0.3``
   :depends mkl: ``>=2020.4``
   :depends zlib: 
   :depends zstd: ``>=1.5.2,<1.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cagee

   and update with::

      conda update cagee

   or use the docker container::

      docker pull quay.io/biocontainers/cagee:<tag>

   (see `cagee/tags`_ for valid values for ``<tag>``)


.. |downloads_cagee| image:: https://img.shields.io/conda/dn/bioconda/cagee.svg?style=flat
   :target: https://anaconda.org/bioconda/cagee
   :alt:   (downloads)
.. |docker_cagee| image:: https://quay.io/repository/biocontainers/cagee/status
   :target: https://quay.io/repository/biocontainers/cagee
.. _`cagee/tags`: https://quay.io/repository/biocontainers/cagee?tab=tags


.. raw:: html

    <script>
        var package = "cagee";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cagee/README.html