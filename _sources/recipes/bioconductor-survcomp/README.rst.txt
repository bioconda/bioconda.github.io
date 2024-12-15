:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survcomp'
.. highlight: bash

bioconductor-survcomp
=====================

.. conda:recipe:: bioconductor-survcomp
   :replaces_section_title:
   :noindex:

   Performance Assessment and Comparison for Survival Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/survcomp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survcomp/meta.yaml>`_
   :links: biotools: :biotools:`survcomp`

   Assessment and Comparison for Performance of Risk Prediction \(Survival\) Models.


.. conda:package:: bioconductor-survcomp

   |downloads_bioconductor-survcomp| |docker_bioconductor-survcomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-2</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.44.1-1</code>,  <code>1.44.1-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-2``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.44.1-1``,  ``1.44.1-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bootstrap: 
   :depends r-ipred: 
   :depends r-kernsmooth: 
   :depends r-prodlim: 
   :depends r-rmeta: 
   :depends r-suppdists: 
   :depends r-survival: 
   :depends r-survivalroc: 
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

      mamba install bioconductor-survcomp

   and update with::

      mamba update bioconductor-survcomp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-survcomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-survcomp:<tag>

   (see `bioconductor-survcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-survcomp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survcomp
   :alt:   (downloads)
.. |docker_bioconductor-survcomp| image:: https://quay.io/repository/biocontainers/bioconductor-survcomp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survcomp
.. _`bioconductor-survcomp/tags`: https://quay.io/repository/biocontainers/bioconductor-survcomp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-survcomp";
        var versions = ["1.56.0","1.52.0","1.52.0","1.50.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survcomp/README.html