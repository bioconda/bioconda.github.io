:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdp'
.. highlight: bash

bioconductor-mdp
================

.. conda:recipe:: bioconductor-mdp
   :replaces_section_title:
   :noindex:

   Molecular Degree of Perturbation calculates scores for transcriptome data samples based on their perturbation from controls

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/mdp.html
   :license: GPL-3
   :recipe: /`bioconductor-mdp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp/meta.yaml>`_

   The Molecular Degree of Perturbation webtool quantifies the heterogeneity of samples. It takes a data.frame of omic data that contains at least two classes \(control and test\) and assigns a score to all samples based on how perturbed they are compared to the controls. It is based on the Molecular Distance to Health \(Pankla et al. 2009\)\, and expands on this algorithm by adding the options to calculate the z\-score using the modified z\-score \(using median absolute deviation\)\, change the z\-score zeroing threshold\, and look at genes that are most perturbed in the test versus control classes.


.. conda:package:: bioconductor-mdp

   |downloads_bioconductor-mdp| |docker_bioconductor-mdp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mdp

   and update with::

      mamba update bioconductor-mdp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mdp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mdp:<tag>

   (see `bioconductor-mdp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mdp
   :alt:   (downloads)
.. |docker_bioconductor-mdp| image:: https://quay.io/repository/biocontainers/bioconductor-mdp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdp
.. _`bioconductor-mdp/tags`: https://quay.io/repository/biocontainers/bioconductor-mdp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mdp";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdp/README.html