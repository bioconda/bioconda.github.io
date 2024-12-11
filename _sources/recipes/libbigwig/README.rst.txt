:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libbigwig'
.. highlight: bash

libbigwig
=========

.. conda:recipe:: libbigwig
   :replaces_section_title:
   :noindex:

   A C library for handling bigWig files

   :homepage: https://github.com/dpryan79/libBigWig
   :license: MIT
   :recipe: /`libbigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libbigwig/meta.yaml>`_

   


.. conda:package:: libbigwig

   |downloads_libbigwig| |docker_libbigwig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.7-7</code>,  <code>0.4.7-6</code>,  <code>0.4.7-5</code>,  <code>0.4.7-4</code>,  <code>0.4.7-3</code>,  <code>0.4.7-2</code>,  <code>0.4.7-1</code>,  <code>0.4.7-0</code>,  <code>0.4.6-3</code>,  </span></summary>
      

      ``0.4.7-7``,  ``0.4.7-6``,  ``0.4.7-5``,  ``0.4.7-4``,  ``0.4.7-3``,  ``0.4.7-2``,  ``0.4.7-1``,  ``0.4.7-0``,  ``0.4.6-3``,  ``0.4.6-2``,  ``0.4.6-1``,  ``0.4.6-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcurl: ``>=8.10.1,<9.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install libbigwig

   and update with::

      mamba update libbigwig

  To create a new environment, run::

      mamba create --name myenvname libbigwig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libbigwig:<tag>

   (see `libbigwig/tags`_ for valid values for ``<tag>``)


.. |downloads_libbigwig| image:: https://img.shields.io/conda/dn/bioconda/libbigwig.svg?style=flat
   :target: https://anaconda.org/bioconda/libbigwig
   :alt:   (downloads)
.. |docker_libbigwig| image:: https://quay.io/repository/biocontainers/libbigwig/status
   :target: https://quay.io/repository/biocontainers/libbigwig
.. _`libbigwig/tags`: https://quay.io/repository/biocontainers/libbigwig?tab=tags


.. raw:: html

    <script>
        var package = "libbigwig";
        var versions = ["0.4.7","0.4.7","0.4.7","0.4.7","0.4.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libbigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libbigwig/README.html