:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sga_ice'
.. highlight: bash

sga_ice
=======

.. conda:recipe:: sga_ice
   :replaces_section_title:
   :noindex:

   Iterative error correction of long 250 or 300 bp Illumina reads minimizes the total amount of erroneous reads\, which improves contig assembly 


   :homepage: https://github.com/hillerlab/IterativeErrorCorrection
   :license: MIT license
   :recipe: /`sga_ice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga_ice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga_ice/meta.yaml>`_

   


.. conda:package:: sga_ice

   |downloads_sga_ice| |docker_sga_ice|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends on python: 
   :depends on sga: 

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

    pixi global install sga_ice

to add into an existing workspace instead, run::

    pixi add sga_ice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sga_ice

Alternatively, to install into a new environment, run::

    conda create -n envname sga_ice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sga_ice:<tag>

(see `sga_ice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sga_ice| image:: https://img.shields.io/conda/dn/bioconda/sga_ice.svg?style=flat
   :target: https://anaconda.org/bioconda/sga_ice
   :alt:   (downloads)
.. |docker_sga_ice| image:: https://quay.io/repository/biocontainers/sga_ice/status
   :target: https://quay.io/repository/biocontainers/sga_ice
.. _`sga_ice/tags`: https://quay.io/repository/biocontainers/sga_ice?tab=tags


.. raw:: html

    <script>
        var package = "sga_ice";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga_ice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga_ice/README.html