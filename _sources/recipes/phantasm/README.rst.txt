:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phantasm'
.. highlight: bash

phantasm
========

.. conda:recipe:: phantasm
   :replaces_section_title:
   :noindex:

   PHANTASM\: PHylogenomic ANalyses for the TAxonomy and Systematics of Microbes

   :homepage: https://github.com/dr-joe-wirth/phantasm
   :license: GPL3 / MIT
   :recipe: /`phantasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phantasm/meta.yaml>`_

   


.. conda:package:: phantasm

   |downloads_phantasm| |docker_phantasm|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends on bioconductor-decipher: 
   :depends on biopython: 
   :depends on blast: 
   :depends on fasttree: 
   :depends on iqtree: ``>=1.6.12``
   :depends on muscle: ``>=5``
   :depends on numpy: 
   :depends on parasail-python: 
   :depends on phantasm-xenogi: 
   :depends on pyani: 
   :depends on python: ``>=3.9``
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-dendextend: 
   :depends on r-gplots: 
   :depends on rpy2: 
   :depends on scipy: 
   :depends on semver: 
   :depends on textdistance: 

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

    pixi global install phantasm

to add into an existing workspace instead, run::

    pixi add phantasm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phantasm

Alternatively, to install into a new environment, run::

    conda create -n envname phantasm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phantasm:<tag>

(see `phantasm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phantasm| image:: https://img.shields.io/conda/dn/bioconda/phantasm.svg?style=flat
   :target: https://anaconda.org/bioconda/phantasm
   :alt:   (downloads)
.. |docker_phantasm| image:: https://quay.io/repository/biocontainers/phantasm/status
   :target: https://quay.io/repository/biocontainers/phantasm
.. _`phantasm/tags`: https://quay.io/repository/biocontainers/phantasm?tab=tags


.. raw:: html

    <script>
        var package = "phantasm";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phantasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phantasm/README.html