:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rvs'
.. highlight: bash

bioconductor-rvs
================

.. conda:recipe:: bioconductor-rvs
   :replaces_section_title:
   :noindex:

   Computes estimates of the probability of related individuals sharing a rare variant

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RVS.html
   :license: GPL-2
   :recipe: /`bioconductor-rvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs/meta.yaml>`_

   Rare Variant Sharing \(RVS\) implements tests of association and linkage between rare genetic variant genotypes and a dichotomous phenotype\, e.g. a disease status\, in family samples. The tests are based on probabilities of rare variant sharing by relatives under the null hypothesis of absence of linkage and association between the rare variants and the phenotype and apply to single variants or multiple variants in a region \(e.g. gene\-based test\).


.. conda:package:: bioconductor-rvs

   |downloads_bioconductor-rvs| |docker_bioconductor-rvs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-snpstats: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-genlib: 
   :depends r-grain: 
   :depends r-kinship2: 
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

      mamba install bioconductor-rvs

   and update with::

      mamba update bioconductor-rvs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rvs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rvs:<tag>

   (see `bioconductor-rvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rvs
   :alt:   (downloads)
.. |docker_bioconductor-rvs| image:: https://quay.io/repository/biocontainers/bioconductor-rvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rvs
.. _`bioconductor-rvs/tags`: https://quay.io/repository/biocontainers/bioconductor-rvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rvs";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rvs/README.html