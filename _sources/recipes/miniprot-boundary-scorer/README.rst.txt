:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miniprot-boundary-scorer'
.. highlight: bash

miniprot-boundary-scorer
========================

.. conda:recipe:: miniprot-boundary-scorer
   :replaces_section_title:
   :noindex:

   Miniprot boundary scorer parses introns\, starts\, stops and exons from miniprot\'s alignment output and scores them

   :homepage: https://github.com/tomasbruna/miniprot-boundary-scorer
   :license: Artistic-1.0
   :recipe: /`miniprot-boundary-scorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot-boundary-scorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miniprot-boundary-scorer/meta.yaml>`_

   


.. conda:package:: miniprot-boundary-scorer

   |downloads_miniprot-boundary-scorer| |docker_miniprot-boundary-scorer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install miniprot-boundary-scorer

   and update with::

      mamba update miniprot-boundary-scorer

  To create a new environment, run::

      mamba create --name myenvname miniprot-boundary-scorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/miniprot-boundary-scorer:<tag>

   (see `miniprot-boundary-scorer/tags`_ for valid values for ``<tag>``)


.. |downloads_miniprot-boundary-scorer| image:: https://img.shields.io/conda/dn/bioconda/miniprot-boundary-scorer.svg?style=flat
   :target: https://anaconda.org/bioconda/miniprot-boundary-scorer
   :alt:   (downloads)
.. |docker_miniprot-boundary-scorer| image:: https://quay.io/repository/biocontainers/miniprot-boundary-scorer/status
   :target: https://quay.io/repository/biocontainers/miniprot-boundary-scorer
.. _`miniprot-boundary-scorer/tags`: https://quay.io/repository/biocontainers/miniprot-boundary-scorer?tab=tags


.. raw:: html

    <script>
        var package = "miniprot-boundary-scorer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miniprot-boundary-scorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miniprot-boundary-scorer/README.html