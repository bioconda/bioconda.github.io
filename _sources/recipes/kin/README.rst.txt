:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kin'
.. highlight: bash

kin
===

.. conda:recipe:: kin
   :replaces_section_title:
   :noindex:

   A tool to estimate pairwise relatedness from ancient DNA\, taking in account contamination\, ROH\, ascertainment bias.

   :homepage: https://github.com/DivyaratanPopli/Kinship_Inference
   :documentation: https://github.com/DivyaratanPopli/Kinship_Inference/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`kin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kin/meta.yaml>`_

   


.. conda:package:: kin

   |downloads_kin| |docker_kin|

   :versions:
      
      

      ``3.1.4-0``

      

   
   :depends bcftools: ``>=1.15``
   :depends numba: ``>=0.55.1``
   :depends numpy: ``>=1.21.1``
   :depends pandas: ``>=1.3.1``
   :depends pybedtools: ``>=0.9.0``
   :depends pysam: ``>=0.19.0``
   :depends python: ``3.8.*``
   :depends samtools: ``>=1.15``
   :depends scipy: ``>=1.8.0``
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

      mamba install kin

   and update with::

      mamba update kin

  To create a new environment, run::

      mamba create --name myenvname kin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kin:<tag>

   (see `kin/tags`_ for valid values for ``<tag>``)


.. |downloads_kin| image:: https://img.shields.io/conda/dn/bioconda/kin.svg?style=flat
   :target: https://anaconda.org/bioconda/kin
   :alt:   (downloads)
.. |docker_kin| image:: https://quay.io/repository/biocontainers/kin/status
   :target: https://quay.io/repository/biocontainers/kin
.. _`kin/tags`: https://quay.io/repository/biocontainers/kin?tab=tags


.. raw:: html

    <script>
        var package = "kin";
        var versions = ["3.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kin/README.html