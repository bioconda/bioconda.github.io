:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnasketch'
.. highlight: bash

rnasketch
=========

.. conda:recipe:: rnasketch
   :replaces_section_title:
   :noindex:

   RNAsketch Library for designing RNA molecules. Glue between RNAblueprint\/RNARedPrint and ViennaRNA\, Nupack\, Hotknots\, pKiss.

   :homepage: https://github.com/ViennaRNA/RNAsketch
   :license: GPL3
   :recipe: /`rnasketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnasketch/meta.yaml>`_

   


.. conda:package:: rnasketch

   |downloads_rnasketch| |docker_rnasketch|

   :versions:
      
      

      ``1.5-2``,  ``1.5-1``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends numpy: ``>=1.15*``
   :depends python: ``<3``
   :depends python-igraph: 
   :depends rnablueprint: ``>=1.2``
   :depends scipy: ``>=1.1*``
   :depends viennarna: ``>=2.4*``
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

      mamba install rnasketch

   and update with::

      mamba update rnasketch

  To create a new environment, run::

      mamba create --name myenvname rnasketch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnasketch:<tag>

   (see `rnasketch/tags`_ for valid values for ``<tag>``)


.. |downloads_rnasketch| image:: https://img.shields.io/conda/dn/bioconda/rnasketch.svg?style=flat
   :target: https://anaconda.org/bioconda/rnasketch
   :alt:   (downloads)
.. |docker_rnasketch| image:: https://quay.io/repository/biocontainers/rnasketch/status
   :target: https://quay.io/repository/biocontainers/rnasketch
.. _`rnasketch/tags`: https://quay.io/repository/biocontainers/rnasketch?tab=tags


.. raw:: html

    <script>
        var package = "rnasketch";
        var versions = ["1.5","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnasketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnasketch/README.html