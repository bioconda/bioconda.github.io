:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmerge'
.. highlight: bash

bioconductor-flowmerge
======================

.. conda:recipe:: bioconductor-flowmerge
   :replaces_section_title:
   :noindex:

   Cluster Merging for Flow Cytometry Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowMerge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmerge/meta.yaml>`_

   Merging of mixture components for model\-based automated gating of flow cytometry data using the flowClust framework. Note\: users should have a working copy of flowClust 2.0 installed.


.. conda:package:: bioconductor-flowmerge

   |downloads_bioconductor-flowmerge| |docker_bioconductor-flowmerge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  </span></summary>
      

      ``2.54.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowclust: ``>=3.44.0,<3.45.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-rgraphviz: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-feature: 
   :depends r-foreach: 
   :depends r-rrcov: 
   :depends r-snow: 
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

      mamba install bioconductor-flowmerge

   and update with::

      mamba update bioconductor-flowmerge

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowmerge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmerge:<tag>

   (see `bioconductor-flowmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmerge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmerge
   :alt:   (downloads)
.. |docker_bioconductor-flowmerge| image:: https://quay.io/repository/biocontainers/bioconductor-flowmerge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmerge
.. _`bioconductor-flowmerge/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmerge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmerge";
        var versions = ["2.54.0","2.50.0","2.48.0","2.46.0","2.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmerge/README.html