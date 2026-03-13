:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloblitz'
.. highlight: bash

phyloblitz
==========

.. conda:recipe:: phyloblitz
   :replaces_section_title:
   :noindex:

   Rapid SSU rRNA marker gene screening of long read metagenomes.

   :homepage: https://github.com/kbseah/phyloblitz
   :documentation: https://github.com/kbseah/phyloblitz#readme
   
   :license: MIT / MIT
   :recipe: /`phyloblitz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloblitz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloblitz/meta.yaml>`_

   


.. conda:package:: phyloblitz

   |downloads_phyloblitz| |docker_phyloblitz|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on isonclust3: ``>=0.3.0,<0.4``
   :depends on matplotlib-base: ``>=3.10.8,<4``
   :depends on minimap2: ``>=2.30,<3``
   :depends on mistune: ``>=3.1.4,<4``
   :depends on numpy: ``>=2.3.5,<3``
   :depends on oxli: ``>=0.3.0,<0.4``
   :depends on pyfastx: ``>=2.2.0,<3``
   :depends on pymarkovclustering: ``>=0.1.1,<0.2``
   :depends on pysam: ``>=0.23.3,<0.24``
   :depends on python: ``>=3.10,<3.14``
   :depends on rich-click: ``>=1.9.4,<2``
   :depends on spoa: ``>=4.1.5,<5``

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

    pixi global install phyloblitz

to add into an existing workspace instead, run::

    pixi add phyloblitz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phyloblitz

Alternatively, to install into a new environment, run::

    conda create -n envname phyloblitz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phyloblitz:<tag>

(see `phyloblitz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phyloblitz| image:: https://img.shields.io/conda/dn/bioconda/phyloblitz.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloblitz
   :alt:   (downloads)
.. |docker_phyloblitz| image:: https://quay.io/repository/biocontainers/phyloblitz/status
   :target: https://quay.io/repository/biocontainers/phyloblitz
.. _`phyloblitz/tags`: https://quay.io/repository/biocontainers/phyloblitz?tab=tags


.. raw:: html

    <script>
        var package = "phyloblitz";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloblitz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloblitz/README.html