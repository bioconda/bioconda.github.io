:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-assessorf'
.. highlight: bash

bioconductor-assessorf
======================

.. conda:recipe:: bioconductor-assessorf
   :replaces_section_title:
   :noindex:

   Assess Gene Predictions Using Proteomics and Evolutionary Conservation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AssessORF.html
   :license: GPL-3
   :recipe: /`bioconductor-assessorf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assessorf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-assessorf/meta.yaml>`_

   In order to assess the quality of a set of predicted genes for a genome\, evidence must first be mapped to that genome. Next\, each gene must be categorized based on how strong the evidence is for or against that gene. The AssessORF package provides the functions and class structures necessary for accomplishing those tasks\, using proteomic hits and evolutionarily conserved start codons as the forms of evidence.


.. conda:package:: bioconductor-assessorf

   |downloads_bioconductor-assessorf| |docker_bioconductor-assessorf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-decipher: ``>=2.30.0,<2.31.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-assessorf

   and update with::

      mamba update bioconductor-assessorf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-assessorf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-assessorf:<tag>

   (see `bioconductor-assessorf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-assessorf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-assessorf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-assessorf
   :alt:   (downloads)
.. |docker_bioconductor-assessorf| image:: https://quay.io/repository/biocontainers/bioconductor-assessorf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-assessorf
.. _`bioconductor-assessorf/tags`: https://quay.io/repository/biocontainers/bioconductor-assessorf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-assessorf";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-assessorf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-assessorf/README.html