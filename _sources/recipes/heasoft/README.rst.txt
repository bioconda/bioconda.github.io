:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heasoft'
.. highlight: bash

heasoft
=======

.. conda:recipe:: heasoft
   :replaces_section_title:
   :noindex:

   NASA High Energy Astrophysics Software \(HEAsoft\)

   :homepage: https://heasarc.gsfc.nasa.gov/lheasoft
   :documentation: https://heasarc.gsfc.nasa.gov/docs/software/heasoft
   
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
      
      

      ``6.35.2-1``,  ``6.35.2-0``,  ``6.35.1-1``,  ``6.35.1-0``

      

   
   :depends on astropy: ``>=6.1.4``
   :depends on astropy-iers-data: 
   :depends on curl: 
   :depends on gsl: ``2.7.*``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgcc-ng: ``>=15.1.0,<16.0a0``
   :depends on libgfortran: 
   :depends on libgfortran-ng: ``>=15.1.0,<16.0a0``
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libpng: ``>=1.6.50,<1.7.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libstdcxx-ng: ``>=15.1.0,<16.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=3.9.2``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on numpy: ``>=1.23,<3``
   :depends on numpy: ``>=2.1.2``
   :depends on perl: ``>=5.32.1``
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python_abi: ``3.13.* *_cp313``
   :depends on readline: ``>=8.2,<9.0a0``
   :depends on scipy: ``>=1.14.1``
   :depends on xorg-libx11: ``>=1.8.12,<2.0a0``
   :depends on xorg-libxext: ``>=1.3.6,<2.0a0``
   :depends on xorg-libxt: ``>=1.3.1,<2.0a0``
   :depends on xorg-xextproto: ``>=7.3.0,<8.0a0``
   :depends on xorg-xproto: ``>=7.0.31,<8.0a0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install heasoft

to add into an existing workspace instead, run::

    pixi add heasoft

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install heasoft

Alternatively, to install into a new environment, run::

    conda create -n envname heasoft

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/heasoft:<tag>

(see `heasoft/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_heasoft| image:: https://img.shields.io/conda/dn/bioconda/heasoft.svg?style=flat
   :target: https://anaconda.org/bioconda/heasoft
   :alt:   (downloads)
.. |docker_heasoft| image:: https://quay.io/repository/biocontainers/heasoft/status
   :target: https://quay.io/repository/biocontainers/heasoft
.. _`heasoft/tags`: https://quay.io/repository/biocontainers/heasoft?tab=tags


.. raw:: html

    <script>
        var package = "heasoft";
        var versions = ["6.35.2","6.35.2","6.35.1","6.35.1"];
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