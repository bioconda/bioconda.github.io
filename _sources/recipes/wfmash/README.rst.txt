:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wfmash'
.. highlight: bash

wfmash
======

.. conda:recipe:: wfmash
   :replaces_section_title:
   :noindex:

   a pangenome\-scale aligner

   :homepage: https://github.com/waveygang/wfmash
   :license: MIT
   :recipe: /`wfmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfmash/meta.yaml>`_

   


.. conda:package:: wfmash

   |downloads_wfmash| |docker_wfmash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.22.0-0</code>,  <code>0.21.0-0</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.0-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  </span></summary>
      

      ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.0-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.10.5-0``,  ``0.10.4-0``,  ``0.10.3-2``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-1``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libjemalloc: ``>=5.3.0``
   :depends liblzma: ``>=5.6.4,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.7``
   :depends xz: 
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

      mamba install wfmash

   and update with::

      mamba update wfmash

  To create a new environment, run::

      mamba create --name myenvname wfmash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.22.0","0.21.0","0.20.0","0.19.0","0.18.0"];
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