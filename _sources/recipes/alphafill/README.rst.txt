:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphafill'
.. highlight: bash

alphafill
=========

.. conda:recipe:: alphafill
   :replaces_section_title:
   :noindex:

   Transplant missing compounds to the AlphaFold models

   :homepage: https://alphafill.eu
   :documentation: https://alphafill.eu/manual
   
   :developer docs: https://github.com/PDB-REDO/alphafill
   :license: BSD / BSD-2-Clause
   :recipe: /`alphafill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphafill/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-022-01685-y`

   AlphaFill is an algorithm based on sequence and structure similarity that “transplants” missing ligands\, cofactors and \(metal\) ions to the AlphaFold models.
   By adding the molecular context to these protein structures\, the models can be more easily appreciated in terms of function and structural integrity.
   Consequently\, the AlphaFill models can be helpful in designing downstream wet\-lab experiments and\/or computational studies.



.. conda:package:: alphafill

   |downloads_alphafill| |docker_alphafill|

   :versions:
      
      

      ``2.2.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libcifpp: ``>=7.0.9,<8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzeep: ``>=6.1.1,<7.0a0``
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

    pixi global install alphafill

to add into an existing workspace instead, run::

    pixi add alphafill

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alphafill

Alternatively, to install into a new environment, run::

    conda create -n envname alphafill

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alphafill:<tag>

(see `alphafill/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alphafill| image:: https://img.shields.io/conda/dn/bioconda/alphafill.svg?style=flat
   :target: https://anaconda.org/bioconda/alphafill
   :alt:   (downloads)
.. |docker_alphafill| image:: https://quay.io/repository/biocontainers/alphafill/status
   :target: https://quay.io/repository/biocontainers/alphafill
.. _`alphafill/tags`: https://quay.io/repository/biocontainers/alphafill?tab=tags


.. raw:: html

    <script>
        var package = "alphafill";
        var versions = ["2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphafill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphafill/README.html