:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methinheritsim'
.. highlight: bash

bioconductor-methinheritsim
===========================

.. conda:recipe:: bioconductor-methinheritsim
   :replaces_section_title:
   :noindex:

   Simulating Whole\-Genome Inherited Bisulphite Sequencing Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/methInheritSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methinheritsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methinheritsim/meta.yaml>`_

   Simulate a multigeneration methylation case versus control experiment with inheritance relation using a real control dataset.


.. conda:package:: bioconductor-methinheritsim

   |downloads_bioconductor-methinheritsim| |docker_bioconductor-methinheritsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-methylkit: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-msm: 
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

      mamba install bioconductor-methinheritsim

   and update with::

      mamba update bioconductor-methinheritsim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methinheritsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methinheritsim:<tag>

   (see `bioconductor-methinheritsim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methinheritsim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methinheritsim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methinheritsim
   :alt:   (downloads)
.. |docker_bioconductor-methinheritsim| image:: https://quay.io/repository/biocontainers/bioconductor-methinheritsim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methinheritsim
.. _`bioconductor-methinheritsim/tags`: https://quay.io/repository/biocontainers/bioconductor-methinheritsim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methinheritsim";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methinheritsim/README.html