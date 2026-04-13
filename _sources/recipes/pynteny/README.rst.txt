:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynteny'
.. highlight: bash

pynteny
=======

.. conda:recipe:: pynteny
   :replaces_section_title:
   :noindex:

   Multiple HMM \- search via synteny structures in Python

   :homepage: http://github.com/robaina/Pynteny
   :documentation: https://robaina.github.io/Pynteny/
   
   :license: Apache-2.0 license
   :recipe: /`pynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynteny/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.7082448`

   Multiple HMM \- search via synteny structures in Python


.. conda:package:: pynteny

   |downloads_pynteny| |docker_pynteny|

   :versions:
      
      

      ``1.0.0-0``,  ``0.0.5-0``

      

   
   :depends on biopython: 
   :depends on hmmer: 
   :depends on libgcc-ng: ``>=12``
   :depends on numpy: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on psutil: 
   :depends on pyfastx: ``>=0.8``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on requests: 
   :depends on seqkit: 
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

    pixi global install pynteny

to add into an existing workspace instead, run::

    pixi add pynteny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pynteny

Alternatively, to install into a new environment, run::

    conda create -n envname pynteny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pynteny:<tag>

(see `pynteny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pynteny| image:: https://img.shields.io/conda/dn/bioconda/pynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/pynteny
   :alt:   (downloads)
.. |docker_pynteny| image:: https://quay.io/repository/biocontainers/pynteny/status
   :target: https://quay.io/repository/biocontainers/pynteny
.. _`pynteny/tags`: https://quay.io/repository/biocontainers/pynteny?tab=tags


.. raw:: html

    <script>
        var package = "pynteny";
        var versions = ["1.0.0","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynteny/README.html