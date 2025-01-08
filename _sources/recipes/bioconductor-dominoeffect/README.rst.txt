:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dominoeffect'
.. highlight: bash

bioconductor-dominoeffect
=========================

.. conda:recipe:: bioconductor-dominoeffect
   :replaces_section_title:
   :noindex:

   Identification and Annotation of Protein Hotspot Residues

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DominoEffect.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-dominoeffect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominoeffect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominoeffect/meta.yaml>`_

   The functions support identification and annotation of hotspot residues in proteins. These are individual amino acids that accumulate mutations at a much higher rate than their surrounding regions.


.. conda:package:: bioconductor-dominoeffect

   |downloads_bioconductor-dominoeffect| |docker_bioconductor-dominoeffect|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.1-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-dominoeffect

   and update with::

      mamba update bioconductor-dominoeffect

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dominoeffect

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dominoeffect:<tag>

   (see `bioconductor-dominoeffect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dominoeffect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dominoeffect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dominoeffect
   :alt:   (downloads)
.. |docker_bioconductor-dominoeffect| image:: https://quay.io/repository/biocontainers/bioconductor-dominoeffect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dominoeffect
.. _`bioconductor-dominoeffect/tags`: https://quay.io/repository/biocontainers/bioconductor-dominoeffect?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dominoeffect";
        var versions = ["1.26.0","1.22.0","1.20.1","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dominoeffect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dominoeffect/README.html