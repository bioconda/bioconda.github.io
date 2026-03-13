:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphin'
.. highlight: bash

sciphin
=======

.. conda:recipe:: sciphin
   :replaces_section_title:
   :noindex:

   Single\-Cell mutation Identification via finite\-sites Phylogenetic Inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhIN and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin/meta.yaml>`_

   


.. conda:package:: sciphin

   |downloads_sciphin| |docker_sciphin|

   :versions:
      
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install sciphin

to add into an existing workspace instead, run::

    pixi add sciphin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sciphin

Alternatively, to install into a new environment, run::

    conda create -n envname sciphin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sciphin:<tag>

(see `sciphin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sciphin| image:: https://img.shields.io/conda/dn/bioconda/sciphin.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphin
   :alt:   (downloads)
.. |docker_sciphin| image:: https://quay.io/repository/biocontainers/sciphin/status
   :target: https://quay.io/repository/biocontainers/sciphin
.. _`sciphin/tags`: https://quay.io/repository/biocontainers/sciphin?tab=tags


.. raw:: html

    <script>
        var package = "sciphin";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphin/README.html