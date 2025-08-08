:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconsplitter'
.. highlight: bash

ampliconsplitter
================

.. conda:recipe:: ampliconsplitter
   :replaces_section_title:
   :noindex:

   Split highly similar collapsed amplicons to obtain all amplicons from a sample.

   :homepage: https://github.com/RolandFaure/AmpliconSplitter
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ampliconsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsplitter/meta.yaml>`_

   


.. conda:package:: ampliconsplitter

   |downloads_ampliconsplitter| |docker_ampliconsplitter|

   :versions:
      
      

      ``1.9.22-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends minigraph: ``>=0.20``
   :depends minimap2: 
   :depends numpy: 
   :depends python: 
   :depends racon: 
   :depends raven-assembler: 
   :depends samtools: ``>=1.16``
   :depends scipy: 
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

      mamba install ampliconsplitter

   and update with::

      mamba update ampliconsplitter

  To create a new environment, run::

      mamba create --name myenvname ampliconsplitter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ampliconsplitter:<tag>

   (see `ampliconsplitter/tags`_ for valid values for ``<tag>``)


.. |downloads_ampliconsplitter| image:: https://img.shields.io/conda/dn/bioconda/ampliconsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconsplitter
   :alt:   (downloads)
.. |docker_ampliconsplitter| image:: https://quay.io/repository/biocontainers/ampliconsplitter/status
   :target: https://quay.io/repository/biocontainers/ampliconsplitter
.. _`ampliconsplitter/tags`: https://quay.io/repository/biocontainers/ampliconsplitter?tab=tags


.. raw:: html

    <script>
        var package = "ampliconsplitter";
        var versions = ["1.9.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconsplitter/README.html