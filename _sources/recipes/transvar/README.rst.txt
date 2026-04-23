:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transvar'
.. highlight: bash

transvar
========

.. conda:recipe:: transvar
   :replaces_section_title:
   :noindex:

   Transcript\-based variant annotator.

   :homepage: https://github.com/zwdzwd/transvar
   :documentation: https://transvar.readthedocs.io
   
   :license: MIT
   :recipe: /`transvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transvar/meta.yaml>`_
   :links: biotools: :biotools:`transvar`

   TransVar is a multi\-way annotator for genetic elements and genetic variations.
   It supports genomic\, cDNA\, and protein\-level variant annotation.



.. conda:package:: transvar

   |downloads_transvar| |docker_transvar|

   :versions:
      
      

      ``2.5.10.20211024-0``

      

   
   :depends on future: 
   :depends on libzlib: ``>=1.3.2,<2.0a0``
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

    pixi global install transvar

to add into an existing workspace instead, run::

    pixi add transvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transvar

Alternatively, to install into a new environment, run::

    conda create -n envname transvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transvar:<tag>

(see `transvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transvar| image:: https://img.shields.io/conda/dn/bioconda/transvar.svg?style=flat
   :target: https://anaconda.org/bioconda/transvar
   :alt:   (downloads)
.. |docker_transvar| image:: https://quay.io/repository/biocontainers/transvar/status
   :target: https://quay.io/repository/biocontainers/transvar
.. _`transvar/tags`: https://quay.io/repository/biocontainers/transvar?tab=tags


.. raw:: html

    <script>
        var package = "transvar";
        var versions = ["2.5.10.20211024"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transvar/README.html