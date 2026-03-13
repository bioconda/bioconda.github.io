:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famus'
.. highlight: bash

famus
=====

.. conda:recipe:: famus
   :replaces_section_title:
   :noindex:

   Functional Annotation Method Using Supervised contrastive learning

   :homepage: https://github.com/burstein-lab/famus
   :license: MIT / MIT
   :recipe: /`famus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famus/meta.yaml>`_

   FAMUS is a supervised contrastive learning \(supcon\) based framework that annotates 
   protein sequences with function using pre\-trained models or custom training.

   NOTE\: PyTorch must be installed separately according to your system configuration.
   Visit https\:\/\/pytorch.org\/get\-started\/locally\/ for installation instructions.



.. conda:package:: famus

   |downloads_famus| |docker_famus|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.76``
   :depends on hmmer: 
   :depends on mafft: 
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on mmseqs2: 
   :depends on numpy: ``>=1.26.4,<2.0``
   :depends on pandas: ``>=2.2.3``
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on pyyaml: ``>=5.0``
   :depends on scikit-learn: ``>=1.3.0``
   :depends on scipy: ``>=1.10.0``
   :depends on seaborn: ``>=0.13.2``
   :depends on seqkit: 
   :depends on tqdm: ``>=4.66.2``

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

    pixi global install famus

to add into an existing workspace instead, run::

    pixi add famus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install famus

Alternatively, to install into a new environment, run::

    conda create -n envname famus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/famus:<tag>

(see `famus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_famus| image:: https://img.shields.io/conda/dn/bioconda/famus.svg?style=flat
   :target: https://anaconda.org/bioconda/famus
   :alt:   (downloads)
.. |docker_famus| image:: https://quay.io/repository/biocontainers/famus/status
   :target: https://quay.io/repository/biocontainers/famus
.. _`famus/tags`: https://quay.io/repository/biocontainers/famus?tab=tags


.. raw:: html

    <script>
        var package = "famus";
        var versions = ["0.2.2","0.2.1","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famus/README.html