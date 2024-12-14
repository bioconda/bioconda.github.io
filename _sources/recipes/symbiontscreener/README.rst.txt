:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'symbiontscreener'
.. highlight: bash

symbiontscreener
================

.. conda:recipe:: symbiontscreener
   :replaces_section_title:
   :noindex:

   Symbiont\-Screener is a reference\-free approach to identifying high\-confidence host\'s long reads from symbionts and contaminants and overcoming the low sequencing accuracy according to a trio\-based screening model.

   :homepage: https://github.com/BGI-Qingdao/Symbiont-Screener
   :license: GPL-3.0-only
   :recipe: /`symbiontscreener <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/symbiontscreener>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/symbiontscreener/meta.yaml>`_

   


.. conda:package:: symbiontscreener

   |downloads_symbiontscreener| |docker_symbiontscreener|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends kmer-jellyfish: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends meryl: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends seqkit: 
   :depends zlib: 
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

      mamba install symbiontscreener

   and update with::

      mamba update symbiontscreener

  To create a new environment, run::

      mamba create --name myenvname symbiontscreener

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/symbiontscreener:<tag>

   (see `symbiontscreener/tags`_ for valid values for ``<tag>``)


.. |downloads_symbiontscreener| image:: https://img.shields.io/conda/dn/bioconda/symbiontscreener.svg?style=flat
   :target: https://anaconda.org/bioconda/symbiontscreener
   :alt:   (downloads)
.. |docker_symbiontscreener| image:: https://quay.io/repository/biocontainers/symbiontscreener/status
   :target: https://quay.io/repository/biocontainers/symbiontscreener
.. _`symbiontscreener/tags`: https://quay.io/repository/biocontainers/symbiontscreener?tab=tags


.. raw:: html

    <script>
        var package = "symbiontscreener";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/symbiontscreener/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/symbiontscreener/README.html