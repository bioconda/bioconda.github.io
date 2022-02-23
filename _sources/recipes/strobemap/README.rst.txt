:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strobemap'
.. highlight: bash

strobemap
=========

.. conda:recipe:: strobemap
   :replaces_section_title:
   :noindex:

   Efficient string matching using strobemers

   :homepage: https://github.com/ksahlin/strobemers
   :license: GPL-3.0 License
   :recipe: /`strobemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobemap/meta.yaml>`_

   


.. conda:package:: strobemap

   |downloads_strobemap| |docker_strobemap|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends _openmp_mutex: ``* *_llvm``
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends llvm-openmp: ``>=13.0.1``
   :depends python: ``>=3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strobemap

   and update with::

      conda update strobemap

   or use the docker container::

      docker pull quay.io/biocontainers/strobemap:<tag>

   (see `strobemap/tags`_ for valid values for ``<tag>``)


.. |downloads_strobemap| image:: https://img.shields.io/conda/dn/bioconda/strobemap.svg?style=flat
   :target: https://anaconda.org/bioconda/strobemap
   :alt:   (downloads)
.. |docker_strobemap| image:: https://quay.io/repository/biocontainers/strobemap/status
   :target: https://quay.io/repository/biocontainers/strobemap
.. _`strobemap/tags`: https://quay.io/repository/biocontainers/strobemap?tab=tags


.. raw:: html

    <script>
        var package = "strobemap";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strobemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strobemap/README.html