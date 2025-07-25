:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heasoft'
.. highlight: bash

heasoft
=======

.. conda:recipe:: heasoft
   :replaces_section_title:
   :noindex:

   NASA High Energy Astrophysics Software \(HEAsoft\)

   :homepage: https://heasarc.gsfc.nasa.gov/lheasoft/
   :documentation: https://heasarc.gsfc.nasa.gov/docs/software/heasoft/
   
   :license: Clear BSD License
   :recipe: /`heasoft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heasoft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heasoft/meta.yaml>`_

   HEAsoft is a unified release of the FTOOLS and XANADU software packages for high\-energy astrophysics data analysis\, including tools like XSPEC.

   After installation\, users must \*\*initialize the HEAsoft environment\*\* by running the following commands\:

   \`\`\`
   export HEADAS\=\$\(ls \-d \"\$\{CONDA\_PREFIX\}\/x86\_64\-pc\-linux\-gnu\-libc\"\*\/ \| head \-n 1\)
   source \"\$\{HEADAS\}\/headas\-init.sh\"
   export LHEAPERL\=\"\$\{CONDA\_PREFIX\}\/bin\/perl\"
   \`\`\`

   This setup configures several environment variables required for HEAsoft\, including \`PATH\`\, \`LD\_LIBRARY\_PATH\`\, \`PFILES\`\, \`PERL5LIB\`\, \`PYTHONPATH\`\, and component\-specific variables such as \`PGPLOT\_DIR\`\, \`XANADU\`\, and \`POW\_LIBRARY\`.

   \*\*Note\*\*\: \`LHEAPERL\` must be manually set to point to your Conda environment\'s Perl interpreter after sourcing \`headas\-init.sh\`.

   For mission\-specific functionality \(e.g.\, Swift\, NuSTAR\, IXPE\)\, additional environment setup may be required. Refer to the HEAsoft documentation for details.

   \*\*Warning for XSPEC Users\*\*\: The \`\/spectral\/modelData\` directory \(\~5.9GB\) is excluded from this package to reduce its size\, making XSPEC unusable without it. 

   To enable XSPEC\, follow these steps\:

   1. Download the HEAsoft source tarball for the same version as this package \(6.35.2\)\:
      \`\`\`
      wget https\:\/\/heasarc.gsfc.nasa.gov\/FTP\/software\/lheasoft\/lheasoft6.35.2\/heasoft\-6.35.2src.tar.gz
      \`\`\`
      Replace \`6.35.2\` by the actual the package version \(e.g.\, 6.35.2\).

   2. Extract the tarball\:
      \`\`\`
      tar zxf heasoft\-6.35.2src.tar.gz
      \`\`\`

   3. Copy the \`modelData\` directory to the appropriate location\:
      \`\`\`
      mkdir \-p \"\$\{CONDA\_PREFIX\}\/spectral\"
      cp \-r heasoft\-6.35.2\/Xspec\/src\/spectral\/modelData \"\$\{CONDA\_PREFIX\}\/spectral\/\"
      \`\`\`



.. conda:package:: heasoft

   |downloads_heasoft| |docker_heasoft|

   :versions:
      
      

      ``6.35.2-0``,  ``6.35.1-1``,  ``6.35.1-0``

      

   
   :depends astropy: ``>=6.1.4``
   :depends astropy-iers-data: 
   :depends curl: ``>=8.14.1,<9.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends gsl: ``>=2.7,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libgcc-ng: ``>=15.1.0,<16.0a0``
   :depends libgfortran: 
   :depends libgfortran-ng: ``>=15.1.0,<16.0a0``
   :depends libgfortran5: ``>=13.3.0``
   :depends libpng: ``>=1.6.50,<1.7.0a0``
   :depends libpng: ``>=1.6.50,<2.0a0``
   :depends libstdcxx: ``>=13``
   :depends libstdcxx-ng: ``>=15.1.0,<16.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: ``>=3.9.2``
   :depends ncurses: ``>=6.5,<7.0a0``
   :depends numpy: ``>=1.23,<3``
   :depends numpy: ``>=2.3.1,<3.0a0``
   :depends perl: ``>=5.32.1``
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
   :depends readline: ``>=8.2,<9.0a0``
   :depends scipy: ``>=1.14.1``
   :depends xorg-libx11: ``>=1.8.12,<2.0a0``
   :depends xorg-libxext: ``>=1.3.6,<2.0a0``
   :depends xorg-libxt: ``>=1.3.1,<2.0a0``
   :depends xorg-xextproto: ``>=7.3.0,<8.0a0``
   :depends xorg-xproto: ``>=7.0.31,<8.0a0``
   :depends zlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install heasoft

   and update with::

      mamba update heasoft

  To create a new environment, run::

      mamba create --name myenvname heasoft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/heasoft:<tag>

   (see `heasoft/tags`_ for valid values for ``<tag>``)


.. |downloads_heasoft| image:: https://img.shields.io/conda/dn/bioconda/heasoft.svg?style=flat
   :target: https://anaconda.org/bioconda/heasoft
   :alt:   (downloads)
.. |docker_heasoft| image:: https://quay.io/repository/biocontainers/heasoft/status
   :target: https://quay.io/repository/biocontainers/heasoft
.. _`heasoft/tags`: https://quay.io/repository/biocontainers/heasoft?tab=tags


.. raw:: html

    <script>
        var package = "heasoft";
        var versions = ["6.35.2","6.35.1","6.35.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heasoft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heasoft/README.html