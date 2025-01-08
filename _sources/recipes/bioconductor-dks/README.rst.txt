:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dks'
.. highlight: bash

bioconductor-dks
================

.. conda:recipe:: bioconductor-dks
   :replaces_section_title:
   :noindex:

   The double Kolmogorov\-Smirnov package for evaluating multiple testing procedures.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dks.html
   :license: GPL
   :recipe: /`bioconductor-dks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dks/meta.yaml>`_

   The dks package consists of a set of diagnostic functions for multiple testing methods. The functions can be used to determine if the p\-values produced by a multiple testing procedure are correct. These functions are designed to be applied to simulated data. The functions require the entire set of p\-values from multiple simulated studies\, so that the joint distribution can be evaluated.


.. conda:package:: bioconductor-dks

   |downloads_bioconductor-dks| |docker_bioconductor-dks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cubature: 
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

      mamba install bioconductor-dks

   and update with::

      mamba update bioconductor-dks

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dks:<tag>

   (see `bioconductor-dks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dks
   :alt:   (downloads)
.. |docker_bioconductor-dks| image:: https://quay.io/repository/biocontainers/bioconductor-dks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dks
.. _`bioconductor-dks/tags`: https://quay.io/repository/biocontainers/bioconductor-dks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dks";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dks/README.html