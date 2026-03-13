:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ice-cream'
.. highlight: bash

ice-cream
=========

.. conda:recipe:: ice-cream
   :replaces_section_title:
   :noindex:

   ICEcream\: Integrative and Conjugative Elements Classification and gRaphical gEne Arrangement Method.

   :homepage: https://github.com/xinehc/ice-cream
   :license: MIT / MIT
   :recipe: /`ice-cream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ice-cream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ice-cream/meta.yaml>`_

   


.. conda:package:: ice-cream

   |downloads_ice-cream| |docker_ice-cream|

   :versions:
      
      

      ``3.0.0-0``,  ``2.0.0-0``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends on bakta: ``1.9.4``
   :depends on biopython: 
   :depends on blast: ``2.16.0``
   :depends on dna_features_viewer: 
   :depends on macsyfinder: ``2.1.4``
   :depends on pandas: 
   :depends on prodigal: ``2.6.3``
   :depends on python: ``3.10.14``
   :depends on r-base: 
   :depends on r-essentials: 
   :depends on r-reshape2: 
   :depends on vmatch: ``2.3.0``

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

    pixi global install ice-cream

to add into an existing workspace instead, run::

    pixi add ice-cream

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ice-cream

Alternatively, to install into a new environment, run::

    conda create -n envname ice-cream

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ice-cream:<tag>

(see `ice-cream/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ice-cream| image:: https://img.shields.io/conda/dn/bioconda/ice-cream.svg?style=flat
   :target: https://anaconda.org/bioconda/ice-cream
   :alt:   (downloads)
.. |docker_ice-cream| image:: https://quay.io/repository/biocontainers/ice-cream/status
   :target: https://quay.io/repository/biocontainers/ice-cream
.. _`ice-cream/tags`: https://quay.io/repository/biocontainers/ice-cream?tab=tags


.. raw:: html

    <script>
        var package = "ice-cream";
        var versions = ["3.0.0","2.0.0","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ice-cream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ice-cream/README.html