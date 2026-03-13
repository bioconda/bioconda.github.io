:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'siren-rnai'
.. highlight: bash

siren-rnai
==========

.. conda:recipe:: siren-rnai
   :replaces_section_title:
   :noindex:

   SIREN\: Suite for Intelligent RNAi design and Evaluation of Nucleotide sequences

   :homepage: https://github.com/pablovargasmejia/SIREN
   :license: GPL-3.0-only
   :recipe: /`siren-rnai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siren-rnai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siren-rnai/meta.yaml>`_

   


.. conda:package:: siren-rnai

   |downloads_siren-rnai| |docker_siren-rnai|

   :versions:
      
      

      ``0.1.9-0``

      

   
   :depends on biopython: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on primer3-py: 
   :depends on python: ``>=3.9``
   :depends on rnahybrid: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tqdm: 

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

    pixi global install siren-rnai

to add into an existing workspace instead, run::

    pixi add siren-rnai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install siren-rnai

Alternatively, to install into a new environment, run::

    conda create -n envname siren-rnai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/siren-rnai:<tag>

(see `siren-rnai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_siren-rnai| image:: https://img.shields.io/conda/dn/bioconda/siren-rnai.svg?style=flat
   :target: https://anaconda.org/bioconda/siren-rnai
   :alt:   (downloads)
.. |docker_siren-rnai| image:: https://quay.io/repository/biocontainers/siren-rnai/status
   :target: https://quay.io/repository/biocontainers/siren-rnai
.. _`siren-rnai/tags`: https://quay.io/repository/biocontainers/siren-rnai?tab=tags


.. raw:: html

    <script>
        var package = "siren-rnai";
        var versions = ["0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/siren-rnai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/siren-rnai/README.html