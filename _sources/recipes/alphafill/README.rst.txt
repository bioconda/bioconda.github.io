:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphafill'
.. highlight: bash

alphafill
=========

.. conda:recipe:: alphafill
   :replaces_section_title:
   :noindex:

   Transplant missing compounds to the AlphaFold models

   :homepage: https://alphafill.eu
   :documentation: https://alphafill.eu/manual
   
   :developer docs: https://github.com/PDB-REDO/alphafill
   :license: BSD / BSD-2-Clause
   :recipe: /`alphafill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafill/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01685-y`

   AlphaFill is an algorithm based on sequence and structure similarity that “transplants” missing ligands\, cofactors and \(metal\) ions to the AlphaFold models.
   By adding the molecular context to these protein structures\, the models can be more easily appreciated in terms of function and structural integrity.
   Consequently\, the AlphaFill models can be helpful in designing downstream wet\-lab experiments and\/or computational studies.



.. conda:package:: alphafill

   |downloads_alphafill| |docker_alphafill|

   :versions:
      
      

      ``2.2.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libboost: ``>=1.86.0,<1.87.0a0``
   :depends libcifpp: ``>=7.0.9,<8.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzeep: ``>=6.1.1,<7.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install alphafill

   and update with::

      mamba update alphafill

  To create a new environment, run::

      mamba create --name myenvname alphafill

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alphafill:<tag>

   (see `alphafill/tags`_ for valid values for ``<tag>``)


.. |downloads_alphafill| image:: https://img.shields.io/conda/dn/bioconda/alphafill.svg?style=flat
   :target: https://anaconda.org/bioconda/alphafill
   :alt:   (downloads)
.. |docker_alphafill| image:: https://quay.io/repository/biocontainers/alphafill/status
   :target: https://quay.io/repository/biocontainers/alphafill
.. _`alphafill/tags`: https://quay.io/repository/biocontainers/alphafill?tab=tags


.. raw:: html

    <script>
        var package = "alphafill";
        var versions = ["2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphafill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphafill/README.html