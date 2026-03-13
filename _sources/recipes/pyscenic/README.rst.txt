:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyscenic'
.. highlight: bash

pyscenic
========

.. conda:recipe:: pyscenic
   :replaces_section_title:
   :noindex:

   Python implementation of the SCENIC pipeline for transcription factor inference from single\-cell transcriptomics experiments.

   :homepage: https://github.com/aertslab/pySCENIC
   :documentation: https://scenic.aertslab.org
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyscenic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscenic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscenic/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4463`, doi: :doi:`10.1038/s41592-023-01938-4`, biotools: :biotools:`scenic`

   


.. conda:package:: pyscenic

   |downloads_pyscenic| |docker_pyscenic|

   :versions:
      
      

      ``0.12.1-1``,  ``0.12.1-0``

      

   
   :depends on arboreto: ``>=0.1.6``
   :depends on boltons: 
   :depends on ctxcore: ``>=0.2.0``
   :depends on cytoolz: 
   :depends on dask: 
   :depends on diptest: 
   :depends on distributed: 
   :depends on interlap: 
   :depends on loompy: 
   :depends on multiprocessing_on_dill: 
   :depends on networkx: 
   :depends on numba: ``>=0.51.2``
   :depends on numexpr: 
   :depends on numpy: ``<1.24``
   :depends on pandas: ``>=1.3.5``
   :depends on python: ``>=3.7,<=3.10``
   :depends on scikit-learn: ``>=0.22.2``
   :depends on scipy: 
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

    pixi global install pyscenic

to add into an existing workspace instead, run::

    pixi add pyscenic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyscenic

Alternatively, to install into a new environment, run::

    conda create -n envname pyscenic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyscenic:<tag>

(see `pyscenic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyscenic| image:: https://img.shields.io/conda/dn/bioconda/pyscenic.svg?style=flat
   :target: https://anaconda.org/bioconda/pyscenic
   :alt:   (downloads)
.. |docker_pyscenic| image:: https://quay.io/repository/biocontainers/pyscenic/status
   :target: https://quay.io/repository/biocontainers/pyscenic
.. _`pyscenic/tags`: https://quay.io/repository/biocontainers/pyscenic?tab=tags


.. raw:: html

    <script>
        var package = "pyscenic";
        var versions = ["0.12.1","0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyscenic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyscenic/README.html