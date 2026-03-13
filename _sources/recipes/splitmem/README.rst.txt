:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splitmem'
.. highlight: bash

splitmem
========

.. conda:recipe:: splitmem
   :replaces_section_title:
   :noindex:

   Graphical pan\-genome analysis with suffix skips

   :homepage: https://sourceforge.net/projects/splitmem/
   :license: Apache License V2.0
   :recipe: /`splitmem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splitmem/meta.yaml>`_

   


.. conda:package:: splitmem

   |downloads_splitmem| |docker_splitmem|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

    pixi global install splitmem

to add into an existing workspace instead, run::

    pixi add splitmem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install splitmem

Alternatively, to install into a new environment, run::

    conda create -n envname splitmem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/splitmem:<tag>

(see `splitmem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_splitmem| image:: https://img.shields.io/conda/dn/bioconda/splitmem.svg?style=flat
   :target: https://anaconda.org/bioconda/splitmem
   :alt:   (downloads)
.. |docker_splitmem| image:: https://quay.io/repository/biocontainers/splitmem/status
   :target: https://quay.io/repository/biocontainers/splitmem
.. _`splitmem/tags`: https://quay.io/repository/biocontainers/splitmem?tab=tags


.. raw:: html

    <script>
        var package = "splitmem";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splitmem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splitmem/README.html