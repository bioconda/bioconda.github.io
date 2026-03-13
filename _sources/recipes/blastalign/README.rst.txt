:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastalign'
.. highlight: bash

blastalign
==========

.. conda:recipe:: blastalign
   :replaces_section_title:
   :noindex:

   BlastAlign uses NCBI Blast to align nucleotide sequences that have large indels or are otherwise difficult to align globally.

   :homepage: http://evolve.zoo.ox.ac.uk/Evolve/Blastalign.html
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`blastalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign/meta.yaml>`_

   


.. conda:package:: blastalign

   |downloads_blastalign| |docker_blastalign|

   :versions:
      
      

      ``1.4-8``,  ``1.4-7``,  ``1.4-6``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends on blast-legacy: 
   :depends on libgcc-ng: ``>=12``
   :depends on perl: 
   :depends on python: 

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

    pixi global install blastalign

to add into an existing workspace instead, run::

    pixi add blastalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blastalign

Alternatively, to install into a new environment, run::

    conda create -n envname blastalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blastalign:<tag>

(see `blastalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blastalign| image:: https://img.shields.io/conda/dn/bioconda/blastalign.svg?style=flat
   :target: https://anaconda.org/bioconda/blastalign
   :alt:   (downloads)
.. |docker_blastalign| image:: https://quay.io/repository/biocontainers/blastalign/status
   :target: https://quay.io/repository/biocontainers/blastalign
.. _`blastalign/tags`: https://quay.io/repository/biocontainers/blastalign?tab=tags


.. raw:: html

    <script>
        var package = "blastalign";
        var versions = ["1.4","1.4","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastalign/README.html