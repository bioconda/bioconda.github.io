:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igua'
.. highlight: bash

igua
====

.. conda:recipe:: igua
   :replaces_section_title:
   :noindex:

   Iterative Gene clUster Analysis\, a high\-throughput method for gene cluster family identification.

   :homepage: https://github.com/zellerlab/IGUA
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`igua <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igua>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igua/meta.yaml>`_

   


.. conda:package:: igua

   |downloads_igua| |docker_igua|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on anndata: ``>=0.8,<0.12``
   :depends on biopython: ``>=1.79,<2.0``
   :depends on gb-io: ``>=0.3.0,<0.4.0``
   :depends on mmseqs2: 
   :depends on numpy: ``>=1.0,<3.0``
   :depends on pandas: ``>=1.3,<3.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rich: ``>=12.6,<15.0``
   :depends on scipy: ``>=1.4,<2``

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

    pixi global install igua

to add into an existing workspace instead, run::

    pixi add igua

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igua

Alternatively, to install into a new environment, run::

    conda create -n envname igua

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igua:<tag>

(see `igua/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igua| image:: https://img.shields.io/conda/dn/bioconda/igua.svg?style=flat
   :target: https://anaconda.org/bioconda/igua
   :alt:   (downloads)
.. |docker_igua| image:: https://quay.io/repository/biocontainers/igua/status
   :target: https://quay.io/repository/biocontainers/igua
.. _`igua/tags`: https://quay.io/repository/biocontainers/igua?tab=tags


.. raw:: html

    <script>
        var package = "igua";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igua/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igua/README.html