:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightstringgraph'
.. highlight: bash

lightstringgraph
================

.. conda:recipe:: lightstringgraph
   :replaces_section_title:
   :noindex:

   LightStringGraphs \(LSG\) is an external memory string graph construction tool.

   :homepage: http://lsg.algolab.eu
   :license: GPL-3
   :recipe: /`lightstringgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightstringgraph/meta.yaml>`_
   :links: biotools: :biotools:`lightstringgraph`, doi: :doi:`10.1007/978-3-662-44753-6_23`

   


.. conda:package:: lightstringgraph

   |downloads_lightstringgraph| |docker_lightstringgraph|

   :versions:
      
      

      ``0.4.0-7``,  ``0.4.0-6``,  ``0.4.0-5``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends on boost: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install lightstringgraph

to add into an existing workspace instead, run::

    pixi add lightstringgraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lightstringgraph

Alternatively, to install into a new environment, run::

    conda create -n envname lightstringgraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lightstringgraph:<tag>

(see `lightstringgraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lightstringgraph| image:: https://img.shields.io/conda/dn/bioconda/lightstringgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/lightstringgraph
   :alt:   (downloads)
.. |docker_lightstringgraph| image:: https://quay.io/repository/biocontainers/lightstringgraph/status
   :target: https://quay.io/repository/biocontainers/lightstringgraph
.. _`lightstringgraph/tags`: https://quay.io/repository/biocontainers/lightstringgraph?tab=tags


.. raw:: html

    <script>
        var package = "lightstringgraph";
        var versions = ["0.4.0","0.4.0","0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightstringgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightstringgraph/README.html