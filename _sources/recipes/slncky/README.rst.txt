:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slncky'
.. highlight: bash

slncky
======

.. conda:recipe:: slncky
   :replaces_section_title:
   :noindex:

   slncky is a tool for lncRNA discovery from RNA\-Seq data. slncky filters a high\-quality set of noncoding transcripts\, discovers lncRNA orthologs\, and characterizes conserved lncRNA evolution. slncky was developed as a collaboration between the Garber Lab at UMass Medical and the Regev Lab at the Broad Institute.

   :homepage: https://github.com/slncky/slncky
   :license: MIT / MIT
   :recipe: /`slncky <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slncky/meta.yaml>`_

   


.. conda:package:: slncky

   |downloads_slncky| |docker_slncky|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on bedtools: ``>=2.17.0,<=2.24.0``
   :depends on lastz: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on ucsc-liftover: 

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

    pixi global install slncky

to add into an existing workspace instead, run::

    pixi add slncky

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install slncky

Alternatively, to install into a new environment, run::

    conda create -n envname slncky

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/slncky:<tag>

(see `slncky/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_slncky| image:: https://img.shields.io/conda/dn/bioconda/slncky.svg?style=flat
   :target: https://anaconda.org/bioconda/slncky
   :alt:   (downloads)
.. |docker_slncky| image:: https://quay.io/repository/biocontainers/slncky/status
   :target: https://quay.io/repository/biocontainers/slncky
.. _`slncky/tags`: https://quay.io/repository/biocontainers/slncky?tab=tags


.. raw:: html

    <script>
        var package = "slncky";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slncky/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slncky/README.html