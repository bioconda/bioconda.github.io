:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kcsmart'
.. highlight: bash

bioconductor-kcsmart
====================

.. conda:recipe:: bioconductor-kcsmart
   :replaces_section_title:
   :noindex:

   Multi sample aCGH analysis package using kernel convolution

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/KCsmart.html
   :license: GPL-3
   :recipe: /`bioconductor-kcsmart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart/meta.yaml>`_
   :links: biotools: :biotools:`kcsmart`, doi: :doi:`10.1186/1756-0500-3-298`

   Multi sample aCGH analysis package using kernel convolution


.. conda:package:: bioconductor-kcsmart

   |downloads_bioconductor-kcsmart| |docker_bioconductor-kcsmart|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends bioconductor-siggenes: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-kcsmart

   and update with::

      mamba update bioconductor-kcsmart

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kcsmart

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kcsmart:<tag>

   (see `bioconductor-kcsmart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kcsmart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kcsmart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kcsmart
   :alt:   (downloads)
.. |docker_bioconductor-kcsmart| image:: https://quay.io/repository/biocontainers/bioconductor-kcsmart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kcsmart
.. _`bioconductor-kcsmart/tags`: https://quay.io/repository/biocontainers/bioconductor-kcsmart?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kcsmart";
        var versions = ["2.60.0","2.58.0","2.56.0","2.52.0","2.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html