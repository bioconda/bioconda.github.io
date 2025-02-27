:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dysgu'
.. highlight: bash

dysgu
=====

.. conda:recipe:: dysgu
   :replaces_section_title:
   :noindex:

   A collection of tools for calling structural variants using short or long reads

   :homepage: https://github.com/kcleal/dysgu
   :license: MIT / MIT
   :recipe: /`dysgu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu/meta.yaml>`_

   


.. conda:package:: dysgu

   |downloads_dysgu| |docker_dysgu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.0-1</code>,  <code>1.7.0-0</code>,  <code>1.6.7-0</code>,  <code>1.6.6-0</code>,  <code>1.6.5-1</code>,  <code>1.6.5-0</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.7-0``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.16-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends click: ``>=8.0``
   :depends cython: 
   :depends htslib: ``>=1.12``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libcurl: ``>=8.12.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.6.4,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends lightgbm: 
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.18``
   :depends numpy: ``>=1.21,<3``
   :depends openssl: ``>=3.4.1,<4.0a0``
   :depends pandas: ``>=1.2``
   :depends pysam: ``>=0.22``
   :depends pysam: ``>=0.23.0,<0.24.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-edlib: ``>=1.3.9.0inf.1,<2.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=0.22``
   :depends scipy: ``>=1.7``
   :depends sortedcontainers: 
   :depends superintervals: 
   :depends wheel: 
   :depends xz: 
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

      mamba install dysgu

   and update with::

      mamba update dysgu

  To create a new environment, run::

      mamba create --name myenvname dysgu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dysgu:<tag>

   (see `dysgu/tags`_ for valid values for ``<tag>``)


.. |downloads_dysgu| image:: https://img.shields.io/conda/dn/bioconda/dysgu.svg?style=flat
   :target: https://anaconda.org/bioconda/dysgu
   :alt:   (downloads)
.. |docker_dysgu| image:: https://quay.io/repository/biocontainers/dysgu/status
   :target: https://quay.io/repository/biocontainers/dysgu
.. _`dysgu/tags`: https://quay.io/repository/biocontainers/dysgu?tab=tags


.. raw:: html

    <script>
        var package = "dysgu";
        var versions = ["1.8.0","1.7.0","1.7.0","1.6.7","1.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dysgu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dysgu/README.html