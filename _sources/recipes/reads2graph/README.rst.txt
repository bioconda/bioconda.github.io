:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reads2graph'
.. highlight: bash

reads2graph
===========

.. conda:recipe:: reads2graph
   :replaces_section_title:
   :noindex:

   reads2graph is an efficient tool for constructing edit\-distance\-based read graph from short\-read sequencing data.

   :homepage: https://github.com/Jappy0/reads2graph
   :license: BSD / BSD-3-Clause
   :recipe: /`reads2graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reads2graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reads2graph/meta.yaml>`_
   :links: biotools: :biotools:`reads2graph`

   


.. conda:package:: reads2graph

   |downloads_reads2graph| |docker_reads2graph|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends boost: ``>=1.82.0,<1.82.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmp: ``8.0.1``
   :depends seqan3: ``3.3.0``
   :depends seqan3: ``>=3.3.0,<4.0a0``
   :depends sharg: ``1.1.1``
   :depends sharg: ``>=1.1.1,<2.0a0``
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

      mamba install reads2graph

   and update with::

      mamba update reads2graph

  To create a new environment, run::

      mamba create --name myenvname reads2graph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/reads2graph:<tag>

   (see `reads2graph/tags`_ for valid values for ``<tag>``)


.. |downloads_reads2graph| image:: https://img.shields.io/conda/dn/bioconda/reads2graph.svg?style=flat
   :target: https://anaconda.org/bioconda/reads2graph
   :alt:   (downloads)
.. |docker_reads2graph| image:: https://quay.io/repository/biocontainers/reads2graph/status
   :target: https://quay.io/repository/biocontainers/reads2graph
.. _`reads2graph/tags`: https://quay.io/repository/biocontainers/reads2graph?tab=tags


.. raw:: html

    <script>
        var package = "reads2graph";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reads2graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reads2graph/README.html