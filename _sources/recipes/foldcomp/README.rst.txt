:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldcomp'
.. highlight: bash

foldcomp
========

.. conda:recipe:: foldcomp
   :replaces_section_title:
   :noindex:

   Foldcomp\: a library and format for compressing and indexing large protein structure sets

   :homepage: https://github.com/steineggerlab/foldcomp
   :license: GPLv3
   :recipe: /`foldcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldcomp/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.09.519715`

   


.. conda:package:: foldcomp

   |downloads_foldcomp| |docker_foldcomp|

   :versions:
      
      

      ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=15.0.7``
   :depends llvm-openmp: ``>=16.0.3``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install foldcomp

   and update with::

      conda update foldcomp

   or use the docker container::

      docker pull quay.io/biocontainers/foldcomp:<tag>

   (see `foldcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_foldcomp| image:: https://img.shields.io/conda/dn/bioconda/foldcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/foldcomp
   :alt:   (downloads)
.. |docker_foldcomp| image:: https://quay.io/repository/biocontainers/foldcomp/status
   :target: https://quay.io/repository/biocontainers/foldcomp
.. _`foldcomp/tags`: https://quay.io/repository/biocontainers/foldcomp?tab=tags


.. raw:: html

    <script>
        var package = "foldcomp";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldcomp/README.html