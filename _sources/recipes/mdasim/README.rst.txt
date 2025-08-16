:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mdasim'
.. highlight: bash

mdasim
======

.. conda:recipe:: mdasim
   :replaces_section_title:
   :noindex:

   This is MDAsim 2\+\, a tool to simulate whole genome amplification.

   :homepage: https://github.com/hzi-bifo/mdasim
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mdasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mdasim/meta.yaml>`_

   


.. conda:package:: mdasim

   |downloads_mdasim| |docker_mdasim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-7</code>,  <code>2.1.1-6</code>,  <code>2.1.1-5</code>,  <code>2.1.1-4</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  </span></summary>
      

      ``2.1.1-7``,  ``2.1.1-6``,  ``2.1.1-5``,  ``2.1.1-4``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mdasim

   and update with::

      mamba update mdasim

  To create a new environment, run::

      mamba create --name myenvname mdasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mdasim:<tag>

   (see `mdasim/tags`_ for valid values for ``<tag>``)


.. |downloads_mdasim| image:: https://img.shields.io/conda/dn/bioconda/mdasim.svg?style=flat
   :target: https://anaconda.org/bioconda/mdasim
   :alt:   (downloads)
.. |docker_mdasim| image:: https://quay.io/repository/biocontainers/mdasim/status
   :target: https://quay.io/repository/biocontainers/mdasim
.. _`mdasim/tags`: https://quay.io/repository/biocontainers/mdasim?tab=tags


.. raw:: html

    <script>
        var package = "mdasim";
        var versions = ["2.1.1","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mdasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mdasim/README.html