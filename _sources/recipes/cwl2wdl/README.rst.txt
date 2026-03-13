:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cwl2wdl'
.. highlight: bash

cwl2wdl
=======

.. conda:recipe:: cwl2wdl
   :replaces_section_title:
   :noindex:

   Proof of concept converter from Common Workflow Language \(CWL\) to the Broad Institute\'s Workflow Definition Language \(WDL\).

   :homepage: https://github.com/adamstruck/cwl2wdl
   :license: MIT
   :recipe: /`cwl2wdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl/meta.yaml>`_

   


.. conda:package:: cwl2wdl

   |downloads_cwl2wdl| |docker_cwl2wdl|

   :versions:
      
      

      ``0.1dev44-2``,  ``0.1dev44-1``,  ``0.1dev44-0``,  ``0.1dev37-0``

      

   
   :depends on python: 
   :depends on pyyaml: 

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

    pixi global install cwl2wdl

to add into an existing workspace instead, run::

    pixi add cwl2wdl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cwl2wdl

Alternatively, to install into a new environment, run::

    conda create -n envname cwl2wdl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cwl2wdl:<tag>

(see `cwl2wdl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cwl2wdl| image:: https://img.shields.io/conda/dn/bioconda/cwl2wdl.svg?style=flat
   :target: https://anaconda.org/bioconda/cwl2wdl
   :alt:   (downloads)
.. |docker_cwl2wdl| image:: https://quay.io/repository/biocontainers/cwl2wdl/status
   :target: https://quay.io/repository/biocontainers/cwl2wdl
.. _`cwl2wdl/tags`: https://quay.io/repository/biocontainers/cwl2wdl?tab=tags


.. raw:: html

    <script>
        var package = "cwl2wdl";
        var versions = ["0.1dev44","0.1dev44","0.1dev44","0.1dev37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cwl2wdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cwl2wdl/README.html