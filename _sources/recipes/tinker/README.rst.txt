:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinker'
.. highlight: bash

tinker
======

.. conda:recipe:: tinker
   :replaces_section_title:
   :noindex:

   The Tinker molecular modeling software is a complete and general package for molecular mechanics and dynamics\, with some special features for biopolymers

   :homepage: https://dasher.wustl.edu/tinker/
   :developer docs: https://github.com/TinkerTools/tinker
   :license: Custom
   :recipe: /`tinker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinker/meta.yaml>`_

   


.. conda:package:: tinker

   |downloads_tinker| |docker_tinker|

   :versions:
      
      

      ``8.11.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
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

      mamba install tinker

   and update with::

      mamba update tinker

  To create a new environment, run::

      mamba create --name myenvname tinker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tinker:<tag>

   (see `tinker/tags`_ for valid values for ``<tag>``)


.. |downloads_tinker| image:: https://img.shields.io/conda/dn/bioconda/tinker.svg?style=flat
   :target: https://anaconda.org/bioconda/tinker
   :alt:   (downloads)
.. |docker_tinker| image:: https://quay.io/repository/biocontainers/tinker/status
   :target: https://quay.io/repository/biocontainers/tinker
.. _`tinker/tags`: https://quay.io/repository/biocontainers/tinker?tab=tags


.. raw:: html

    <script>
        var package = "tinker";
        var versions = ["8.11.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinker/README.html