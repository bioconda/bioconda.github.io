:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmath4'
.. highlight: bash

rmath4
======

.. conda:recipe:: rmath4
   :replaces_section_title:
   :noindex:

   standalone Rmath library from R

   :homepage: https://github.com/alex-wave/Rmath-python
   :license: GPL-2.0
   :recipe: /`rmath4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmath4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmath4/meta.yaml>`_

   


.. conda:package:: rmath4

   |downloads_rmath4| |docker_rmath4|

   :versions:
      
      

      ``4.3.1-2``,  ``4.3.1-1``,  ``4.3.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install rmath4

to add into an existing workspace instead, run::

    pixi add rmath4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmath4

Alternatively, to install into a new environment, run::

    conda create -n envname rmath4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmath4:<tag>

(see `rmath4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmath4| image:: https://img.shields.io/conda/dn/bioconda/rmath4.svg?style=flat
   :target: https://anaconda.org/bioconda/rmath4
   :alt:   (downloads)
.. |docker_rmath4| image:: https://quay.io/repository/biocontainers/rmath4/status
   :target: https://quay.io/repository/biocontainers/rmath4
.. _`rmath4/tags`: https://quay.io/repository/biocontainers/rmath4?tab=tags


.. raw:: html

    <script>
        var package = "rmath4";
        var versions = ["4.3.1","4.3.1","4.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmath4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmath4/README.html