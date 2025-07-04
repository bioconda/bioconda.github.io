:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ultra'
.. highlight: bash

ultra
=====

.. conda:recipe:: ultra
   :replaces_section_title:
   :noindex:

   ULTRA is a tool for finding and annotating tandem repeats within genomic sequence.

   :homepage: https://github.com/TravisWheelerLab/ULTRA
   :documentation: https://github.com/TravisWheelerLab/ULTRA/blob/1.1.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`ultra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ultra/meta.yaml>`_

   


.. conda:package:: ultra

   |downloads_ultra| |docker_ultra|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install ultra

   and update with::

      mamba update ultra

  To create a new environment, run::

      mamba create --name myenvname ultra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ultra:<tag>

   (see `ultra/tags`_ for valid values for ``<tag>``)


.. |downloads_ultra| image:: https://img.shields.io/conda/dn/bioconda/ultra.svg?style=flat
   :target: https://anaconda.org/bioconda/ultra
   :alt:   (downloads)
.. |docker_ultra| image:: https://quay.io/repository/biocontainers/ultra/status
   :target: https://quay.io/repository/biocontainers/ultra
.. _`ultra/tags`: https://quay.io/repository/biocontainers/ultra?tab=tags


.. raw:: html

    <script>
        var package = "ultra";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ultra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ultra/README.html