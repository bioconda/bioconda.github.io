:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lz-ani'
.. highlight: bash

lz-ani
======

.. conda:recipe:: lz-ani
   :replaces_section_title:
   :noindex:

   Fast and accurate tool for calculating Average Nucleotide Identity \(ANI\) among virus and bacteria genomes

   :homepage: https://github.com/refresh-bio/lz-ani
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lz-ani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz-ani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz-ani/meta.yaml>`_

   


.. conda:package:: lz-ani

   |downloads_lz-ani| |docker_lz-ani|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.0-0``

      

   
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

      mamba install lz-ani

   and update with::

      mamba update lz-ani

  To create a new environment, run::

      mamba create --name myenvname lz-ani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lz-ani:<tag>

   (see `lz-ani/tags`_ for valid values for ``<tag>``)


.. |downloads_lz-ani| image:: https://img.shields.io/conda/dn/bioconda/lz-ani.svg?style=flat
   :target: https://anaconda.org/bioconda/lz-ani
   :alt:   (downloads)
.. |docker_lz-ani| image:: https://quay.io/repository/biocontainers/lz-ani/status
   :target: https://quay.io/repository/biocontainers/lz-ani
.. _`lz-ani/tags`: https://quay.io/repository/biocontainers/lz-ani?tab=tags


.. raw:: html

    <script>
        var package = "lz-ani";
        var versions = ["1.2.3","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lz-ani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lz-ani/README.html