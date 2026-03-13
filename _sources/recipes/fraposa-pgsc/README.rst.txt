:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fraposa-pgsc'
.. highlight: bash

fraposa-pgsc
============

.. conda:recipe:: fraposa-pgsc
   :replaces_section_title:
   :noindex:

   Tools to perform ancestry projection to a reference dataset within the calculator pipeline \(pgsc\_calc\)

   :homepage: https://github.com/PGScatalog/fraposa_pgsc
   :license: MIT
   :recipe: /`fraposa-pgsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraposa-pgsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraposa-pgsc/meta.yaml>`_

   


.. conda:package:: fraposa-pgsc

   |downloads_fraposa-pgsc| |docker_fraposa-pgsc|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.1-0``

      

   
   :depends on matplotlib-base: ``>=3.7.1,<4.0.0``
   :depends on numpy: ``>=1.24.2,<2.0.0``
   :depends on pandas: ``>=1.5.3,<2.0.0``
   :depends on pyplink: ``>=1.3.5,<2.0.0``
   :depends on python: ``>=3.10.0,<4.0.0``
   :depends on scikit-learn: ``>=1.2.1,<2.0.0``

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

    pixi global install fraposa-pgsc

to add into an existing workspace instead, run::

    pixi add fraposa-pgsc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fraposa-pgsc

Alternatively, to install into a new environment, run::

    conda create -n envname fraposa-pgsc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fraposa-pgsc:<tag>

(see `fraposa-pgsc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fraposa-pgsc| image:: https://img.shields.io/conda/dn/bioconda/fraposa-pgsc.svg?style=flat
   :target: https://anaconda.org/bioconda/fraposa-pgsc
   :alt:   (downloads)
.. |docker_fraposa-pgsc| image:: https://quay.io/repository/biocontainers/fraposa-pgsc/status
   :target: https://quay.io/repository/biocontainers/fraposa-pgsc
.. _`fraposa-pgsc/tags`: https://quay.io/repository/biocontainers/fraposa-pgsc?tab=tags


.. raw:: html

    <script>
        var package = "fraposa-pgsc";
        var versions = ["1.0.2","1.0.1","1.0.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraposa-pgsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraposa-pgsc/README.html