:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barbell'
.. highlight: bash

barbell
=======

.. conda:recipe:: barbell
   :replaces_section_title:
   :noindex:

   Extremely fast and accurate Nanopore demultiplexing

   :homepage: https://github.com/rickbeeloo/barbell
   :license: MIT
   :recipe: /`barbell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barbell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barbell/meta.yaml>`_

   


.. conda:package:: barbell

   |downloads_barbell| |docker_barbell|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``

      

   
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

      mamba install barbell

   and update with::

      mamba update barbell

  To create a new environment, run::

      mamba create --name myenvname barbell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barbell:<tag>

   (see `barbell/tags`_ for valid values for ``<tag>``)


.. |downloads_barbell| image:: https://img.shields.io/conda/dn/bioconda/barbell.svg?style=flat
   :target: https://anaconda.org/bioconda/barbell
   :alt:   (downloads)
.. |docker_barbell| image:: https://quay.io/repository/biocontainers/barbell/status
   :target: https://quay.io/repository/biocontainers/barbell
.. _`barbell/tags`: https://quay.io/repository/biocontainers/barbell?tab=tags


.. raw:: html

    <script>
        var package = "barbell";
        var versions = ["0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barbell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barbell/README.html