:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sharkmer'
.. highlight: bash

sharkmer
========

.. conda:recipe:: sharkmer
   :replaces_section_title:
   :noindex:

   Kmer counter and seeded de Bruijn graph assembler for in silico PCR and genome size estimation

   :homepage: https://github.com/caseywdunn/sharkmer
   :license: MIT
   :recipe: /`sharkmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharkmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sharkmer/meta.yaml>`_

   


.. conda:package:: sharkmer

   |downloads_sharkmer| |docker_sharkmer|

   :versions:
      
      

      ``1.0.1-0``

      

   
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

      mamba install sharkmer

   and update with::

      mamba update sharkmer

  To create a new environment, run::

      mamba create --name myenvname sharkmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sharkmer:<tag>

   (see `sharkmer/tags`_ for valid values for ``<tag>``)


.. |downloads_sharkmer| image:: https://img.shields.io/conda/dn/bioconda/sharkmer.svg?style=flat
   :target: https://anaconda.org/bioconda/sharkmer
   :alt:   (downloads)
.. |docker_sharkmer| image:: https://quay.io/repository/biocontainers/sharkmer/status
   :target: https://quay.io/repository/biocontainers/sharkmer
.. _`sharkmer/tags`: https://quay.io/repository/biocontainers/sharkmer?tab=tags


.. raw:: html

    <script>
        var package = "sharkmer";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sharkmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sharkmer/README.html