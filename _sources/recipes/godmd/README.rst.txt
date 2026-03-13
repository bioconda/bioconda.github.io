:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'godmd'
.. highlight: bash

godmd
=====

.. conda:recipe:: godmd
   :replaces_section_title:
   :noindex:

   GOdMD Conformational Transitions with discrete Molecular Dynamics.

   :homepage: https://github.com/mmb-irb/godmd
   :license: APACHE / Apache Software License
   :recipe: /`godmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/godmd/meta.yaml>`_

   GOdMD is a new method for determining pathways for conformational transitions in macromolecules based on the use of discrete molecular dynamics and biasing techniques based on a combination of essential dynamics and Maxwell\-Demon sampling techniques. The method can work with high efficiency at different levels of resolution\, including the atomistic one\, and can help to define initial pathways for further exploration by means of more accurate atomistic molecular dynamics simulations.


.. conda:package:: godmd

   |downloads_godmd| |docker_godmd|

   :versions:
      
      

      ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=14.3.0``
   :depends on libstdcxx: ``>=14``

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

    pixi global install godmd

to add into an existing workspace instead, run::

    pixi add godmd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install godmd

Alternatively, to install into a new environment, run::

    conda create -n envname godmd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/godmd:<tag>

(see `godmd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_godmd| image:: https://img.shields.io/conda/dn/bioconda/godmd.svg?style=flat
   :target: https://anaconda.org/bioconda/godmd
   :alt:   (downloads)
.. |docker_godmd| image:: https://quay.io/repository/biocontainers/godmd/status
   :target: https://quay.io/repository/biocontainers/godmd
.. _`godmd/tags`: https://quay.io/repository/biocontainers/godmd?tab=tags


.. raw:: html

    <script>
        var package = "godmd";
        var versions = ["1.8","1.7","1.6","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/godmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/godmd/README.html