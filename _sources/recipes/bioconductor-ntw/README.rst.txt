:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ntw'
.. highlight: bash

bioconductor-ntw
================

.. conda:recipe:: bioconductor-ntw
   :replaces_section_title:
   :noindex:

   Predict gene network using an Ordinary Differential Equation \(ODE\) based method

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/NTW.html
   :license: GPL-2
   :recipe: /`bioconductor-ntw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ntw/meta.yaml>`_
   :links: biotools: :biotools:`ntw`, doi: :doi:`10.1093/bioinformatics/btq629`

   This package predicts the gene\-gene interaction network and identifies the direct transcriptional targets of the perturbation using an ODE \(Ordinary Differential Equation\) based method.


.. conda:package:: bioconductor-ntw

   |downloads_bioconductor-ntw| |docker_bioconductor-ntw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mvtnorm: 
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

      mamba install bioconductor-ntw

   and update with::

      mamba update bioconductor-ntw

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ntw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ntw:<tag>

   (see `bioconductor-ntw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ntw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ntw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ntw
   :alt:   (downloads)
.. |docker_bioconductor-ntw| image:: https://quay.io/repository/biocontainers/bioconductor-ntw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ntw
.. _`bioconductor-ntw/tags`: https://quay.io/repository/biocontainers/bioconductor-ntw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ntw";
        var versions = ["1.56.0","1.52.0","1.50.0","1.48.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ntw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ntw/README.html