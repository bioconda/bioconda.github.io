:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pdbx'
.. highlight: bash

pdbx
====

.. conda:recipe:: pdbx
   :replaces_section_title:
   :noindex:

   A parser module in python for structures of the protein data bank in the mmcif format

   :homepage: https://mmcif.wwpdb.org/docs/sw-examples/python/html/index.html
   :developer docs: https://github.com/soedinglab/pdbx
   :license: UNKNOWN
   :recipe: /`pdbx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pdbx/meta.yaml>`_

   Proper recognition to the \[Protein Data Bank\]\(http\:\/\/mmcif.wwpdb.org\/docs\/sw\-examples\/python\/html\/index.html\)
   where this library for protein structures in the mmCIF format initially came from.
   It is modified the original library to support python3.



.. conda:package:: pdbx

   |downloads_pdbx| |docker_pdbx|

   :versions:
      
      

      ``827b2a2-2``,  ``827b2a2-1``,  ``827b2a2-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
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

    pixi global install pdbx

to add into an existing workspace instead, run::

    pixi add pdbx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pdbx

Alternatively, to install into a new environment, run::

    conda create -n envname pdbx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pdbx:<tag>

(see `pdbx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pdbx| image:: https://img.shields.io/conda/dn/bioconda/pdbx.svg?style=flat
   :target: https://anaconda.org/bioconda/pdbx
   :alt:   (downloads)
.. |docker_pdbx| image:: https://quay.io/repository/biocontainers/pdbx/status
   :target: https://quay.io/repository/biocontainers/pdbx
.. _`pdbx/tags`: https://quay.io/repository/biocontainers/pdbx?tab=tags


.. raw:: html

    <script>
        var package = "pdbx";
        var versions = ["827b2a2","827b2a2","827b2a2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pdbx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pdbx/README.html