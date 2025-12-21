:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'density-fitness'
.. highlight: bash

density-fitness
===============

.. conda:recipe:: density-fitness
   :replaces_section_title:
   :noindex:

   Application to calculate the density statistics \(RSR\, SRSR\, RSCCS\, EDIAm and OPIA\) for x\-ray structures

   :homepage: https://github.com/PDB-REDO/density-fitness
   :documentation: https://github.com/PDB-REDO/density-fitness/blob/v1.2.0/doc/density-fitness.pdf
   
   :license: BSD / BSD-2-Clause
   :recipe: /`density-fitness <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/density-fitness>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/density-fitness/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444911035918`, doi: :doi:`10.1021/acs.jcim.7b00391`

   The program density\-fitness calculates electron density metrics\, for main\- \(includes Cβ atom\) and side\-chain atoms of individual residues.
   For this calculation\, the program uses the structure model in either PDB or mmCIF format and the electron density from the 2mFo\-DFc and mFo\-DFc maps. If these maps are not readily available\, the MTZ file and model can be used to calculate maps clipper. Density\-fitness support both X\-ray and electron diffraction data.
   This program is essentially a reimplementation of \_edstats\_\, a program available from the CCP4 suite. However\, the output now contains only the RSR\, SRSR and RSCC fields as in \_edstats\_ with the addition of EDIAm and OPIA and no longer requires pre\-calculated map coefficients.



.. conda:package:: density-fitness

   |downloads_density-fitness| |docker_density-fitness|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends libcifpp: ``>=9.0.5,<10.0a0``
   :depends libgcc: ``>=13``
   :depends libpdb-redo: ``>=3.3.1,<4.0a0``
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

      mamba install density-fitness

   and update with::

      mamba update density-fitness

  To create a new environment, run::

      mamba create --name myenvname density-fitness

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/density-fitness:<tag>

   (see `density-fitness/tags`_ for valid values for ``<tag>``)


.. |downloads_density-fitness| image:: https://img.shields.io/conda/dn/bioconda/density-fitness.svg?style=flat
   :target: https://anaconda.org/bioconda/density-fitness
   :alt:   (downloads)
.. |docker_density-fitness| image:: https://quay.io/repository/biocontainers/density-fitness/status
   :target: https://quay.io/repository/biocontainers/density-fitness
.. _`density-fitness/tags`: https://quay.io/repository/biocontainers/density-fitness?tab=tags


.. raw:: html

    <script>
        var package = "density-fitness";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/density-fitness/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/density-fitness/README.html