:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psosp'
.. highlight: bash

psosp
=====

.. conda:recipe:: psosp
   :replaces_section_title:
   :noindex:

   PSOSP \(Prophage SOS\-dependency Predictor\)

   :homepage: https://github.com/mujiezhang/PSOSP
   :documentation: https://github.com/mujiezhang/PSOSP/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`psosp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psosp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psosp/meta.yaml>`_

   PSOSP \(Prophage SOS\-dependency Predictor\) is a novel bioinformatics tool 
   to predict prophage induction modes by analyzing the heterology index \(HI\) 
   of LexA protein binding to target DNA\, classifying prophages into 
   SOS\-dependent \(SdPs\) and SOS\-independent \(SiPs\).



.. conda:package:: psosp

   |downloads_psosp| |docker_psosp|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on biopython: 
   :depends on checkv: ``>=1.0.3``
   :depends on diamond: ``>=2.0.4``
   :depends on meme: ``>=5.5.5``
   :depends on prodigal: 
   :depends on python: ``>=3.10``
   :depends on scikit-learn: 

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

    pixi global install psosp

to add into an existing workspace instead, run::

    pixi add psosp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psosp

Alternatively, to install into a new environment, run::

    conda create -n envname psosp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psosp:<tag>

(see `psosp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psosp| image:: https://img.shields.io/conda/dn/bioconda/psosp.svg?style=flat
   :target: https://anaconda.org/bioconda/psosp
   :alt:   (downloads)
.. |docker_psosp| image:: https://quay.io/repository/biocontainers/psosp/status
   :target: https://quay.io/repository/biocontainers/psosp
.. _`psosp/tags`: https://quay.io/repository/biocontainers/psosp?tab=tags


.. raw:: html

    <script>
        var package = "psosp";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psosp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psosp/README.html