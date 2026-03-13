:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rhinotype'
.. highlight: bash

rhinotype
=========

.. conda:recipe:: rhinotype
   :replaces_section_title:
   :noindex:

   A python tool used to automatically genotype rhinovirus.

   :homepage: https://github.com/omicscodeathon/rhinotype
   :license: MIT / MIT
   :recipe: /`rhinotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhinotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rhinotype/meta.yaml>`_

   


.. conda:package:: rhinotype

   |downloads_rhinotype| |docker_rhinotype|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.84``
   :depends on mafft: ``>=7.0``
   :depends on matplotlib-base: ``>=3.8``
   :depends on numpy: ``>=2.2``
   :depends on pandas: ``>=2.2``
   :depends on python: ``>=3.8``
   :depends on scipy: ``>=1.15``
   :depends on seaborn: ``>=0.13``

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

    pixi global install rhinotype

to add into an existing workspace instead, run::

    pixi add rhinotype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rhinotype

Alternatively, to install into a new environment, run::

    conda create -n envname rhinotype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rhinotype:<tag>

(see `rhinotype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rhinotype| image:: https://img.shields.io/conda/dn/bioconda/rhinotype.svg?style=flat
   :target: https://anaconda.org/bioconda/rhinotype
   :alt:   (downloads)
.. |docker_rhinotype| image:: https://quay.io/repository/biocontainers/rhinotype/status
   :target: https://quay.io/repository/biocontainers/rhinotype
.. _`rhinotype/tags`: https://quay.io/repository/biocontainers/rhinotype?tab=tags


.. raw:: html

    <script>
        var package = "rhinotype";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rhinotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rhinotype/README.html