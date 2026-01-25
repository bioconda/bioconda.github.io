:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sshash'
.. highlight: bash

sshash
======

.. conda:recipe:: sshash
   :replaces_section_title:
   :noindex:

   SSHash is a compressed dictionary data structure for k\-mers \(strings of length k over the DNA alphabet \{A\,C\,G\,T\}\)\, based on Sparse and Skew Hashing.

   :homepage: https://github.com/jermp/sshash
   :license: MIT
   :recipe: /`sshash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sshash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sshash/meta.yaml>`_

   


.. conda:package:: sshash

   |downloads_sshash| |docker_sshash|

   :versions:
      
      

      ``5.0.0-0``,  ``4.0.0-0``,  ``4.0.0_test_bioconda-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install sshash

   and update with::

      mamba update sshash

  To create a new environment, run::

      mamba create --name myenvname sshash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sshash:<tag>

   (see `sshash/tags`_ for valid values for ``<tag>``)


.. |downloads_sshash| image:: https://img.shields.io/conda/dn/bioconda/sshash.svg?style=flat
   :target: https://anaconda.org/bioconda/sshash
   :alt:   (downloads)
.. |docker_sshash| image:: https://quay.io/repository/biocontainers/sshash/status
   :target: https://quay.io/repository/biocontainers/sshash
.. _`sshash/tags`: https://quay.io/repository/biocontainers/sshash?tab=tags


.. raw:: html

    <script>
        var package = "sshash";
        var versions = ["5.0.0","4.0.0","4.0.0_test_bioconda"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sshash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sshash/README.html