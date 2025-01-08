:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-assign'
.. highlight: bash

bioconductor-assign
===================

.. conda:recipe:: bioconductor-assign
   :replaces_section_title:
   :noindex:

   Adaptive Signature Selection and InteGratioN \(ASSIGN\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASSIGN.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-assign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assign/meta.yaml>`_

   ASSIGN is a computational tool to evaluate the pathway deregulation\/activation status in individual patient samples. ASSIGN employs a flexible Bayesian factor analysis approach that adapts predetermined pathway signatures derived either from knowledge\-based literature or from perturbation experiments to the cell\-\/tissue\-specific pathway signatures. The deregulation\/activation level of each context\-specific pathway is quantified to a score\, which represents the extent to which a patient sample encompasses the pathway deregulation\/activation signature.


.. conda:package:: bioconductor-assign

   |downloads_bioconductor-assign| |docker_bioconductor-assign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.1-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-msm: 
   :depends r-rlab: 
   :depends r-yaml: 
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

      mamba install bioconductor-assign

   and update with::

      mamba update bioconductor-assign

  To create a new environment, run::

      mamba create --name myenvname bioconductor-assign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-assign:<tag>

   (see `bioconductor-assign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-assign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-assign
   :alt:   (downloads)
.. |docker_bioconductor-assign| image:: https://quay.io/repository/biocontainers/bioconductor-assign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assign
.. _`bioconductor-assign/tags`: https://quay.io/repository/biocontainers/bioconductor-assign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-assign";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assign/README.html