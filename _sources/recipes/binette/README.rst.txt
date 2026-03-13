:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binette'
.. highlight: bash

binette
=======

.. conda:recipe:: binette
   :replaces_section_title:
   :noindex:

   A fast and accurate binning refinement tool to constructs high quality MAGs from the output of multiple binning tools.

   :homepage: https://github.com/genotoul-bioinfo/binette
   :documentation: https://binette.readthedocs.io
   
   :license: GPL / GPL-3.0-only
   :recipe: /`binette <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binette/meta.yaml>`_
   :links: biotools: :biotools:`binette`, usegalaxy-eu: :usegalaxy-eu:`binette`, doi: :doi:`10.21105/joss.06782`

   


.. conda:package:: binette

   |downloads_binette| |docker_binette|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.7-0``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on checkm2: ``>=1.1,<2.0``
   :depends on diamond: ``>=2.1,<3``
   :depends on networkx: ``>=3.0,<4.0``
   :depends on numpy: ``>=1.24,<3.0``
   :depends on pandas: ``>=2,<3``
   :depends on pyfastx: ``>=2,<3``
   :depends on pyroaring: ``>=1.0.0,<2.0.0``
   :depends on pyrodigal: ``>=3.0,<3.7.0``
   :depends on python: 
   :depends on rich: ``>=12.0.0,<14.0.0``
   :depends on typer: ``>=0.9,<1.0``

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

    pixi global install binette

to add into an existing workspace instead, run::

    pixi add binette

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binette

Alternatively, to install into a new environment, run::

    conda create -n envname binette

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binette:<tag>

(see `binette/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binette| image:: https://img.shields.io/conda/dn/bioconda/binette.svg?style=flat
   :target: https://anaconda.org/bioconda/binette
   :alt:   (downloads)
.. |docker_binette| image:: https://quay.io/repository/biocontainers/binette/status
   :target: https://quay.io/repository/biocontainers/binette
.. _`binette/tags`: https://quay.io/repository/biocontainers/binette?tab=tags


.. raw:: html

    <script>
        var package = "binette";
        var versions = ["1.2.1","1.2.1","1.2.0","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binette/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binette/README.html