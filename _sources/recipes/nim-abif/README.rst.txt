:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nim-abif'
.. highlight: bash

nim-abif
========

.. conda:recipe:: nim-abif
   :replaces_section_title:
   :noindex:

   Parse ABIF files from the command line

   :homepage: https://github.com/quadram-institute-bioscience/nim-abif
   :documentation: https://quadram-institute-bioscience.github.io/nim-abif
   
   :license: MIT
   :recipe: /`nim-abif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-abif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-abif/meta.yaml>`_

   


.. conda:package:: nim-abif

   |downloads_nim-abif| |docker_nim-abif|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
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

    pixi global install nim-abif

to add into an existing workspace instead, run::

    pixi add nim-abif

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nim-abif

Alternatively, to install into a new environment, run::

    conda create -n envname nim-abif

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nim-abif:<tag>

(see `nim-abif/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nim-abif| image:: https://img.shields.io/conda/dn/bioconda/nim-abif.svg?style=flat
   :target: https://anaconda.org/bioconda/nim-abif
   :alt:   (downloads)
.. |docker_nim-abif| image:: https://quay.io/repository/biocontainers/nim-abif/status
   :target: https://quay.io/repository/biocontainers/nim-abif
.. _`nim-abif/tags`: https://quay.io/repository/biocontainers/nim-abif?tab=tags


.. raw:: html

    <script>
        var package = "nim-abif";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nim-abif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nim-abif/README.html