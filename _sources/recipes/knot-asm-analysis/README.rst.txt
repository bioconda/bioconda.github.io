:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knot-asm-analysis'
.. highlight: bash

knot-asm-analysis
=================

.. conda:recipe:: knot-asm-analysis
   :replaces_section_title:
   :noindex:

   KNOT\: Knowledge Network Overlap exTraction is a tool for the investigation of fragmented long read assemblies.

   :homepage: https://github.com/natir/knot
   :license: MIT / MIT
   :recipe: /`knot-asm-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot-asm-analysis/meta.yaml>`_

   


.. conda:package:: knot-asm-analysis

   |downloads_knot-asm-analysis| |docker_knot-asm-analysis|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends biopython: ``>=1.72``
   :depends fpa: ``>=0.5``
   :depends gfapy: ``>=1.0.0``
   :depends jinja2: ``>=2.10``
   :depends minimap2: 
   :depends networkx: ``>=2.2``
   :depends python: ``>=3``
   :depends snakemake: ``>=5.3``
   :depends yacrd: ``>=0.6``
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

      mamba install knot-asm-analysis

   and update with::

      mamba update knot-asm-analysis

  To create a new environment, run::

      mamba create --name myenvname knot-asm-analysis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/knot-asm-analysis:<tag>

   (see `knot-asm-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_knot-asm-analysis| image:: https://img.shields.io/conda/dn/bioconda/knot-asm-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/knot-asm-analysis
   :alt:   (downloads)
.. |docker_knot-asm-analysis| image:: https://quay.io/repository/biocontainers/knot-asm-analysis/status
   :target: https://quay.io/repository/biocontainers/knot-asm-analysis
.. _`knot-asm-analysis/tags`: https://quay.io/repository/biocontainers/knot-asm-analysis?tab=tags


.. raw:: html

    <script>
        var package = "knot-asm-analysis";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knot-asm-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knot-asm-analysis/README.html