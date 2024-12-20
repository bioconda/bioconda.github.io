:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtrans'
.. highlight: bash

bioconductor-flowtrans
======================

.. conda:recipe:: bioconductor-flowtrans
   :replaces_section_title:
   :noindex:

   Parameter Optimization for Flow Cytometry Data Transformation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowTrans.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtrans/meta.yaml>`_

   Profile maximum likelihood estimation of parameters for flow cytometry data transformations.


.. conda:package:: bioconductor-flowtrans

   |downloads_bioconductor-flowtrans| |docker_bioconductor-flowtrans|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowclust: ``>=3.44.0,<3.45.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowviz: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-flowtrans

   and update with::

      mamba update bioconductor-flowtrans

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowtrans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowtrans:<tag>

   (see `bioconductor-flowtrans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowtrans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtrans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtrans
   :alt:   (downloads)
.. |docker_bioconductor-flowtrans| image:: https://quay.io/repository/biocontainers/bioconductor-flowtrans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtrans
.. _`bioconductor-flowtrans/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtrans?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowtrans";
        var versions = ["1.58.0","1.54.0","1.52.0","1.50.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtrans/README.html