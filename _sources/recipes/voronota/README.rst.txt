:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'voronota'
.. highlight: bash

voronota
========

.. conda:recipe:: voronota
   :replaces_section_title:
   :noindex:

   Compute Voronoi diagram vertices for macromolecular structures

   :homepage: https://www.voronota.com/
   :developer docs: https://github.com/kliment-olechnovic/voronota
   :license: MIT / MIT
   :recipe: /`voronota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/voronota/meta.yaml>`_
   :links: doi: :doi:`10.1002/jcc.23538`

   The analysis of macromolecular structures often requires a comprehensive definition of atomic neighborhoods.
   Such a definition can be based on the Voronoi diagram of balls\, where each ball represents an atom of some van der Waals radius.
   Voronota is a software tool for finding all the vertices of the Voronoi diagram of balls.
   Such vertices correspond to the centers of the empty tangent spheres defined by quadruples of balls.
   Voronota is especially suitable for processing three\-dimensional structures of biological macromolecules such as proteins and RNA.

   Since version 1.2 Voronota also uses the Voronoi vertices to construct inter\-atom contact surfaces and solvent accessible surfaces.
   Voronota provides tools to query contacts\, generate contacts graphics\, compare contacts and evaluate quality of protein structural models using contacts.

   Most of the new developments are happening in the expansions of Voronota\: Voronota\-JS\, Voronota\-LT and Voronota\-GL.

   Voronota and its expansions are developed by Kliment Olechnovic \(https\:\/\/www.kliment.lt\).



.. conda:package:: voronota

   |downloads_voronota| |docker_voronota|

   :versions:
      
      

      ``1.29.4723-0``,  ``1.29.4602-0``,  ``1.29.4592-0``,  ``1.29.4415-0``,  ``1.29.4412-0``,  ``1.29.4408-0``,  ``1.29.4370-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on glew: ``>=2.3.0,<2.4.0a0``
   :depends on glfw: ``>=3.4,<4.0a0``
   :depends on libegl: ``>=1.7.0,<2.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgl: ``>=1.7.0,<2.0a0``
   :depends on libgles: ``>=1.7.0,<2.0a0``
   :depends on libglx: ``>=1.7.0,<2.0a0``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libxcb: ``>=1.17.0,<2.0a0``
   :depends on mesalib: ``>=25.3.5,<25.4.0a0``

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

    pixi global install voronota

to add into an existing workspace instead, run::

    pixi add voronota

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install voronota

Alternatively, to install into a new environment, run::

    conda create -n envname voronota

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/voronota:<tag>

(see `voronota/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_voronota| image:: https://img.shields.io/conda/dn/bioconda/voronota.svg?style=flat
   :target: https://anaconda.org/bioconda/voronota
   :alt:   (downloads)
.. |docker_voronota| image:: https://quay.io/repository/biocontainers/voronota/status
   :target: https://quay.io/repository/biocontainers/voronota
.. _`voronota/tags`: https://quay.io/repository/biocontainers/voronota?tab=tags


.. raw:: html

    <script>
        var package = "voronota";
        var versions = ["1.29.4723","1.29.4602","1.29.4592","1.29.4415","1.29.4412"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/voronota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/voronota/README.html