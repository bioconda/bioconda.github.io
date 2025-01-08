:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylinheritance'
.. highlight: bash

bioconductor-methylinheritance
==============================

.. conda:recipe:: bioconductor-methylinheritance
   :replaces_section_title:
   :noindex:

   Permutation\-Based Analysis associating Conserved Differentially Methylated Elements Across Multiple Generations to a Treatment Effect

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/methylInheritance.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-methylinheritance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylinheritance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylinheritance/meta.yaml>`_

   Permutation analysis\, based on Monte Carlo sampling\, for testing the hypothesis that the number of conserved differentially methylated elements\, between several generations\, is associated to an effect inherited from a treatment and that stochastic effect can be dismissed.


.. conda:package:: bioconductor-methylinheritance

   |downloads_bioconductor-methylinheritance| |docker_bioconductor-methylinheritance|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-methylkit: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-rebus: 
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

      mamba install bioconductor-methylinheritance

   and update with::

      mamba update bioconductor-methylinheritance

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylinheritance

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylinheritance:<tag>

   (see `bioconductor-methylinheritance/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylinheritance| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylinheritance.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylinheritance
   :alt:   (downloads)
.. |docker_bioconductor-methylinheritance| image:: https://quay.io/repository/biocontainers/bioconductor-methylinheritance/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylinheritance
.. _`bioconductor-methylinheritance/tags`: https://quay.io/repository/biocontainers/bioconductor-methylinheritance?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylinheritance";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylinheritance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylinheritance/README.html