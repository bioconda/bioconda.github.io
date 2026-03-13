:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structure-threader'
.. highlight: bash

structure-threader
==================

.. conda:recipe:: structure-threader
   :replaces_section_title:
   :noindex:

   A program to parallelize runs of \'Structure\'\, \'fastStructure\' and \'MavericK\'.

   :homepage: https://gitlab.com/StuntsPT/Structure_threader
   :license: GPL3 / GPL-3.0-only
   :recipe: /`structure-threader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure-threader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure-threader/meta.yaml>`_
   :links: doi: :doi:`10.1111/1755-0998.12702`

   


.. conda:package:: structure-threader

   |downloads_structure-threader| |docker_structure-threader|

   :versions:
      
      

      ``1.3.11-1``,  ``1.3.11-0``

      

   
   :depends on colorlover: ``>=0.3.0``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.12.1``
   :depends on plotly: ``>=4.1.1``
   :depends on python: ``>=3.4``

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

    pixi global install structure-threader

to add into an existing workspace instead, run::

    pixi add structure-threader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install structure-threader

Alternatively, to install into a new environment, run::

    conda create -n envname structure-threader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/structure-threader:<tag>

(see `structure-threader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_structure-threader| image:: https://img.shields.io/conda/dn/bioconda/structure-threader.svg?style=flat
   :target: https://anaconda.org/bioconda/structure-threader
   :alt:   (downloads)
.. |docker_structure-threader| image:: https://quay.io/repository/biocontainers/structure-threader/status
   :target: https://quay.io/repository/biocontainers/structure-threader
.. _`structure-threader/tags`: https://quay.io/repository/biocontainers/structure-threader?tab=tags


.. raw:: html

    <script>
        var package = "structure-threader";
        var versions = ["1.3.11","1.3.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structure-threader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structure-threader/README.html