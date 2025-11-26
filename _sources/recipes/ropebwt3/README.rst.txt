:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ropebwt3'
.. highlight: bash

ropebwt3
========

.. conda:recipe:: ropebwt3
   :replaces_section_title:
   :noindex:

   Constructs the FM\-index of a large DNA sequence set and searches for matches against the FM\-index.

   :homepage: https://github.com/lh3/ropebwt3
   :documentation: https://github.com/lh3/ropebwt3/blob/v3.10/README.md
   
   :license: MIT / MIT
   :recipe: /`ropebwt3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt3/meta.yaml>`_

   


.. conda:package:: ropebwt3

   |downloads_ropebwt3| |docker_ropebwt3|

   :versions:
      
      

      ``3.10-0``,  ``3.9-0``,  ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
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

      mamba install ropebwt3

   and update with::

      mamba update ropebwt3

  To create a new environment, run::

      mamba create --name myenvname ropebwt3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ropebwt3:<tag>

   (see `ropebwt3/tags`_ for valid values for ``<tag>``)


.. |downloads_ropebwt3| image:: https://img.shields.io/conda/dn/bioconda/ropebwt3.svg?style=flat
   :target: https://anaconda.org/bioconda/ropebwt3
   :alt:   (downloads)
.. |docker_ropebwt3| image:: https://quay.io/repository/biocontainers/ropebwt3/status
   :target: https://quay.io/repository/biocontainers/ropebwt3
.. _`ropebwt3/tags`: https://quay.io/repository/biocontainers/ropebwt3?tab=tags


.. raw:: html

    <script>
        var package = "ropebwt3";
        var versions = ["3.10","3.9","3.8","3.7","3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ropebwt3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ropebwt3/README.html