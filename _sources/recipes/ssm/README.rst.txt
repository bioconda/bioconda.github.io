:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssm'
.. highlight: bash

ssm
===

.. conda:recipe:: ssm
   :replaces_section_title:
   :noindex:

   Secondary\-structure matching\, tool for fast protein structure alignment

   :homepage: https://www.ccp4.ac.uk
   :license: GPL3 / GPL-3.0-or-later AND LGPL-3.0-or-later
   :recipe: /`ssm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssm/meta.yaml>`_
   :links: doi: :doi:`10.1107/S0907444904026460`

   SSM is a macromolecular coordinate superposition library\, written by Eugene Krissinel of the EBI.
   The library implements the SSM algorithm of protein structure comparison in three dimensions\,
   which includes an original procedure of matching graphs built on the protein\'s secondary\-structure elements\,
   followed by an iterative three\-dimensional alignment of protein backbone Calpha atoms.



.. conda:package:: ssm

   |downloads_ssm| |docker_ssm|

   :versions:
      
      

      ``1.4-1``,  ``1.4-0``

      

   
   :depends on libccp4: ``>=8.0.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mmdb2: ``>=2.0.22,<3.0a0``
   :depends on pkg-config: 

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

    pixi global install ssm

to add into an existing workspace instead, run::

    pixi add ssm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ssm

Alternatively, to install into a new environment, run::

    conda create -n envname ssm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ssm:<tag>

(see `ssm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ssm| image:: https://img.shields.io/conda/dn/bioconda/ssm.svg?style=flat
   :target: https://anaconda.org/bioconda/ssm
   :alt:   (downloads)
.. |docker_ssm| image:: https://quay.io/repository/biocontainers/ssm/status
   :target: https://quay.io/repository/biocontainers/ssm
.. _`ssm/tags`: https://quay.io/repository/biocontainers/ssm?tab=tags


.. raw:: html

    <script>
        var package = "ssm";
        var versions = ["1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssm/README.html