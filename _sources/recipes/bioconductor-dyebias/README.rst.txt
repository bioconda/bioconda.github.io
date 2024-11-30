:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyebias'
.. highlight: bash

bioconductor-dyebias
====================

.. conda:recipe:: bioconductor-dyebias
   :replaces_section_title:
   :noindex:

   The GASSCO method for correcting for slide\-dependent gene\-specific dye bias

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/dyebias.html
   :license: GPL-3
   :recipe: /`bioconductor-dyebias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebias/meta.yaml>`_
   :links: biotools: :biotools:`dyebias`

   Many two\-colour hybridizations suffer from a dye bias that is both gene\-specific and slide\-specific. The former depends on the content of the nucleotide used for labeling\; the latter depends on the labeling percentage. The slide\-dependency was hitherto not recognized\, and made addressing the artefact impossible.  Given a reasonable number of dye\-swapped pairs of hybridizations\, or of same vs. same hybridizations\, both the gene\- and slide\-biases can be estimated and corrected using the GASSCO method \(Margaritis et al.\, Mol. Sys. Biol. 5\:266 \(2009\)\, doi\:10.1038\/msb.2009.21\)


.. conda:package:: bioconductor-dyebias

   |downloads_bioconductor-dyebias| |docker_bioconductor-dyebias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-dyebias

   and update with::

      mamba update bioconductor-dyebias

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dyebias

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyebias:<tag>

   (see `bioconductor-dyebias/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyebias| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyebias.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyebias
   :alt:   (downloads)
.. |docker_bioconductor-dyebias| image:: https://quay.io/repository/biocontainers/bioconductor-dyebias/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyebias
.. _`bioconductor-dyebias/tags`: https://quay.io/repository/biocontainers/bioconductor-dyebias?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dyebias";
        var versions = ["1.62.0","1.60.0","1.58.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyebias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyebias/README.html