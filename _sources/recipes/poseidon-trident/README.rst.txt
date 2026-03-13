:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poseidon-trident'
.. highlight: bash

poseidon-trident
================

.. conda:recipe:: poseidon-trident
   :replaces_section_title:
   :noindex:

   A tool \(trident\) to work with modular genotype databases formatted using Poseidon.

   :homepage: https://www.poseidon-adna.org/#/
   :license: MIT
   :recipe: /`poseidon-trident <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poseidon-trident/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.98317.1`

   


.. conda:package:: poseidon-trident

   |downloads_poseidon-trident| |docker_poseidon-trident|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.7.1-1</code>,  <code>1.6.7.1-0</code>,  <code>1.6.2.1-0</code>,  <code>1.5.7.0-1</code>,  <code>1.5.7.0-0</code>,  <code>1.5.4.0-0</code>,  <code>1.5.0.1-0</code>,  <code>1.4.1.0-0</code>,  <code>1.3.0.4-0</code>,  </span></summary>
      

      ``1.6.7.1-1``,  ``1.6.7.1-0``,  ``1.6.2.1-0``,  ``1.5.7.0-1``,  ``1.5.7.0-0``,  ``1.5.4.0-0``,  ``1.5.0.1-0``,  ``1.4.1.0-0``,  ``1.3.0.4-0``,  ``1.2.0.0-0``,  ``1.1.11.0-2``,  ``1.1.11.0-1``,  ``1.1.11.0-0``,  ``1.1.6.0-0``,  ``0.28.0-0``,  ``0.26.3-1``,  ``0.26.3-0``,  ``0.26.1-1``,  ``0.26.1-0``,  ``0.21.0-0``,  ``0.18.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ca-certificates: 
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install poseidon-trident

to add into an existing workspace instead, run::

    pixi add poseidon-trident

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install poseidon-trident

Alternatively, to install into a new environment, run::

    conda create -n envname poseidon-trident

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/poseidon-trident:<tag>

(see `poseidon-trident/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_poseidon-trident| image:: https://img.shields.io/conda/dn/bioconda/poseidon-trident.svg?style=flat
   :target: https://anaconda.org/bioconda/poseidon-trident
   :alt:   (downloads)
.. |docker_poseidon-trident| image:: https://quay.io/repository/biocontainers/poseidon-trident/status
   :target: https://quay.io/repository/biocontainers/poseidon-trident
.. _`poseidon-trident/tags`: https://quay.io/repository/biocontainers/poseidon-trident?tab=tags


.. raw:: html

    <script>
        var package = "poseidon-trident";
        var versions = ["1.6.7.1","1.6.7.1","1.6.2.1","1.5.7.0","1.5.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poseidon-trident/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poseidon-trident/README.html