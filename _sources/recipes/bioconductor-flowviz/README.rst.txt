:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowviz'
.. highlight: bash

bioconductor-flowviz
====================

.. conda:recipe:: bioconductor-flowviz
   :replaces_section_title:
   :noindex:

   Visualization for flow cytometry

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowviz/meta.yaml>`_
   :links: biotools: :biotools:`flowviz`, doi: :doi:`10.1093/bioinformatics/btn021`

   Provides visualization tools for flow cytometry data.


.. conda:package:: bioconductor-flowviz

   |downloads_bioconductor-flowviz| |docker_bioconductor-flowviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hexbin: 
   :depends r-idpmisc: 
   :depends r-kernsmooth: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-flowviz

   and update with::

      mamba update bioconductor-flowviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowviz:<tag>

   (see `bioconductor-flowviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowviz
   :alt:   (downloads)
.. |docker_bioconductor-flowviz| image:: https://quay.io/repository/biocontainers/bioconductor-flowviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowviz
.. _`bioconductor-flowviz/tags`: https://quay.io/repository/biocontainers/bioconductor-flowviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowviz";
        var versions = ["1.66.0","1.64.0","1.62.0","1.58.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowviz/README.html