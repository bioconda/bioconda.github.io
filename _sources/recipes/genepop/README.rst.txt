:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genepop'
.. highlight: bash

genepop
=======

.. conda:recipe:: genepop
   :replaces_section_title:
   :noindex:

   Population Genetic Data Analysis package.

   :homepage: https://f-rousset.r-universe.dev/genepop
   :developer docs: https://github.com/cran/genepop
   :license: CeCILL-2
   :recipe: /`genepop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepop/meta.yaml>`_

   


.. conda:package:: genepop

   |downloads_genepop| |docker_genepop|

   :versions:
      
      

      ``4.8.4-0``,  ``4.8.2-2``,  ``4.8.2-1``,  ``4.8.2-0``,  ``4.6-0``,  ``4.5.1-0``

      

   
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

    pixi global install genepop

to add into an existing workspace instead, run::

    pixi add genepop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genepop

Alternatively, to install into a new environment, run::

    conda create -n envname genepop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genepop:<tag>

(see `genepop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genepop| image:: https://img.shields.io/conda/dn/bioconda/genepop.svg?style=flat
   :target: https://anaconda.org/bioconda/genepop
   :alt:   (downloads)
.. |docker_genepop| image:: https://quay.io/repository/biocontainers/genepop/status
   :target: https://quay.io/repository/biocontainers/genepop
.. _`genepop/tags`: https://quay.io/repository/biocontainers/genepop?tab=tags


.. raw:: html

    <script>
        var package = "genepop";
        var versions = ["4.8.4","4.8.2","4.8.2","4.8.2","4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepop/README.html