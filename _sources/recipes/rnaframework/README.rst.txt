:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaframework'
.. highlight: bash

rnaframework
============

.. conda:recipe:: rnaframework
   :replaces_section_title:
   :noindex:

   Toolkit for the analysis of RNA structures and post\-transcriptional modifications from HTS data

   :homepage: https://github.com/dincarnato/RNAFramework
   :documentation: https://rnaframework-docs.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rnaframework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaframework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaframework/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky486`

   RNA Framework is a modular toolkit designed to handle RNA structure probing
   and post\-transcriptional modifications mapping from high\-throughput sequencing
   data. It supports transcriptome\-scale analysis of RNA secondary structure using
   protocols such as CIRS\-seq\, SHAPE\-seq\, Structure\-seq\, DMS\-seq\, PARS\,
   SHAPE\-MaP\, and DMS\-MaPseq\, as well as mapping of post\-transcriptional
   modifications \(Ψ\, m1A\, m6A\, m5C\, hm5C\, 2\'\-OMe\).

   Key features\:
     \- Automatic reference transcriptome creation \(rf\-index\)
     \- Read preprocessing\, adapter trimming\, and mapping \(rf\-map\)
     \- Per\-base RT\-stop\/mutation counting and coverage \(rf\-count\)
     \- Reactivity scoring and whole\-transcriptome normalization \(rf\-norm\)
     \- RNA secondary structure prediction with probing data \(rf\-fold\)
     \- RNA\-RNA interaction mapping \(rf\-duplex\)
     \- Post\-transcriptional modification calling \(rf\-modcall\)
     \- Peak calling for RNA immunoprecipitation data \(rf\-peakcall\)



.. conda:package:: rnaframework

   |downloads_rnaframework| |docker_rnaframework|

   :versions:
      
      

      

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rnaframework

   and update with::

      mamba update rnaframework

  To create a new environment, run::

      mamba create --name myenvname rnaframework

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaframework:<tag>

   (see `rnaframework/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaframework| image:: https://img.shields.io/conda/dn/bioconda/rnaframework.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaframework
   :alt:   (downloads)
.. |docker_rnaframework| image:: https://quay.io/repository/biocontainers/rnaframework/status
   :target: https://quay.io/repository/biocontainers/rnaframework
.. _`rnaframework/tags`: https://quay.io/repository/biocontainers/rnaframework?tab=tags


.. raw:: html

    <script>
        var package = "rnaframework";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaframework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaframework/README.html