:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sim'
.. highlight: bash

bioconductor-sim
================

.. conda:recipe:: bioconductor-sim
   :replaces_section_title:
   :noindex:

   Integrated Analysis on two human genomic datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SIM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sim/meta.yaml>`_
   :links: biotools: :biotools:`sim`, doi: :doi:`10.1186/1471-2105-10-203`

   Finds associations between two human genomic datasets.


.. conda:package:: bioconductor-sim

   |downloads_bioconductor-sim| |docker_bioconductor-sim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-globaltest: ``>=5.60.0,<5.61.0``
   :depends bioconductor-globaltest: ``>=5.60.0,<5.61.0a0``
   :depends bioconductor-quantsmooth: ``>=1.72.0,<1.73.0``
   :depends bioconductor-quantsmooth: ``>=1.72.0,<1.73.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-quantreg: 
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

      mamba install bioconductor-sim

   and update with::

      mamba update bioconductor-sim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sim:<tag>

   (see `bioconductor-sim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sim
   :alt:   (downloads)
.. |docker_bioconductor-sim| image:: https://quay.io/repository/biocontainers/bioconductor-sim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sim
.. _`bioconductor-sim/tags`: https://quay.io/repository/biocontainers/bioconductor-sim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sim";
        var versions = ["1.76.0","1.72.0","1.70.0","1.68.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sim/README.html