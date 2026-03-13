:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcx-tk'
.. highlight: bash

rcx-tk
======

.. conda:recipe:: rcx-tk
   :replaces_section_title:
   :noindex:

   This package adjusts and cleans the metadata file provided by a user.

   :homepage: https://github.com/RECETOX/rcx-tk
   :license: MIT
   :recipe: /`rcx-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcx-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcx-tk/meta.yaml>`_

   


.. conda:package:: rcx-tk

   |downloads_rcx-tk| |docker_rcx-tk|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on mypy: ``>=1.10.1,<2.0.0``
   :depends on openpyxl: ``>=3.1.5,<4.0.0``
   :depends on pandas: ``>=3.0.1,<4.0.0``
   :depends on pandas-stubs: ``>=2.2.2.240603,<3.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``

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

    pixi global install rcx-tk

to add into an existing workspace instead, run::

    pixi add rcx-tk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rcx-tk

Alternatively, to install into a new environment, run::

    conda create -n envname rcx-tk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rcx-tk:<tag>

(see `rcx-tk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rcx-tk| image:: https://img.shields.io/conda/dn/bioconda/rcx-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/rcx-tk
   :alt:   (downloads)
.. |docker_rcx-tk| image:: https://quay.io/repository/biocontainers/rcx-tk/status
   :target: https://quay.io/repository/biocontainers/rcx-tk
.. _`rcx-tk/tags`: https://quay.io/repository/biocontainers/rcx-tk?tab=tags


.. raw:: html

    <script>
        var package = "rcx-tk";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcx-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcx-tk/README.html