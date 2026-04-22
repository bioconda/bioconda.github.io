:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paf2chain'
.. highlight: bash

paf2chain
=========

.. conda:recipe:: paf2chain
   :replaces_section_title:
   :noindex:

   convert PAF format to CHAIN format

   :homepage: https://github.com/AndreaGuarracino/paf2chain
   :license: MIT / MIT
   :recipe: /`paf2chain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paf2chain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paf2chain/meta.yaml>`_

   


.. conda:package:: paf2chain

   |downloads_paf2chain| |docker_paf2chain|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install paf2chain

to add into an existing workspace instead, run::

    pixi add paf2chain

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paf2chain

Alternatively, to install into a new environment, run::

    conda create -n envname paf2chain

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paf2chain:<tag>

(see `paf2chain/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paf2chain| image:: https://img.shields.io/conda/dn/bioconda/paf2chain.svg?style=flat
   :target: https://anaconda.org/bioconda/paf2chain
   :alt:   (downloads)
.. |docker_paf2chain| image:: https://quay.io/repository/biocontainers/paf2chain/status
   :target: https://quay.io/repository/biocontainers/paf2chain
.. _`paf2chain/tags`: https://quay.io/repository/biocontainers/paf2chain?tab=tags


.. raw:: html

    <script>
        var package = "paf2chain";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paf2chain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paf2chain/README.html