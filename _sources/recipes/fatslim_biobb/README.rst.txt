:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fatslim_biobb'
.. highlight: bash

fatslim_biobb
=============

.. conda:recipe:: fatslim_biobb
   :replaces_section_title:
   :noindex:

   FATSLiM is a software dedicated to the analysis of molecular dynamics simulations of lipid membranes

   :homepage: https://fatslim.github.io/
   :documentation: https://pythonhosted.org/fatslim/
   
   :developer docs: https://github.com/FATSLiM/fatslim
   :license: GPL-3.0-or-later
   :recipe: /`fatslim_biobb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fatslim_biobb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fatslim_biobb/meta.yaml>`_

   


.. conda:package:: fatslim_biobb

   |downloads_fatslim_biobb| |docker_fatslim_biobb|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.26``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install fatslim_biobb

to add into an existing workspace instead, run::

    pixi add fatslim_biobb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fatslim_biobb

Alternatively, to install into a new environment, run::

    conda create -n envname fatslim_biobb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fatslim_biobb:<tag>

(see `fatslim_biobb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fatslim_biobb| image:: https://img.shields.io/conda/dn/bioconda/fatslim_biobb.svg?style=flat
   :target: https://anaconda.org/bioconda/fatslim_biobb
   :alt:   (downloads)
.. |docker_fatslim_biobb| image:: https://quay.io/repository/biocontainers/fatslim_biobb/status
   :target: https://quay.io/repository/biocontainers/fatslim_biobb
.. _`fatslim_biobb/tags`: https://quay.io/repository/biocontainers/fatslim_biobb?tab=tags


.. raw:: html

    <script>
        var package = "fatslim_biobb";
        var versions = ["0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fatslim_biobb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fatslim_biobb/README.html