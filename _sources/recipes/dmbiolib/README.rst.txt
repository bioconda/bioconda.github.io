:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmbiolib'
.. highlight: bash

dmbiolib
========

.. conda:recipe:: dmbiolib
   :replaces_section_title:
   :noindex:

   Library of Python functions for bioinformatics

   :homepage: https://github.com/damienmarsic/dmbiolib
   :documentation: https://dmbiolib.readthedocs.io/
   
   :license: GPL-3.0
   :recipe: /`dmbiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmbiolib/meta.yaml>`_

   


.. conda:package:: dmbiolib

   |downloads_dmbiolib| |docker_dmbiolib|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.7-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.6``

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

    pixi global install dmbiolib

to add into an existing workspace instead, run::

    pixi add dmbiolib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dmbiolib

Alternatively, to install into a new environment, run::

    conda create -n envname dmbiolib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dmbiolib:<tag>

(see `dmbiolib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dmbiolib| image:: https://img.shields.io/conda/dn/bioconda/dmbiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/dmbiolib
   :alt:   (downloads)
.. |docker_dmbiolib| image:: https://quay.io/repository/biocontainers/dmbiolib/status
   :target: https://quay.io/repository/biocontainers/dmbiolib
.. _`dmbiolib/tags`: https://quay.io/repository/biocontainers/dmbiolib?tab=tags


.. raw:: html

    <script>
        var package = "dmbiolib";
        var versions = ["0.4.3","0.4.2","0.4.1","0.4.0","0.3.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmbiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmbiolib/README.html