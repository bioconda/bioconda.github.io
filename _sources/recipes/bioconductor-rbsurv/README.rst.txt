:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbsurv'
.. highlight: bash

bioconductor-rbsurv
===================

.. conda:recipe:: bioconductor-rbsurv
   :replaces_section_title:
   :noindex:

   Robust likelihood\-based survival modeling with microarray data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rbsurv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rbsurv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbsurv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbsurv/meta.yaml>`_
   :links: biotools: :biotools:`rbsurv`, doi: :doi:`10.18637/jss.v029.i01`

   This package selects genes associated with survival.


.. conda:package:: bioconductor-rbsurv

   |downloads_bioconductor-rbsurv| |docker_bioconductor-rbsurv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-survival: 
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

      mamba install bioconductor-rbsurv

   and update with::

      mamba update bioconductor-rbsurv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbsurv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbsurv:<tag>

   (see `bioconductor-rbsurv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbsurv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbsurv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbsurv
   :alt:   (downloads)
.. |docker_bioconductor-rbsurv| image:: https://quay.io/repository/biocontainers/bioconductor-rbsurv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbsurv
.. _`bioconductor-rbsurv/tags`: https://quay.io/repository/biocontainers/bioconductor-rbsurv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbsurv";
        var versions = ["2.60.0","2.58.0","2.56.0","2.52.0","2.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbsurv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbsurv/README.html