:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verticall'
.. highlight: bash

verticall
=========

.. conda:recipe:: verticall
   :replaces_section_title:
   :noindex:

   A tool for building recombination\-free trees.

   :homepage: https://github.com/rrwick/Verticall
   :documentation: https://github.com/rrwick/Verticall/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`verticall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verticall/meta.yaml>`_

   


.. conda:package:: verticall

   |downloads_verticall| |docker_verticall|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotnine: 
   :depends on pytest: 
   :depends on python: ``>=3.7``
   :depends on svgwrite: 

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

    pixi global install verticall

to add into an existing workspace instead, run::

    pixi add verticall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install verticall

Alternatively, to install into a new environment, run::

    conda create -n envname verticall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/verticall:<tag>

(see `verticall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_verticall| image:: https://img.shields.io/conda/dn/bioconda/verticall.svg?style=flat
   :target: https://anaconda.org/bioconda/verticall
   :alt:   (downloads)
.. |docker_verticall| image:: https://quay.io/repository/biocontainers/verticall/status
   :target: https://quay.io/repository/biocontainers/verticall
.. _`verticall/tags`: https://quay.io/repository/biocontainers/verticall?tab=tags


.. raw:: html

    <script>
        var package = "verticall";
        var versions = ["0.4.3","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verticall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verticall/README.html