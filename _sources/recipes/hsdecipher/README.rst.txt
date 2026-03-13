:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hsdecipher'
.. highlight: bash

hsdecipher
==========

.. conda:recipe:: hsdecipher
   :replaces_section_title:
   :noindex:

   Pipeline for the downstream analysis of highly similar duplicate genes

   :homepage: https://github.com/zx0223winner/HSDecipher
   :license: GPL-3.0-or-later
   :recipe: /`hsdecipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdecipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hsdecipher/meta.yaml>`_

   Many tools have been developed to measure the degree of similarity between gene duplicates within and between species.Here\, we present HSDecipher\, a bioinformatics pipeline to assist users in the analysis and visualization of highly similar duplicate genes \(HSDs\). We describe the steps for analysis of HSDs statistics\, expanding HSD gene set\, and visualizing the results of comparative genomic analyses. HSDecipher represents a useful tool for researchers exploring the evolution of duplicate genes in select eukaryotic species.


.. conda:package:: hsdecipher

   |downloads_hsdecipher| |docker_hsdecipher|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on seaborn: 

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

    pixi global install hsdecipher

to add into an existing workspace instead, run::

    pixi add hsdecipher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hsdecipher

Alternatively, to install into a new environment, run::

    conda create -n envname hsdecipher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hsdecipher:<tag>

(see `hsdecipher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hsdecipher| image:: https://img.shields.io/conda/dn/bioconda/hsdecipher.svg?style=flat
   :target: https://anaconda.org/bioconda/hsdecipher
   :alt:   (downloads)
.. |docker_hsdecipher| image:: https://quay.io/repository/biocontainers/hsdecipher/status
   :target: https://quay.io/repository/biocontainers/hsdecipher
.. _`hsdecipher/tags`: https://quay.io/repository/biocontainers/hsdecipher?tab=tags


.. raw:: html

    <script>
        var package = "hsdecipher";
        var versions = ["1.1.2","1.1.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hsdecipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hsdecipher/README.html