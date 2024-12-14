:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmaus2'
.. highlight: bash

libmaus2
========

.. conda:recipe:: libmaus2
   :replaces_section_title:
   :noindex:

   Collection of data structures and algorithms for NGS data.

   :homepage: https://gitlab.com/german.tischler/libmaus2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`libmaus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2/meta.yaml>`_
   :links: biotools: :biotools:`libmaus`

   


.. conda:package:: libmaus2

   |downloads_libmaus2| |docker_libmaus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.813-1</code>,  <code>2.0.813-0</code>,  <code>2.0.810-6</code>,  <code>2.0.810-5</code>,  <code>2.0.810-4</code>,  <code>2.0.810-3</code>,  <code>2.0.810-2</code>,  <code>2.0.777-1</code>,  <code>2.0.777-0</code>,  </span></summary>
      

      ``2.0.813-1``,  ``2.0.813-0``,  ``2.0.810-6``,  ``2.0.810-5``,  ``2.0.810-4``,  ``2.0.810-3``,  ``2.0.810-2``,  ``2.0.777-1``,  ``2.0.777-0``,  ``2.0.774-1``,  ``2.0.774-0``,  ``2.0.772-1``,  ``2.0.772-0``,  ``2.0.760-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libcurl: ``>=8.11.1,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends nettle: ``>=3.9.1,<3.10.0a0``
   :depends snappy: ``1.1.8.*``
   :depends snappy: ``>=1.1.8,<2.0a0``
   :depends staden_io_lib: ``>=1.14.14``
   :depends staden_io_lib: ``>=1.15.0,<1.16.0a0``
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

      mamba install libmaus2

   and update with::

      mamba update libmaus2

  To create a new environment, run::

      mamba create --name myenvname libmaus2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libmaus2:<tag>

   (see `libmaus2/tags`_ for valid values for ``<tag>``)


.. |downloads_libmaus2| image:: https://img.shields.io/conda/dn/bioconda/libmaus2.svg?style=flat
   :target: https://anaconda.org/bioconda/libmaus2
   :alt:   (downloads)
.. |docker_libmaus2| image:: https://quay.io/repository/biocontainers/libmaus2/status
   :target: https://quay.io/repository/biocontainers/libmaus2
.. _`libmaus2/tags`: https://quay.io/repository/biocontainers/libmaus2?tab=tags


.. raw:: html

    <script>
        var package = "libmaus2";
        var versions = ["2.0.813","2.0.813","2.0.810","2.0.810","2.0.810"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmaus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmaus2/README.html