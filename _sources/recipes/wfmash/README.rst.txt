:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wfmash'
.. highlight: bash

wfmash
======

.. conda:recipe:: wfmash
   :replaces_section_title:
   :noindex:

   A DNA sequence aligner based on mash distances and the wavefront alignment algorithm

   :homepage: https://github.com/ekg/wfmash
   :license: MIT
   :recipe: /`wfmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfmash/meta.yaml>`_

   


.. conda:package:: wfmash

   |downloads_wfmash| |docker_wfmash|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends jemalloc: ``>=5.2.1``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wfmash

   and update with::

      conda update wfmash

   or use the docker container::

      docker pull quay.io/biocontainers/wfmash:<tag>

   (see `wfmash/tags`_ for valid values for ``<tag>``)


.. |downloads_wfmash| image:: https://img.shields.io/conda/dn/bioconda/wfmash.svg?style=flat
   :target: https://anaconda.org/bioconda/wfmash
   :alt:   (downloads)
.. |docker_wfmash| image:: https://quay.io/repository/biocontainers/wfmash/status
   :target: https://quay.io/repository/biocontainers/wfmash
.. _`wfmash/tags`: https://quay.io/repository/biocontainers/wfmash?tab=tags


.. raw:: html

    <script>
        var package = "wfmash";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wfmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wfmash/README.html