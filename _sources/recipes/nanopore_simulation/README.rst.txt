:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopore_simulation'
.. highlight: bash

nanopore_simulation
===================

.. conda:recipe:: nanopore_simulation
   :replaces_section_title:
   :noindex:

   Nanopore SimulatION is a tool for simulating an Oxfornd Nanopore Technologies MinION device for bioinformatic development.

   :homepage: https://github.com/crohrandt/nanopore_simulation
   :license: MPL-2.0
   :recipe: /`nanopore_simulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation/meta.yaml>`_

   


.. conda:package:: nanopore_simulation

   |downloads_nanopore_simulation| |docker_nanopore_simulation|

   :versions:
      
      

      ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends on biopython: 
   :depends on h5py: 
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on scipy: 

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

    pixi global install nanopore_simulation

to add into an existing workspace instead, run::

    pixi add nanopore_simulation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanopore_simulation

Alternatively, to install into a new environment, run::

    conda create -n envname nanopore_simulation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanopore_simulation:<tag>

(see `nanopore_simulation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanopore_simulation| image:: https://img.shields.io/conda/dn/bioconda/nanopore_simulation.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopore_simulation
   :alt:   (downloads)
.. |docker_nanopore_simulation| image:: https://quay.io/repository/biocontainers/nanopore_simulation/status
   :target: https://quay.io/repository/biocontainers/nanopore_simulation
.. _`nanopore_simulation/tags`: https://quay.io/repository/biocontainers/nanopore_simulation?tab=tags


.. raw:: html

    <script>
        var package = "nanopore_simulation";
        var versions = ["0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopore_simulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopore_simulation/README.html