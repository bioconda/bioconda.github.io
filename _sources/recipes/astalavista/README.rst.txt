:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'astalavista'
.. highlight: bash

astalavista
===========

.. conda:recipe:: astalavista
   :replaces_section_title:
   :noindex:

   AStalavista is a computer program to extract alternative splicing \(AS\) events from a given genomic annotation of exon\-intron gene coordinates. By comparing all given transcripts\, AStalavista detects the variations in their splicing structure and identify all AS events \(like exon skipping\, alternate donor\, etc\) by assigning to each of them an AS code.

   :homepage: http://sammeth.net/confluence/display/ASTA/Home
   :license: BSD
   :recipe: /`astalavista <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista/meta.yaml>`_
   :links: biotools: :biotools:`astalavista`, doi: :doi:`10.1101/gr.121947.111`

   


.. conda:package:: astalavista

   |downloads_astalavista| |docker_astalavista|

   :versions:
      
      

      ``4.0-1``,  ``4.0-0``,  ``3.2-0``

      

   
   :depends on openjdk: 

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

    pixi global install astalavista

to add into an existing workspace instead, run::

    pixi add astalavista

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install astalavista

Alternatively, to install into a new environment, run::

    conda create -n envname astalavista

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/astalavista:<tag>

(see `astalavista/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_astalavista| image:: https://img.shields.io/conda/dn/bioconda/astalavista.svg?style=flat
   :target: https://anaconda.org/bioconda/astalavista
   :alt:   (downloads)
.. |docker_astalavista| image:: https://quay.io/repository/biocontainers/astalavista/status
   :target: https://quay.io/repository/biocontainers/astalavista
.. _`astalavista/tags`: https://quay.io/repository/biocontainers/astalavista?tab=tags


.. raw:: html

    <script>
        var package = "astalavista";
        var versions = ["4.0","4.0","3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/astalavista/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/astalavista/README.html