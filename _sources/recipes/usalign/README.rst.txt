:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usalign'
.. highlight: bash

usalign
=======

.. conda:recipe:: usalign
   :replaces_section_title:
   :noindex:

   Universal structure alignment of monomeric\, complex proteins and nucleic acids

   :homepage: https://zhanggroup.org/US-align
   :documentation: https://zhanggroup.org/US-align/help
   
   :developer docs: https://github.com/pylelab/USalign
   :license: OTHER / UNKNOWN
   :recipe: /`usalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usalign/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01585-1`

   US\-align \(Universal Structural alignment\) is a unified protocol
   to compare 3D structures of different macromolecules \(proteins\, RNAs and DNAs\)
   in different forms \(monomers\, oligomers and heterocomplexes\)
   for both pairwise and multiple structure alignments.
   The core alogrithm of US\-align is extended from TM\-align and generates optimal structural alignments
   by maximizing TM\-score of compared strucures through heuristic dynamic programming iterations.
   Large\-scale benchmark tests showed that US\-align can generate more accurate structural alignments
   with significantly reduced CPU time\, compared to the state\-of\-the\-art methods developed
   for specific structural alignment tasks.
   TM\-score has values in \(0\,1\] with 1 indicating an identical structure match\,
   where a TM\-score ≥0.5 \(or 0.45\) means the structures share the same global topology for proteins \(or RNAs\).



.. conda:package:: usalign

   |downloads_usalign| |docker_usalign|

   :versions:
      
      

      ``20241201-0``,  ``2024.07.30-1``,  ``2024.07.30-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install usalign

   and update with::

      mamba update usalign

  To create a new environment, run::

      mamba create --name myenvname usalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/usalign:<tag>

   (see `usalign/tags`_ for valid values for ``<tag>``)


.. |downloads_usalign| image:: https://img.shields.io/conda/dn/bioconda/usalign.svg?style=flat
   :target: https://anaconda.org/bioconda/usalign
   :alt:   (downloads)
.. |docker_usalign| image:: https://quay.io/repository/biocontainers/usalign/status
   :target: https://quay.io/repository/biocontainers/usalign
.. _`usalign/tags`: https://quay.io/repository/biocontainers/usalign?tab=tags


.. raw:: html

    <script>
        var package = "usalign";
        var versions = ["20241201","2024.07.30","2024.07.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usalign/README.html