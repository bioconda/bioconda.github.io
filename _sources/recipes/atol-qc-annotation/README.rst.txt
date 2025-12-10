:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-qc-annotation'
.. highlight: bash

atol-qc-annotation
==================

.. conda:recipe:: atol-qc-annotation
   :replaces_section_title:
   :noindex:

   Run QC on GTF and GFF files.

   :homepage: https://github.com/TomHarrop/atol-qc-annotation
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-qc-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-annotation/meta.yaml>`_

   


.. conda:package:: atol-qc-annotation

   |downloads_atol-qc-annotation| |docker_atol-qc-annotation|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends agat: ``>=1.5.1``
   :depends bbmap: ``>=39.52``
   :depends busco: ``>=5.8.3,<6``
   :depends omark: ``>=0.3.1``
   :depends pytables: ``>=3.10.2``
   :depends python: ``>=3.12,<3.13``
   :depends snakemake: ``>=9.11.6,<10``
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

      mamba install atol-qc-annotation

   and update with::

      mamba update atol-qc-annotation

  To create a new environment, run::

      mamba create --name myenvname atol-qc-annotation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atol-qc-annotation:<tag>

   (see `atol-qc-annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_atol-qc-annotation| image:: https://img.shields.io/conda/dn/bioconda/atol-qc-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-qc-annotation
   :alt:   (downloads)
.. |docker_atol-qc-annotation| image:: https://quay.io/repository/biocontainers/atol-qc-annotation/status
   :target: https://quay.io/repository/biocontainers/atol-qc-annotation
.. _`atol-qc-annotation/tags`: https://quay.io/repository/biocontainers/atol-qc-annotation?tab=tags


.. raw:: html

    <script>
        var package = "atol-qc-annotation";
        var versions = ["0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-qc-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-qc-annotation/README.html