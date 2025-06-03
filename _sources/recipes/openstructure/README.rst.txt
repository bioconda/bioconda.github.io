:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openstructure'
.. highlight: bash

openstructure
=============

.. conda:recipe:: openstructure
   :replaces_section_title:
   :noindex:

   Open\-Source Computational Structural Biology Framework

   :homepage: https://openstructure.org
   :documentation: https://openstructure.org/docs
   
   :developer docs: https://git.scicore.unibas.ch/schwede/openstructure
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`openstructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openstructure/meta.yaml>`_
   :links: biotools: :biotools:`openstructure`, doi: :doi:`10.1107/S0907444913007051`

   This project aims to provide an open\-source\, modular\, flexible\, molecular modelling and visualization environment.
   It is targeted at interested method developers in the field of structural bioinformatics.



.. conda:package:: openstructure

   |downloads_openstructure| |docker_openstructure|

   :versions:
      
      

      ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.9.3-0``

      

   
   :depends clustalw: 
   :depends fftw: ``>=3.3.10,<4.0a0``
   :depends glew: ``>=2.1.0,<2.2.0a0``
   :depends glfw: ``>=3.4,<4.0a0``
   :depends libboost: ``>=1.86.0,<1.87.0a0``
   :depends libboost-python: ``>=1.86.0,<1.87.0a0``
   :depends libegl: ``>=1.7.0,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libgl: ``>=1.7.0,<2.0a0``
   :depends libgles: ``>=1.7.0,<2.0a0``
   :depends libglx: ``>=1.7.0,<2.0a0``
   :depends libpng: ``>=1.6.47,<1.7.0a0``
   :depends libsqlite: ``>=3.50.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libtiff: ``>=4.7.0,<4.8.0a0``
   :depends libxcb: ``>=1.17.0,<2.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mesalib: ``>=25.0.5,<25.1.0a0``
   :depends networkx: ``>=2.8.8,<3.0a0``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends ocl-icd: ``>=2.3.3,<3.0a0``
   :depends openmm: ``>=8.2.0,<9.0a0``
   :depends pandas: ``>=2.2.3,<3.0a0``
   :depends parasail: ``>=2.6.2,<3.0a0``
   :depends pyqt: ``>=5.15.9,<5.16.0a0``
   :depends python: ``>=3.10,<3.11.0a0 *_cpython``
   :depends python_abi: ``3.10.* *_cp310``
   :depends qt: ``>=5.15.8,<5.16.0a0``
   :depends scipy: ``>=1.15.2,<2.0a0``
   :depends voronota: ``>=1.29.4370,<2.0a0``
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

      mamba install openstructure

   and update with::

      mamba update openstructure

  To create a new environment, run::

      mamba create --name myenvname openstructure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openstructure:<tag>

   (see `openstructure/tags`_ for valid values for ``<tag>``)


.. |downloads_openstructure| image:: https://img.shields.io/conda/dn/bioconda/openstructure.svg?style=flat
   :target: https://anaconda.org/bioconda/openstructure
   :alt:   (downloads)
.. |docker_openstructure| image:: https://quay.io/repository/biocontainers/openstructure/status
   :target: https://quay.io/repository/biocontainers/openstructure
.. _`openstructure/tags`: https://quay.io/repository/biocontainers/openstructure?tab=tags


.. raw:: html

    <script>
        var package = "openstructure";
        var versions = ["2.10.0","2.10.0","2.10.0","2.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openstructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openstructure/README.html