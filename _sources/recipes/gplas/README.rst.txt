:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gplas'
.. highlight: bash

gplas
=====

.. conda:recipe:: gplas
   :replaces_section_title:
   :noindex:

   gplas is a tool to bin plasmid\-predicted contigs based on sequence composition\, coverage and assembly graph information. It extends the possibility of accurately binning predicted plasmid contigs into several discrete plasmid components.

   :homepage: https://gitlab.com/sirarredondo/gplas
   :license: GPL3.0
   :recipe: /`gplas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gplas/meta.yaml>`_

   


.. conda:package:: gplas

   |downloads_gplas| |docker_gplas|

   :versions:
      
      

      ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends on python: ``>=3.6``
   :depends on snakemake: ``>=5.5.4``

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

    pixi global install gplas

to add into an existing workspace instead, run::

    pixi add gplas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gplas

Alternatively, to install into a new environment, run::

    conda create -n envname gplas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gplas:<tag>

(see `gplas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gplas| image:: https://img.shields.io/conda/dn/bioconda/gplas.svg?style=flat
   :target: https://anaconda.org/bioconda/gplas
   :alt:   (downloads)
.. |docker_gplas| image:: https://quay.io/repository/biocontainers/gplas/status
   :target: https://quay.io/repository/biocontainers/gplas
.. _`gplas/tags`: https://quay.io/repository/biocontainers/gplas?tab=tags


.. raw:: html

    <script>
        var package = "gplas";
        var versions = ["0.6.1","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gplas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gplas/README.html