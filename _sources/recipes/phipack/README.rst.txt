:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phipack'
.. highlight: bash

phipack
=======

.. conda:recipe:: phipack
   :replaces_section_title:
   :noindex:

   Simple\, rapid\, and statistically efficient test for recombination.

   :homepage: https://www.maths.otago.ac.nz/~dbryant/software.html
   :license: GPL-3.0-or-later
   :recipe: /`phipack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phipack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phipack/meta.yaml>`_

   


.. conda:package:: phipack

   |downloads_phipack| |docker_phipack|

   :versions:
      
      

      ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install phipack

   and update with::

      mamba update phipack

  To create a new environment, run::

      mamba create --name myenvname phipack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phipack:<tag>

   (see `phipack/tags`_ for valid values for ``<tag>``)


.. |downloads_phipack| image:: https://img.shields.io/conda/dn/bioconda/phipack.svg?style=flat
   :target: https://anaconda.org/bioconda/phipack
   :alt:   (downloads)
.. |docker_phipack| image:: https://quay.io/repository/biocontainers/phipack/status
   :target: https://quay.io/repository/biocontainers/phipack
.. _`phipack/tags`: https://quay.io/repository/biocontainers/phipack?tab=tags


.. raw:: html

    <script>
        var package = "phipack";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phipack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phipack/README.html