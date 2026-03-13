:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snapgene-reader'
.. highlight: bash

snapgene-reader
===============

.. conda:recipe:: snapgene-reader
   :replaces_section_title:
   :noindex:

   Convert Snapgene \*.dna files dict\/json\/biopython.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/SnapGeneReader
   :documentation: https://github.com/Edinburgh-Genome-Foundry/SnapGeneReader/blob/v0.1.23/README.rst
   
   :license: MIT / MIT
   :recipe: /`snapgene-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader/meta.yaml>`_

   


.. conda:package:: snapgene-reader

   |downloads_snapgene-reader| |docker_snapgene-reader|

   :versions:
      
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.21-0``,  ``0.1.20-0``

      

   
   :depends on biopython: 
   :depends on html2text: 
   :depends on python: ``>=3``
   :depends on xmltodict: 

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

    pixi global install snapgene-reader

to add into an existing workspace instead, run::

    pixi add snapgene-reader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snapgene-reader

Alternatively, to install into a new environment, run::

    conda create -n envname snapgene-reader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snapgene-reader:<tag>

(see `snapgene-reader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snapgene-reader| image:: https://img.shields.io/conda/dn/bioconda/snapgene-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/snapgene-reader
   :alt:   (downloads)
.. |docker_snapgene-reader| image:: https://quay.io/repository/biocontainers/snapgene-reader/status
   :target: https://quay.io/repository/biocontainers/snapgene-reader
.. _`snapgene-reader/tags`: https://quay.io/repository/biocontainers/snapgene-reader?tab=tags


.. raw:: html

    <script>
        var package = "snapgene-reader";
        var versions = ["0.1.23","0.1.22","0.1.21","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snapgene-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snapgene-reader/README.html