:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maf2synteny'
.. highlight: bash

maf2synteny
===========

.. conda:recipe:: maf2synteny
   :replaces_section_title:
   :noindex:

   A tool that postprocesses whole genome alignment \(for two or more genomes\) and produces coarse\-grained synteny blocks.

   :homepage: https://github.com/fenderglass/maf2synteny
   :license: BSD / BSD
   :recipe: /`maf2synteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maf2synteny/meta.yaml>`_

   


.. conda:package:: maf2synteny

   |downloads_maf2synteny| |docker_maf2synteny|

   :versions:
      
      

      ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install maf2synteny

   and update with::

      mamba update maf2synteny

  To create a new environment, run::

      mamba create --name myenvname maf2synteny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maf2synteny:<tag>

   (see `maf2synteny/tags`_ for valid values for ``<tag>``)


.. |downloads_maf2synteny| image:: https://img.shields.io/conda/dn/bioconda/maf2synteny.svg?style=flat
   :target: https://anaconda.org/bioconda/maf2synteny
   :alt:   (downloads)
.. |docker_maf2synteny| image:: https://quay.io/repository/biocontainers/maf2synteny/status
   :target: https://quay.io/repository/biocontainers/maf2synteny
.. _`maf2synteny/tags`: https://quay.io/repository/biocontainers/maf2synteny?tab=tags


.. raw:: html

    <script>
        var package = "maf2synteny";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maf2synteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maf2synteny/README.html