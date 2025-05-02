:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unifrac-binaries'
.. highlight: bash

unifrac-binaries
================

.. conda:recipe:: unifrac-binaries
   :replaces_section_title:
   :noindex:

   Fast phylogenetic diversity calculations

   :homepage: https://github.com/biocore/unifrac-binaries
   :license: BSD / BSD-3-Clause
   :recipe: /`unifrac-binaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries/meta.yaml>`_

   UniFrac is a commonly phylogenetic diversity distance metric used in
   microbiome research. The metric relates two microbiome samples together
   within the context of an evolutionary history\, and produces a distance
   that corresponds to how similar two samples by the amount of overlapping
   branch length. This package contains command line utilities and
   a shared library.



.. conda:package:: unifrac-binaries

   |downloads_unifrac-binaries| |docker_unifrac-binaries|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3.2-2</code>,  <code>1.3.2-0</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  </span></summary>
      

      ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-2``,  ``1.3.2-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libaec: ``>=1.1.3,<2.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapacke: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends lz4: 
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install unifrac-binaries

   and update with::

      mamba update unifrac-binaries

  To create a new environment, run::

      mamba create --name myenvname unifrac-binaries

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unifrac-binaries:<tag>

   (see `unifrac-binaries/tags`_ for valid values for ``<tag>``)


.. |downloads_unifrac-binaries| image:: https://img.shields.io/conda/dn/bioconda/unifrac-binaries.svg?style=flat
   :target: https://anaconda.org/bioconda/unifrac-binaries
   :alt:   (downloads)
.. |docker_unifrac-binaries| image:: https://quay.io/repository/biocontainers/unifrac-binaries/status
   :target: https://quay.io/repository/biocontainers/unifrac-binaries
.. _`unifrac-binaries/tags`: https://quay.io/repository/biocontainers/unifrac-binaries?tab=tags


.. raw:: html

    <script>
        var package = "unifrac-binaries";
        var versions = ["1.5","1.4","1.4","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac-binaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac-binaries/README.html