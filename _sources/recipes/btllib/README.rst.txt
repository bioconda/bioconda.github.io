:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btllib'
.. highlight: bash

btllib
======

.. conda:recipe:: btllib
   :replaces_section_title:
   :noindex:

   Bioinformatics common code library in C\+\+ with Python wrappers\, from Bioinformatics Technology Lab

   :homepage: https://github.com/bcgsc/btllib
   :documentation: https://bcgsc.github.io/btllib/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`btllib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btllib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btllib/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.04720`, doi: :doi:`10.1093/bioadv/vbad162`

   


.. conda:package:: btllib

   |downloads_btllib| |docker_btllib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.3-0</code>,  <code>1.7.2-3</code>,  <code>1.7.2-2</code>,  <code>1.7.2-1</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.7.3-0``,  ``1.7.2-3``,  ``1.7.2-2``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.8-0``,  ``1.4.4-0``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: 
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=12``
   :depends lrzip: 
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``>=1.20,<2.0a0``
   :depends tar: 
   :depends wget: 
   :depends xz: 
   :depends zip: 
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

      mamba install btllib

   and update with::

      mamba update btllib

  To create a new environment, run::

      mamba create --name myenvname btllib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/btllib:<tag>

   (see `btllib/tags`_ for valid values for ``<tag>``)


.. |downloads_btllib| image:: https://img.shields.io/conda/dn/bioconda/btllib.svg?style=flat
   :target: https://anaconda.org/bioconda/btllib
   :alt:   (downloads)
.. |docker_btllib| image:: https://quay.io/repository/biocontainers/btllib/status
   :target: https://quay.io/repository/biocontainers/btllib
.. _`btllib/tags`: https://quay.io/repository/biocontainers/btllib?tab=tags


.. raw:: html

    <script>
        var package = "btllib";
        var versions = ["1.7.3","1.7.2","1.7.2","1.7.2","1.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btllib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btllib/README.html