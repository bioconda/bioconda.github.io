:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'busco_phylogenomics'
.. highlight: bash

busco_phylogenomics
===================

.. conda:recipe:: busco_phylogenomics
   :replaces_section_title:
   :noindex:

   Utility script to construct species phylogenies using BUSCO proteins.

   :homepage: https://github.com/jamiemcg/BUSCO_phylogenomics
   :license: MIT / MIT
   :recipe: /`busco_phylogenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco_phylogenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco_phylogenomics/meta.yaml>`_

   


.. conda:package:: busco_phylogenomics

   |downloads_busco_phylogenomics| |docker_busco_phylogenomics|

   :versions:
      
      

      ``20240919-0``

      

   
   :depends biopython: 
   :depends fasttree: 
   :depends iqtree: 
   :depends muscle: ``>=5.1``
   :depends python: ``>=3.8``
   :depends trimal: 
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

      mamba install busco_phylogenomics

   and update with::

      mamba update busco_phylogenomics

  To create a new environment, run::

      mamba create --name myenvname busco_phylogenomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/busco_phylogenomics:<tag>

   (see `busco_phylogenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_busco_phylogenomics| image:: https://img.shields.io/conda/dn/bioconda/busco_phylogenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/busco_phylogenomics
   :alt:   (downloads)
.. |docker_busco_phylogenomics| image:: https://quay.io/repository/biocontainers/busco_phylogenomics/status
   :target: https://quay.io/repository/biocontainers/busco_phylogenomics
.. _`busco_phylogenomics/tags`: https://quay.io/repository/biocontainers/busco_phylogenomics?tab=tags


.. raw:: html

    <script>
        var package = "busco_phylogenomics";
        var versions = ["20240919"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/busco_phylogenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/busco_phylogenomics/README.html