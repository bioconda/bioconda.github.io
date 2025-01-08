:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibmq'
.. highlight: bash

bioconductor-ibmq
=================

.. conda:recipe:: bioconductor-ibmq
   :replaces_section_title:
   :noindex:

   integrated Bayesian Modeling of eQTL data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iBMQ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ibmq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibmq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibmq/meta.yaml>`_
   :links: biotools: :biotools:`ibmq`, usegalaxy-eu: :usegalaxy-eu:`ibmq`

   integrated Bayesian Modeling of eQTL data


.. conda:package:: bioconductor-ibmq

   |downloads_bioconductor-ibmq| |docker_bioconductor-ibmq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-3</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-3``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=0.9.2``
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

      mamba install bioconductor-ibmq

   and update with::

      mamba update bioconductor-ibmq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ibmq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ibmq:<tag>

   (see `bioconductor-ibmq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ibmq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibmq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ibmq
   :alt:   (downloads)
.. |docker_bioconductor-ibmq| image:: https://quay.io/repository/biocontainers/bioconductor-ibmq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibmq
.. _`bioconductor-ibmq/tags`: https://quay.io/repository/biocontainers/bioconductor-ibmq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ibmq";
        var versions = ["1.46.0","1.42.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibmq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibmq/README.html