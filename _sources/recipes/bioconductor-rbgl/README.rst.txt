:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbgl'
.. highlight: bash

bioconductor-rbgl
=================

.. conda:recipe:: bioconductor-rbgl
   :replaces_section_title:
   :noindex:

   An interface to the BOOST graph library

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RBGL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rbgl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbgl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbgl/meta.yaml>`_
   :links: biotools: :biotools:`rbgl`, doi: :doi:`10.1093/bioinformatics/bth458`

   A fairly extensive and comprehensive interface to the graph algorithms contained in the BOOST library.


.. conda:package:: bioconductor-rbgl

   |downloads_bioconductor-rbgl| |docker_bioconductor-rbgl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-1</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  </span></summary>
      

      ``1.78.0-1``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.1-0``,  ``1.60.0-1``,  ``1.58.2-0``,  ``1.58.1-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.1-1``,  ``1.46.0-1``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
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

      mamba install bioconductor-rbgl

   and update with::

      mamba update bioconductor-rbgl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbgl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbgl:<tag>

   (see `bioconductor-rbgl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbgl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbgl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbgl
   :alt:   (downloads)
.. |docker_bioconductor-rbgl| image:: https://quay.io/repository/biocontainers/bioconductor-rbgl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbgl
.. _`bioconductor-rbgl/tags`: https://quay.io/repository/biocontainers/bioconductor-rbgl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbgl";
        var versions = ["1.78.0","1.78.0","1.76.0","1.74.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbgl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbgl/README.html