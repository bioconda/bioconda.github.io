:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fcp'
.. highlight: bash

fcp
===

.. conda:recipe:: fcp
   :replaces_section_title:
   :noindex:

   Homology\- and composition\-based classifiers for assigning a taxonomic attribution to metagenomic fragments.

   :homepage: https://github.com/dparks1134/FragmentClassificationPackage
   :license: GPL3
   :recipe: /`fcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcp/meta.yaml>`_

   


.. conda:package:: fcp

   |downloads_fcp| |docker_fcp|

   :versions:
      
      

      ``1.0.7-0``

      

   
   :depends on blast: 
   :depends on libgcc: 
   :depends on python: ``2.7*``

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

    pixi global install fcp

to add into an existing workspace instead, run::

    pixi add fcp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fcp

Alternatively, to install into a new environment, run::

    conda create -n envname fcp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fcp:<tag>

(see `fcp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fcp| image:: https://img.shields.io/conda/dn/bioconda/fcp.svg?style=flat
   :target: https://anaconda.org/bioconda/fcp
   :alt:   (downloads)
.. |docker_fcp| image:: https://quay.io/repository/biocontainers/fcp/status
   :target: https://quay.io/repository/biocontainers/fcp
.. _`fcp/tags`: https://quay.io/repository/biocontainers/fcp?tab=tags


.. raw:: html

    <script>
        var package = "fcp";
        var versions = ["1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fcp/README.html