:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipper'
.. highlight: bash

clipper
=======

.. conda:recipe:: clipper
   :replaces_section_title:
   :noindex:

   Crystallographic automation and complex data manipulation libraries.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL2 / GPL-2.0-only AND GPL-2.1-only
   :recipe: /`clipper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipper/meta.yaml>`_
   :links: doi: :doi:`10.1080/0889311031000069326`

   Clipper is an object oriented library for the storage and manipulation of X\-ray data
   and electron density maps\, and for the performance of all forms of crystallographic
   computations.



.. conda:package:: clipper

   |downloads_clipper| |docker_clipper|

   :versions:
      
      

      ``2.1.20180802-1``,  ``2.1.20180802-0``

      

   
   :depends libccp4: ``>=8.0.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends mmdb2: ``>=2.0.22,<3.0a0``
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

      mamba install clipper

   and update with::

      mamba update clipper

  To create a new environment, run::

      mamba create --name myenvname clipper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clipper:<tag>

   (see `clipper/tags`_ for valid values for ``<tag>``)


.. |downloads_clipper| image:: https://img.shields.io/conda/dn/bioconda/clipper.svg?style=flat
   :target: https://anaconda.org/bioconda/clipper
   :alt:   (downloads)
.. |docker_clipper| image:: https://quay.io/repository/biocontainers/clipper/status
   :target: https://quay.io/repository/biocontainers/clipper
.. _`clipper/tags`: https://quay.io/repository/biocontainers/clipper?tab=tags


.. raw:: html

    <script>
        var package = "clipper";
        var versions = ["2.1.20180802","2.1.20180802"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipper/README.html