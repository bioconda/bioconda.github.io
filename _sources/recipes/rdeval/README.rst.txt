:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdeval'
.. highlight: bash

rdeval
======

.. conda:recipe:: rdeval
   :replaces_section_title:
   :noindex:

   A general purpose\, multithreaded read analysis and manipulation tool.

   :homepage: https://github.com/vgl-hub/rdeval
   :documentation: https://github.com/vgl-hub/rdeval/blob/v0.0.7/README.md
   
   :license: MIT / MIT
   :recipe: /`rdeval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdeval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdeval/meta.yaml>`_

   


.. conda:package:: rdeval

   |downloads_rdeval| |docker_rdeval|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.7-2</code>,  <code>0.0.7-1</code>,  <code>0.0.7-0</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  </span></summary>
      

      ``0.0.7-2``,  ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-1``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
   :depends pandoc: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bit64: 
   :depends r-ggextra: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-tidyverse: 
   :depends tectonic: 
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

      mamba install rdeval

   and update with::

      mamba update rdeval

  To create a new environment, run::

      mamba create --name myenvname rdeval

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdeval:<tag>

   (see `rdeval/tags`_ for valid values for ``<tag>``)


.. |downloads_rdeval| image:: https://img.shields.io/conda/dn/bioconda/rdeval.svg?style=flat
   :target: https://anaconda.org/bioconda/rdeval
   :alt:   (downloads)
.. |docker_rdeval| image:: https://quay.io/repository/biocontainers/rdeval/status
   :target: https://quay.io/repository/biocontainers/rdeval
.. _`rdeval/tags`: https://quay.io/repository/biocontainers/rdeval?tab=tags


.. raw:: html

    <script>
        var package = "rdeval";
        var versions = ["0.0.7","0.0.7","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdeval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdeval/README.html