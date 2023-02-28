:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seidr'
.. highlight: bash

seidr
=====

.. conda:recipe:: seidr
   :replaces_section_title:
   :noindex:

   Community gene network inference and exploration toolkit

   :homepage: https://github.com/bschiffthaler/seidr
   :license: GPL-2.0-or-later
   :recipe: /`seidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seidr/meta.yaml>`_

   


.. conda:package:: seidr

   |downloads_seidr| |docker_seidr|

   :versions:
      
      

      ``0.14.2-1``,  ``0.14.2-0``

      

   
   :depends armadillo: ``* *openblas*``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends coin-or-clp: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends mpich: ``>=4.0,<4.1.0a0``
   :depends tbb: ``>=2021.6.0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seidr

   and update with::

      conda update seidr

   or use the docker container::

      docker pull quay.io/biocontainers/seidr:<tag>

   (see `seidr/tags`_ for valid values for ``<tag>``)


.. |downloads_seidr| image:: https://img.shields.io/conda/dn/bioconda/seidr.svg?style=flat
   :target: https://anaconda.org/bioconda/seidr
   :alt:   (downloads)
.. |docker_seidr| image:: https://quay.io/repository/biocontainers/seidr/status
   :target: https://quay.io/repository/biocontainers/seidr
.. _`seidr/tags`: https://quay.io/repository/biocontainers/seidr?tab=tags


.. raw:: html

    <script>
        var package = "seidr";
        var versions = ["0.14.2","0.14.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seidr/README.html