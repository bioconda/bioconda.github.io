:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'predictosaurus'
.. highlight: bash

predictosaurus
==============

.. conda:recipe:: predictosaurus
   :replaces_section_title:
   :noindex:

   Predictosaurus is a command\-line tool designed for uncertainty\-aware haplotype\-based genomic variant effect prediction.

   :homepage: https://github.com/fxwiegand/predictosaurus
   :documentation: https://github.com/fxwiegand/predictosaurus/blob/v0.4.1/README.md
   
   :license: MIT / MIT
   :recipe: /`predictosaurus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predictosaurus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/predictosaurus/meta.yaml>`_

   


.. conda:package:: predictosaurus

   |downloads_predictosaurus| |docker_predictosaurus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.10-0</code>,  <code>0.2.9-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  </span></summary>
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openssl: ``>=3.5.2,<4.0a0``
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

      mamba install predictosaurus

   and update with::

      mamba update predictosaurus

  To create a new environment, run::

      mamba create --name myenvname predictosaurus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/predictosaurus:<tag>

   (see `predictosaurus/tags`_ for valid values for ``<tag>``)


.. |downloads_predictosaurus| image:: https://img.shields.io/conda/dn/bioconda/predictosaurus.svg?style=flat
   :target: https://anaconda.org/bioconda/predictosaurus
   :alt:   (downloads)
.. |docker_predictosaurus| image:: https://quay.io/repository/biocontainers/predictosaurus/status
   :target: https://quay.io/repository/biocontainers/predictosaurus
.. _`predictosaurus/tags`: https://quay.io/repository/biocontainers/predictosaurus?tab=tags


.. raw:: html

    <script>
        var package = "predictosaurus";
        var versions = ["0.4.1","0.4.0","0.3.2","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/predictosaurus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/predictosaurus/README.html