:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sherpas'
.. highlight: bash

sherpas
=======

.. conda:recipe:: sherpas
   :replaces_section_title:
   :noindex:

   Screening Historical Events of Recombination in a Phylogeny via Ancestral Sequences.

   :homepage: https://github.com/phylo42/sherpas
   :license: MIT / MIT
   :recipe: /`sherpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.22.161422`

   A new\, alignment\-free genome recombination detection tool exploiting the idea of phylo\-kmers \(Linard et al. 2019\) to accelerate the process by several orders of magnitude while keeping comparable accuracy.


.. conda:package:: sherpas

   |downloads_sherpas| |docker_sherpas|

   :versions:
      
      

      ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends boost-cpp: 
   :depends libcxx: ``>=18``
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

      mamba install sherpas

   and update with::

      mamba update sherpas

  To create a new environment, run::

      mamba create --name myenvname sherpas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sherpas:<tag>

   (see `sherpas/tags`_ for valid values for ``<tag>``)


.. |downloads_sherpas| image:: https://img.shields.io/conda/dn/bioconda/sherpas.svg?style=flat
   :target: https://anaconda.org/bioconda/sherpas
   :alt:   (downloads)
.. |docker_sherpas| image:: https://quay.io/repository/biocontainers/sherpas/status
   :target: https://quay.io/repository/biocontainers/sherpas
.. _`sherpas/tags`: https://quay.io/repository/biocontainers/sherpas?tab=tags


.. raw:: html

    <script>
        var package = "sherpas";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sherpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sherpas/README.html