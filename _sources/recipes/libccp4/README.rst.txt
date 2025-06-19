:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libccp4'
.. highlight: bash

libccp4
=======

.. conda:recipe:: libccp4
   :replaces_section_title:
   :noindex:

   Protein X\-ray crystallography toolkit.

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`libccp4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libccp4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libccp4/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444994003112`

   CCP4 library provides an interface to the Collaborative Computational
   Project Number 4 \(CCP4\) suite of programs.



.. conda:package:: libccp4

   |downloads_libccp4| |docker_libccp4|

   :versions:
      
      

      ``8.0.0-1``,  ``8.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libstdcxx: ``>=13``
   :depends mmdb2: ``>=2.0.22,<3.0a0``
   :depends pkg-config: 
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

      mamba install libccp4

   and update with::

      mamba update libccp4

  To create a new environment, run::

      mamba create --name myenvname libccp4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libccp4:<tag>

   (see `libccp4/tags`_ for valid values for ``<tag>``)


.. |downloads_libccp4| image:: https://img.shields.io/conda/dn/bioconda/libccp4.svg?style=flat
   :target: https://anaconda.org/bioconda/libccp4
   :alt:   (downloads)
.. |docker_libccp4| image:: https://quay.io/repository/biocontainers/libccp4/status
   :target: https://quay.io/repository/biocontainers/libccp4
.. _`libccp4/tags`: https://quay.io/repository/biocontainers/libccp4?tab=tags


.. raw:: html

    <script>
        var package = "libccp4";
        var versions = ["8.0.0","8.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libccp4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libccp4/README.html