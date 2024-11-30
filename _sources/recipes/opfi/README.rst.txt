:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opfi'
.. highlight: bash

opfi
====

.. conda:recipe:: opfi
   :replaces_section_title:
   :noindex:

   A package for discovery\, annotation\, and analysis of gene clusters in genomics or metagenomics datasets.

   :homepage: https://github.com/wilkelab/Opfi
   :license: MIT / MIT
   :recipe: /`opfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opfi/meta.yaml>`_

   


.. conda:package:: opfi

   |downloads_opfi| |docker_opfi|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.9.0``
   :depends diamond: ``>=0.9.24``
   :depends dna_features_viewer: ``>=3.0.1``
   :depends genericrepeatfinder: ``>=1.0``
   :depends hypothesis: ``>=5.1.1``
   :depends matplotlib-base: ``>=3.2.1``
   :depends mmseqs2: ``>=13.45111``
   :depends more-itertools: ``>=8.4.0``
   :depends parasail-python: ``>=1.2``
   :depends piler-cr: ``>=1.06``
   :depends pytest: ``>=5.3.2``
   :depends python: ``>=3.7``
   :depends pyyaml: ``>=5.4``
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

      mamba install opfi

   and update with::

      mamba update opfi

  To create a new environment, run::

      mamba create --name myenvname opfi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opfi:<tag>

   (see `opfi/tags`_ for valid values for ``<tag>``)


.. |downloads_opfi| image:: https://img.shields.io/conda/dn/bioconda/opfi.svg?style=flat
   :target: https://anaconda.org/bioconda/opfi
   :alt:   (downloads)
.. |docker_opfi| image:: https://quay.io/repository/biocontainers/opfi/status
   :target: https://quay.io/repository/biocontainers/opfi
.. _`opfi/tags`: https://quay.io/repository/biocontainers/opfi?tab=tags


.. raw:: html

    <script>
        var package = "opfi";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opfi/README.html