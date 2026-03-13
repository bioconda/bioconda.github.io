:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioprov'
.. highlight: bash

bioprov
=======

.. conda:recipe:: bioprov
   :replaces_section_title:
   :noindex:

   BioProv \- Provenance capture for bioinformatics workflows

   :homepage: https://github.com/vinisalazar/BioProv
   :documentation: https://bioprov.readthedocs.io/
   
   :developer docs: https://github.com/vinisalazar/bioprov
   :license: MIT / MIT
   :recipe: /`bioprov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov/meta.yaml>`_

   


.. conda:package:: bioprov

   |downloads_bioprov| |docker_bioprov|

   :versions:
      
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.20-0``

      

   
   :depends on biopython: 
   :depends on coolname: 
   :depends on coveralls: 
   :depends on dataclasses: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on prov: 
   :depends on provstore-api: 
   :depends on pydot: 
   :depends on pytest: 
   :depends on pytest-cov: 
   :depends on python: 
   :depends on tinydb: 
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

    pixi global install bioprov

to add into an existing workspace instead, run::

    pixi add bioprov

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioprov

Alternatively, to install into a new environment, run::

    conda create -n envname bioprov

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioprov:<tag>

(see `bioprov/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioprov| image:: https://img.shields.io/conda/dn/bioconda/bioprov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioprov
   :alt:   (downloads)
.. |docker_bioprov| image:: https://quay.io/repository/biocontainers/bioprov/status
   :target: https://quay.io/repository/biocontainers/bioprov
.. _`bioprov/tags`: https://quay.io/repository/biocontainers/bioprov?tab=tags


.. raw:: html

    <script>
        var package = "bioprov";
        var versions = ["0.1.23","0.1.22","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioprov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioprov/README.html