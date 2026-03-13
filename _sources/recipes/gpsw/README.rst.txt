:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gpsw'
.. highlight: bash

gpsw
====

.. conda:recipe:: gpsw
   :replaces_section_title:
   :noindex:

   GPSW is a tool for analysing Global Protein Stability Profiling data.

   :homepage: https://github.com/niekwit/gps-orfeome
   :documentation: https://gps-orfeome.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`gpsw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpsw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gpsw/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15473715`

   GPSW is a wrapper around a Snakemake workflow that analyses Global Protein Stability \(GPS\) Profiling data. GPS profiling is a powerfull genetic technique to study degron or protein stability at a massive scale in an unbiased manner.



.. conda:package:: gpsw

   |downloads_gpsw| |docker_gpsw|

   :versions:
      
      

      ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.3-0``

      

   
   :depends on apptainer: ``1.4.0``
   :depends on conda: ``24.7.1``
   :depends on numpy: ``2.2.6``
   :depends on pandas: ``2.2.3``
   :depends on pydot: ``3.0.4``
   :depends on pygithub: ``2.6.1``
   :depends on pygments: 
   :depends on python: ``3.12``
   :depends on snakemake-minimal: ``8.25.5``

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

    pixi global install gpsw

to add into an existing workspace instead, run::

    pixi add gpsw

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gpsw

Alternatively, to install into a new environment, run::

    conda create -n envname gpsw

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gpsw:<tag>

(see `gpsw/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gpsw| image:: https://img.shields.io/conda/dn/bioconda/gpsw.svg?style=flat
   :target: https://anaconda.org/bioconda/gpsw
   :alt:   (downloads)
.. |docker_gpsw| image:: https://quay.io/repository/biocontainers/gpsw/status
   :target: https://quay.io/repository/biocontainers/gpsw
.. _`gpsw/tags`: https://quay.io/repository/biocontainers/gpsw?tab=tags


.. raw:: html

    <script>
        var package = "gpsw";
        var versions = ["0.9.1","0.9.0","0.8.0","0.7.0","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gpsw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gpsw/README.html