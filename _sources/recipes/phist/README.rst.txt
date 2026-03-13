:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phist'
.. highlight: bash

phist
=====

.. conda:recipe:: phist
   :replaces_section_title:
   :noindex:

   Phage\-Host Interaction Search Tool.

   :homepage: https://github.com/refresh-bio/PHIST
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab837`

   


.. conda:package:: phist

   |downloads_phist| |docker_phist|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on kmer-db: ``>=2.3.1,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install phist

to add into an existing workspace instead, run::

    pixi add phist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phist

Alternatively, to install into a new environment, run::

    conda create -n envname phist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phist:<tag>

(see `phist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phist| image:: https://img.shields.io/conda/dn/bioconda/phist.svg?style=flat
   :target: https://anaconda.org/bioconda/phist
   :alt:   (downloads)
.. |docker_phist| image:: https://quay.io/repository/biocontainers/phist/status
   :target: https://quay.io/repository/biocontainers/phist
.. _`phist/tags`: https://quay.io/repository/biocontainers/phist?tab=tags


.. raw:: html

    <script>
        var package = "phist";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phist/README.html