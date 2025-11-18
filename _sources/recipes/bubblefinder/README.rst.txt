:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bubblefinder'
.. highlight: bash

bubblefinder
============

.. conda:recipe:: bubblefinder
   :replaces_section_title:
   :noindex:

   BubbleFinder \- detecting superbubbles\/snarls in graphs

   :homepage: https://github.com/algbio/BubbleFinder
   :license: MIT
   :recipe: /`bubblefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bubblefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bubblefinder/meta.yaml>`_

   


.. conda:package:: bubblefinder

   |downloads_bubblefinder| |docker_bubblefinder|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends coin-or-cbc: ``>=2.10.12,<2.11.0a0``
   :depends coincbc: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install bubblefinder

   and update with::

      mamba update bubblefinder

  To create a new environment, run::

      mamba create --name myenvname bubblefinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bubblefinder:<tag>

   (see `bubblefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bubblefinder| image:: https://img.shields.io/conda/dn/bioconda/bubblefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bubblefinder
   :alt:   (downloads)
.. |docker_bubblefinder| image:: https://quay.io/repository/biocontainers/bubblefinder/status
   :target: https://quay.io/repository/biocontainers/bubblefinder
.. _`bubblefinder/tags`: https://quay.io/repository/biocontainers/bubblefinder?tab=tags


.. raw:: html

    <script>
        var package = "bubblefinder";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bubblefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bubblefinder/README.html