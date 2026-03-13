:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bg'
.. highlight: bash

bg
==

.. conda:recipe:: bg
   :replaces_section_title:
   :noindex:

   Implementation of Breakpoint Graph data structure

   :homepage: https://github.com/aganezov/bg
   :license: MIT
   :recipe: /`bg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bg/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.082784.108`

   


.. conda:package:: bg

   |downloads_bg| |docker_bg|

   :versions:
      
      

      ``1.10-0``

      

   
   :depends on coverage: 
   :depends on decorator: 
   :depends on enum-compat: 
   :depends on ete3: 
   :depends on marshmallow: 
   :depends on mock: 
   :depends on networkx: ``>=2``
   :depends on nose: 
   :depends on numpy: 
   :depends on pytest: 
   :depends on python: 
   :depends on scipy: 
   :depends on six: 

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

    pixi global install bg

to add into an existing workspace instead, run::

    pixi add bg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bg

Alternatively, to install into a new environment, run::

    conda create -n envname bg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bg:<tag>

(see `bg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bg| image:: https://img.shields.io/conda/dn/bioconda/bg.svg?style=flat
   :target: https://anaconda.org/bioconda/bg
   :alt:   (downloads)
.. |docker_bg| image:: https://quay.io/repository/biocontainers/bg/status
   :target: https://quay.io/repository/biocontainers/bg
.. _`bg/tags`: https://quay.io/repository/biocontainers/bg?tab=tags


.. raw:: html

    <script>
        var package = "bg";
        var versions = ["1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bg/README.html