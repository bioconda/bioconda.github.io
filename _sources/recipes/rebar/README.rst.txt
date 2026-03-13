:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rebar'
.. highlight: bash

rebar
=====

.. conda:recipe:: rebar
   :replaces_section_title:
   :noindex:

   Genomic recombination detection using mutational barcodes.

   :homepage: https://github.com/phac-nml/rebar
   :license: APACHE / Apache-2.0
   :recipe: /`rebar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebar/meta.yaml>`_

   


.. conda:package:: rebar

   |downloads_rebar| |docker_rebar|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   

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

    pixi global install rebar

to add into an existing workspace instead, run::

    pixi add rebar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rebar

Alternatively, to install into a new environment, run::

    conda create -n envname rebar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rebar:<tag>

(see `rebar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rebar| image:: https://img.shields.io/conda/dn/bioconda/rebar.svg?style=flat
   :target: https://anaconda.org/bioconda/rebar
   :alt:   (downloads)
.. |docker_rebar| image:: https://quay.io/repository/biocontainers/rebar/status
   :target: https://quay.io/repository/biocontainers/rebar
.. _`rebar/tags`: https://quay.io/repository/biocontainers/rebar?tab=tags


.. raw:: html

    <script>
        var package = "rebar";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rebar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rebar/README.html