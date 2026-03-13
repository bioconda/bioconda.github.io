:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smashbenchmarking'
.. highlight: bash

smashbenchmarking
=================

.. conda:recipe:: smashbenchmarking
   :replaces_section_title:
   :noindex:

   Check the accuracy of one VCF callset against another

   :homepage: http://github.com/amplab/smash/
   :license: BSD License
   :recipe: /`smashbenchmarking <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashbenchmarking>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smashbenchmarking/meta.yaml>`_

   


.. conda:package:: smashbenchmarking

   |downloads_smashbenchmarking| |docker_smashbenchmarking|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on numpy: 
   :depends on pyfasta: 
   :depends on python: ``2.7*``
   :depends on pyvcf: 

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

    pixi global install smashbenchmarking

to add into an existing workspace instead, run::

    pixi add smashbenchmarking

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smashbenchmarking

Alternatively, to install into a new environment, run::

    conda create -n envname smashbenchmarking

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smashbenchmarking:<tag>

(see `smashbenchmarking/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smashbenchmarking| image:: https://img.shields.io/conda/dn/bioconda/smashbenchmarking.svg?style=flat
   :target: https://anaconda.org/bioconda/smashbenchmarking
   :alt:   (downloads)
.. |docker_smashbenchmarking| image:: https://quay.io/repository/biocontainers/smashbenchmarking/status
   :target: https://quay.io/repository/biocontainers/smashbenchmarking
.. _`smashbenchmarking/tags`: https://quay.io/repository/biocontainers/smashbenchmarking?tab=tags


.. raw:: html

    <script>
        var package = "smashbenchmarking";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smashbenchmarking/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smashbenchmarking/README.html