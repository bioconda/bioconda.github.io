:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfs'
.. highlight: bash

sfs
===

.. conda:recipe:: sfs
   :replaces_section_title:
   :noindex:

   CLI tool for site frequency spectra.

   :homepage: https://github.com/malthesr/sfs
   :license: MIT
   :recipe: /`sfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfs/meta.yaml>`_

   A Rust CLI tool for creating and working with the site frequency spectra. 



.. conda:package:: sfs

   |downloads_sfs| |docker_sfs|

   :versions:
      
      

      ``0.1.0-0``

      

   

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

    pixi global install sfs

to add into an existing workspace instead, run::

    pixi add sfs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sfs

Alternatively, to install into a new environment, run::

    conda create -n envname sfs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sfs:<tag>

(see `sfs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sfs| image:: https://img.shields.io/conda/dn/bioconda/sfs.svg?style=flat
   :target: https://anaconda.org/bioconda/sfs
   :alt:   (downloads)
.. |docker_sfs| image:: https://quay.io/repository/biocontainers/sfs/status
   :target: https://quay.io/repository/biocontainers/sfs
.. _`sfs/tags`: https://quay.io/repository/biocontainers/sfs?tab=tags


.. raw:: html

    <script>
        var package = "sfs";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfs/README.html