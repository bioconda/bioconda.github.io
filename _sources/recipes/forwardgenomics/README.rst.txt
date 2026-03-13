:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'forwardgenomics'
.. highlight: bash

forwardgenomics
===============

.. conda:recipe:: forwardgenomics
   :replaces_section_title:
   :noindex:

   Forward Genomics is a framework to associate phenotypic differences between species to differences in their genomes


   :homepage: https://github.com/hillerlab/ForwardGenomics
   :license: MIT license
   :recipe: /`forwardgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/forwardgenomics/meta.yaml>`_

   


.. conda:package:: forwardgenomics

   |downloads_forwardgenomics| |docker_forwardgenomics|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on perl: 
   :depends on phast: 
   :depends on r-base: 
   :depends on r-caper: 
   :depends on r-isotone: 
   :depends on r-phangorn: 
   :depends on r-weights: 
   :depends on r-xtermstyle: 

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

    pixi global install forwardgenomics

to add into an existing workspace instead, run::

    pixi add forwardgenomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install forwardgenomics

Alternatively, to install into a new environment, run::

    conda create -n envname forwardgenomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/forwardgenomics:<tag>

(see `forwardgenomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_forwardgenomics| image:: https://img.shields.io/conda/dn/bioconda/forwardgenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/forwardgenomics
   :alt:   (downloads)
.. |docker_forwardgenomics| image:: https://quay.io/repository/biocontainers/forwardgenomics/status
   :target: https://quay.io/repository/biocontainers/forwardgenomics
.. _`forwardgenomics/tags`: https://quay.io/repository/biocontainers/forwardgenomics?tab=tags


.. raw:: html

    <script>
        var package = "forwardgenomics";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/forwardgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/forwardgenomics/README.html