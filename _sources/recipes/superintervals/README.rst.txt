:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superintervals'
.. highlight: bash

superintervals
==============

.. conda:recipe:: superintervals
   :replaces_section_title:
   :noindex:

   Rapid interval intersections

   :homepage: https://github.com/kcleal/superintervals
   :license: MIT
   :recipe: /`superintervals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superintervals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superintervals/meta.yaml>`_

   


.. conda:package:: superintervals

   |downloads_superintervals| |docker_superintervals|

   :versions:
      
      

      ``0.2.10-1``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.7-0``,  ``0.2.5-0``,  ``0.2.3-0``

      

   
   :depends cython: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install superintervals

   and update with::

      mamba update superintervals

  To create a new environment, run::

      mamba create --name myenvname superintervals

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/superintervals:<tag>

   (see `superintervals/tags`_ for valid values for ``<tag>``)


.. |downloads_superintervals| image:: https://img.shields.io/conda/dn/bioconda/superintervals.svg?style=flat
   :target: https://anaconda.org/bioconda/superintervals
   :alt:   (downloads)
.. |docker_superintervals| image:: https://quay.io/repository/biocontainers/superintervals/status
   :target: https://quay.io/repository/biocontainers/superintervals
.. _`superintervals/tags`: https://quay.io/repository/biocontainers/superintervals?tab=tags


.. raw:: html

    <script>
        var package = "superintervals";
        var versions = ["0.2.10","0.2.10","0.2.9","0.2.7","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superintervals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superintervals/README.html