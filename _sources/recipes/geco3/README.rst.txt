:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geco3'
.. highlight: bash

geco3
=====

.. conda:recipe:: geco3
   :replaces_section_title:
   :noindex:

   An efficient DNA sequence compressor using Neural Networks

   :homepage: https://github.com/cobilab/geco3
   :license: GPL / GPL3
   :recipe: /`geco3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco3/meta.yaml>`_

   


.. conda:package:: geco3

   |downloads_geco3| |docker_geco3|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install geco3

to add into an existing workspace instead, run::

    pixi add geco3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install geco3

Alternatively, to install into a new environment, run::

    conda create -n envname geco3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/geco3:<tag>

(see `geco3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_geco3| image:: https://img.shields.io/conda/dn/bioconda/geco3.svg?style=flat
   :target: https://anaconda.org/bioconda/geco3
   :alt:   (downloads)
.. |docker_geco3| image:: https://quay.io/repository/biocontainers/geco3/status
   :target: https://quay.io/repository/biocontainers/geco3
.. _`geco3/tags`: https://quay.io/repository/biocontainers/geco3?tab=tags


.. raw:: html

    <script>
        var package = "geco3";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geco3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geco3/README.html