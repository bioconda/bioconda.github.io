:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coot-headless'
.. highlight: bash

coot-headless
=============

.. conda:recipe:: coot-headless
   :replaces_section_title:
   :noindex:

   Coot Headless API \- Software for macromolecular model building.

   :homepage: https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot
   :documentation: https://www.mrc-lmb.cam.ac.uk/lucrezia/libcootapi-documentation/index.html
   
   :developer docs: https://github.com/pemsley/coot
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`coot-headless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coot-headless/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444910007493`

   Coot is a macromolecular model building\, model completion and validation
   application. This package provides the headless APIs \(Chapi python bindings and libcootapi C\+\+ library\)
   without GUI dependencies\, suitable for automated workflows.



.. conda:package:: coot-headless

   |downloads_coot-headless| |docker_coot-headless|

   :versions:
      
      

      ``1.1.18-3``,  ``1.1.18-2``,  ``1.1.18-1``,  ``1.1.18-0``,  ``1.1.17-3``,  ``1.1.17-2``,  ``1.1.17-1``,  ``1.1.17-0``

      

   
   :depends cairo: ``>=1.18.4,<2.0a0``
   :depends clipper: ``>=2.1.20180802,<3.0a0``
   :depends curl: 
   :depends elfutils: ``>=0.191,<0.192.0a0``
   :depends fontconfig: ``>=2.15.0,<3.0a0``
   :depends fonts-conda-ecosystem: 
   :depends gemmi: ``>=0.7.3,<1.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libboost: ``>=1.86.0,<1.87.0a0``
   :depends libccp4: ``>=8.0.0,<9.0a0``
   :depends libffi: ``>=3.4.6,<3.5.0a0``
   :depends libfreetype: ``>=2.14.1``
   :depends libfreetype6: ``>=2.14.1``
   :depends libgcc: ``>=13``
   :depends libopenblas: 
   :depends libpng: ``>=1.6.50,<1.7.0a0``
   :depends librdkit-dev: ``>=2024.9.5,<2025.0a0``
   :depends libsqlite: ``>=3.50.4,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libxml2: ``>=2.13.8,<2.14.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mmdb2: ``>=2.0.22,<3.0a0``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends pixman: ``>=0.46.4,<1.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rdkit: ``>=2024.9.5,<2025.0a0``
   :depends ssm: ``>=1.4,<2.0a0``
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

      mamba install coot-headless

   and update with::

      mamba update coot-headless

  To create a new environment, run::

      mamba create --name myenvname coot-headless

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coot-headless:<tag>

   (see `coot-headless/tags`_ for valid values for ``<tag>``)


.. |downloads_coot-headless| image:: https://img.shields.io/conda/dn/bioconda/coot-headless.svg?style=flat
   :target: https://anaconda.org/bioconda/coot-headless
   :alt:   (downloads)
.. |docker_coot-headless| image:: https://quay.io/repository/biocontainers/coot-headless/status
   :target: https://quay.io/repository/biocontainers/coot-headless
.. _`coot-headless/tags`: https://quay.io/repository/biocontainers/coot-headless?tab=tags


.. raw:: html

    <script>
        var package = "coot-headless";
        var versions = ["1.1.18","1.1.18","1.1.18","1.1.18","1.1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coot-headless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coot-headless/README.html