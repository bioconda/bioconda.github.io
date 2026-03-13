:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baktfold'
.. highlight: bash

baktfold
========

.. conda:recipe:: baktfold
   :replaces_section_title:
   :noindex:

   Rapid \& standardized annotation of bacterial genomes\, MAGs \& plasmids using protein structural information

   :homepage: https://github.com/gbouras13/baktfold
   :documentation: https://baktfold.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`baktfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baktfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baktfold/meta.yaml>`_

   


.. conda:package:: baktfold

   |downloads_baktfold| |docker_baktfold|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on alive-progress: ``>=3.0.1``
   :depends on biopython: ``>=1.76``
   :depends on click: ``>=8.0.0``
   :depends on datasets: ``>=2.15``
   :depends on foldseek: ``10.941cd33``
   :depends on h5py: ``>=3.5``
   :depends on loguru: ``>=0.5.3``
   :depends on numpy: ``>=1.20``
   :depends on pandas: ``>=1.4.2``
   :depends on pyarrow: ``>=14.0.0``
   :depends on python: ``>=3.8,<4``
   :depends on pytorch: ``>=2.1.2``
   :depends on pyyaml: ``>=6.0``
   :depends on requests: ``>=2.25``
   :depends on sentencepiece: ``>=0.1.99``
   :depends on tqdm: ``>=4.35.0``
   :depends on transformers: ``>=4.34``
   :depends on xopen: ``>=1.5.0``

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

    pixi global install baktfold

to add into an existing workspace instead, run::

    pixi add baktfold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install baktfold

Alternatively, to install into a new environment, run::

    conda create -n envname baktfold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/baktfold:<tag>

(see `baktfold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_baktfold| image:: https://img.shields.io/conda/dn/bioconda/baktfold.svg?style=flat
   :target: https://anaconda.org/bioconda/baktfold
   :alt:   (downloads)
.. |docker_baktfold| image:: https://quay.io/repository/biocontainers/baktfold/status
   :target: https://quay.io/repository/biocontainers/baktfold
.. _`baktfold/tags`: https://quay.io/repository/biocontainers/baktfold?tab=tags


.. raw:: html

    <script>
        var package = "baktfold";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baktfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baktfold/README.html