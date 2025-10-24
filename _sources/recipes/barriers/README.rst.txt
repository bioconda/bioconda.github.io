:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barriers'
.. highlight: bash

barriers
========

.. conda:recipe:: barriers
   :replaces_section_title:
   :noindex:

   Compute local minima and energy barriers of a landscape.

   :homepage: https://www.tbi.univie.ac.at/RNA/Barriers
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers/meta.yaml>`_

   


.. conda:package:: barriers

   |downloads_barriers| |docker_barriers|

   :versions:
      
      

      ``1.8.1-4``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends viennarna: ``>=2.7.0,<2.8.0a0``
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

      mamba install barriers

   and update with::

      mamba update barriers

  To create a new environment, run::

      mamba create --name myenvname barriers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barriers:<tag>

   (see `barriers/tags`_ for valid values for ``<tag>``)


.. |downloads_barriers| image:: https://img.shields.io/conda/dn/bioconda/barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/barriers
   :alt:   (downloads)
.. |docker_barriers| image:: https://quay.io/repository/biocontainers/barriers/status
   :target: https://quay.io/repository/biocontainers/barriers
.. _`barriers/tags`: https://quay.io/repository/biocontainers/barriers?tab=tags


.. raw:: html

    <script>
        var package = "barriers";
        var versions = ["1.8.1","1.8.1","1.8.1","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barriers/README.html