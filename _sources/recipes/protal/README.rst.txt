:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protal'
.. highlight: bash

protal
======

.. conda:recipe:: protal
   :replaces_section_title:
   :noindex:

   Reference\-based metagenomic analysis.

   :homepage: https://github.com/4less/protal
   :license: MIT / MIT
   :recipe: /`protal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protal/meta.yaml>`_

   Protal is a computational tool for taxonomic profiling and strain\-resolved analyses of bacterial communities from 
   metagenomic shotgun sequencing data \(short\-reads\). Following a reference\-based approach\, protal uses the same
   120 universal marker genes GTDB uses to build their phylogeny \(TIGRFAM\, PFAM\) and thus integrates well with other
   120 universal marker genes GTDB uses to build their phylogeny \(TIGRFAM\, PFAM\) and thus integrates well with other
   tools working in the GTDB taxonomy space.


.. conda:package:: protal

   |downloads_protal| |docker_protal|

   :versions:
      
      

      ``0.2.0a-0``,  ``0.1.0a-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pigz: 
   :depends python: ``>=3``
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

      mamba install protal

   and update with::

      mamba update protal

  To create a new environment, run::

      mamba create --name myenvname protal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/protal:<tag>

   (see `protal/tags`_ for valid values for ``<tag>``)


.. |downloads_protal| image:: https://img.shields.io/conda/dn/bioconda/protal.svg?style=flat
   :target: https://anaconda.org/bioconda/protal
   :alt:   (downloads)
.. |docker_protal| image:: https://quay.io/repository/biocontainers/protal/status
   :target: https://quay.io/repository/biocontainers/protal
.. _`protal/tags`: https://quay.io/repository/biocontainers/protal?tab=tags


.. raw:: html

    <script>
        var package = "protal";
        var versions = ["0.2.0a","0.1.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protal/README.html