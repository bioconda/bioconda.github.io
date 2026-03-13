:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimmer'
.. highlight: bash

glimmer
=======

.. conda:recipe:: glimmer
   :replaces_section_title:
   :noindex:

   Glimmer is a system for finding genes in microbial DNA

   :homepage: https://ccb.jhu.edu/software/glimmer/index.shtml
   :license: Custom
   :recipe: /`glimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimmer/meta.yaml>`_
   :links: biotools: :biotools:`glimmer`, doi: :doi:`10.1093/bioinformatics/btm009`

   


.. conda:package:: glimmer

   |downloads_glimmer| |docker_glimmer|

   :versions:
      
      

      ``3.02-6``,  ``3.02-5``,  ``3.02-4``,  ``3.02-3``,  ``3.02-2``,  ``3.02-1``,  ``3.02-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``

   :additional platforms:
      

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

    pixi global install glimmer

to add into an existing workspace instead, run::

    pixi add glimmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install glimmer

Alternatively, to install into a new environment, run::

    conda create -n envname glimmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/glimmer:<tag>

(see `glimmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_glimmer| image:: https://img.shields.io/conda/dn/bioconda/glimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/glimmer
   :alt:   (downloads)
.. |docker_glimmer| image:: https://quay.io/repository/biocontainers/glimmer/status
   :target: https://quay.io/repository/biocontainers/glimmer
.. _`glimmer/tags`: https://quay.io/repository/biocontainers/glimmer?tab=tags


.. raw:: html

    <script>
        var package = "glimmer";
        var versions = ["3.02","3.02","3.02","3.02","3.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimmer/README.html