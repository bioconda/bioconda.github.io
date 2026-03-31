:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trnadecoder'
.. highlight: bash

trnadecoder
===========

.. conda:recipe:: trnadecoder
   :replaces_section_title:
   :noindex:

   Isodecoder level analysis for Nano\-tRNAseq runs

   :homepage: https://pypi.org/project/tRNAdecoder/
   :license: MIT
   :recipe: /`trnadecoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnadecoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trnadecoder/meta.yaml>`_

   


.. conda:package:: trnadecoder

   |downloads_trnadecoder| |docker_trnadecoder|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends on mappy: ``2.30``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3.9``

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

    pixi global install trnadecoder

to add into an existing workspace instead, run::

    pixi add trnadecoder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trnadecoder

Alternatively, to install into a new environment, run::

    conda create -n envname trnadecoder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trnadecoder:<tag>

(see `trnadecoder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trnadecoder| image:: https://img.shields.io/conda/dn/bioconda/trnadecoder.svg?style=flat
   :target: https://anaconda.org/bioconda/trnadecoder
   :alt:   (downloads)
.. |docker_trnadecoder| image:: https://quay.io/repository/biocontainers/trnadecoder/status
   :target: https://quay.io/repository/biocontainers/trnadecoder
.. _`trnadecoder/tags`: https://quay.io/repository/biocontainers/trnadecoder?tab=tags


.. raw:: html

    <script>
        var package = "trnadecoder";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trnadecoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trnadecoder/README.html