:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nopilesum'
.. highlight: bash

nopilesum
=========

.. conda:recipe:: nopilesum
   :replaces_section_title:
   :noindex:

   nopilesum is a D program that functions as an alternative to GATK4\'s GetPileupSummaries.

   :homepage: https://github.com/blachlylab/nopilesum
   :license: MIT
   :recipe: /`nopilesum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nopilesum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nopilesum/meta.yaml>`_

   


.. conda:package:: nopilesum

   |downloads_nopilesum| |docker_nopilesum|

   :versions:
      
      

      ``1.1.2-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on htslib: ``>=1.15,<1.24.0a0``
   :depends on ldc: ``>=1.28.1,<2.0a0``
   :depends on libgcc-ng: ``>=10.3.0``

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

    pixi global install nopilesum

to add into an existing workspace instead, run::

    pixi add nopilesum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nopilesum

Alternatively, to install into a new environment, run::

    conda create -n envname nopilesum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nopilesum:<tag>

(see `nopilesum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nopilesum| image:: https://img.shields.io/conda/dn/bioconda/nopilesum.svg?style=flat
   :target: https://anaconda.org/bioconda/nopilesum
   :alt:   (downloads)
.. |docker_nopilesum| image:: https://quay.io/repository/biocontainers/nopilesum/status
   :target: https://quay.io/repository/biocontainers/nopilesum
.. _`nopilesum/tags`: https://quay.io/repository/biocontainers/nopilesum?tab=tags


.. raw:: html

    <script>
        var package = "nopilesum";
        var versions = ["1.1.2","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nopilesum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nopilesum/README.html