:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wally'
.. highlight: bash

wally
=====

.. conda:recipe:: wally
   :replaces_section_title:
   :noindex:

   Visualization of aligned sequencing reads and genomic variants.

   :homepage: https://github.com/tobiasrausch/wally
   :license: BSD / BSD-3-Clause
   :recipe: /`wally <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wally>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wally/meta.yaml>`_

   


.. conda:package:: wally

   |downloads_wally| |docker_wally|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-2</code>,  <code>0.5.8-1</code>,  <code>0.5.8-0</code>,  <code>0.5.7-0</code>,  <code>0.5.6-2</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.9-0``,  ``0.5.8-2``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-2``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.5-1``,  ``0.2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libopencv: ``>=4.11.0,<4.11.1.0a0``
   :depends libopencv: ``>=4.5.3``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install wally

   and update with::

      mamba update wally

  To create a new environment, run::

      mamba create --name myenvname wally

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wally:<tag>

   (see `wally/tags`_ for valid values for ``<tag>``)


.. |downloads_wally| image:: https://img.shields.io/conda/dn/bioconda/wally.svg?style=flat
   :target: https://anaconda.org/bioconda/wally
   :alt:   (downloads)
.. |docker_wally| image:: https://quay.io/repository/biocontainers/wally/status
   :target: https://quay.io/repository/biocontainers/wally
.. _`wally/tags`: https://quay.io/repository/biocontainers/wally?tab=tags


.. raw:: html

    <script>
        var package = "wally";
        var versions = ["0.7.1","0.6.1","0.6.1","0.5.9","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wally/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wally/README.html