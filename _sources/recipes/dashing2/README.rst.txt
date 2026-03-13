:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dashing2'
.. highlight: bash

dashing2
========

.. conda:recipe:: dashing2
   :replaces_section_title:
   :noindex:

   A fast toolkit for k\-mer and minimizer encoding\, sketching\, comparison\, and indexing.

   :homepage: https://github.com/dnbaker/dashing2
   :documentation: https://github.com/dnbaker/dashing2/blob/v2.1.20/README.md
   
   :license: MIT / MIT
   :recipe: /`dashing2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dashing2/meta.yaml>`_
   :links: doi: :doi:`10.1101/501726`

   


.. conda:package:: dashing2

   |downloads_dashing2| |docker_dashing2|

   :versions:
      
      

      ``2.1.20-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on fmt: ``>=10.2.1,<11.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install dashing2

to add into an existing workspace instead, run::

    pixi add dashing2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dashing2

Alternatively, to install into a new environment, run::

    conda create -n envname dashing2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dashing2:<tag>

(see `dashing2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dashing2| image:: https://img.shields.io/conda/dn/bioconda/dashing2.svg?style=flat
   :target: https://anaconda.org/bioconda/dashing2
   :alt:   (downloads)
.. |docker_dashing2| image:: https://quay.io/repository/biocontainers/dashing2/status
   :target: https://quay.io/repository/biocontainers/dashing2
.. _`dashing2/tags`: https://quay.io/repository/biocontainers/dashing2?tab=tags


.. raw:: html

    <script>
        var package = "dashing2";
        var versions = ["2.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dashing2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dashing2/README.html