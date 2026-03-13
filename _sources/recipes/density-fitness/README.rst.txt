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

      

   
   :depends on libcifpp: ``>=9.0.5,<10.0a0``
   :depends on libgcc: ``>=13``
   :depends on libpdb-redo: ``>=3.3.1,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install density-fitness

to add into an existing workspace instead, run::

    pixi add density-fitness

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install density-fitness

Alternatively, to install into a new environment, run::

    conda create -n envname density-fitness

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/density-fitness:<tag>

(see `density-fitness/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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