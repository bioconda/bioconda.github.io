:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastoma'
.. highlight: bash

fastoma
=======

.. conda:recipe:: fastoma
   :replaces_section_title:
   :noindex:

   FastOMA \- a package to infer orthology information among proteomes.

   :homepage: https://github.com/DessimozLab/FastOMA
   :license: MPL-2.0
   :recipe: /`fastoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastoma/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-024-02552-8`

   


.. conda:package:: fastoma

   |downloads_fastoma| |docker_fastoma|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``

      

   
   :depends on dendropy: 
   :depends on fasttree: 
   :depends on future: 
   :depends on jupyter: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on mmseqs2: 
   :depends on networkx: 
   :depends on nextflow: 
   :depends on omamer: 
   :depends on papermill: 
   :depends on pyparsing: 
   :depends on python: ``>=3.8,<3.13``
   :depends on seaborn-base: 

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

    pixi global install fastoma

to add into an existing workspace instead, run::

    pixi add fastoma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastoma

Alternatively, to install into a new environment, run::

    conda create -n envname fastoma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastoma:<tag>

(see `fastoma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastoma| image:: https://img.shields.io/conda/dn/bioconda/fastoma.svg?style=flat
   :target: https://anaconda.org/bioconda/fastoma
   :alt:   (downloads)
.. |docker_fastoma| image:: https://quay.io/repository/biocontainers/fastoma/status
   :target: https://quay.io/repository/biocontainers/fastoma
.. _`fastoma/tags`: https://quay.io/repository/biocontainers/fastoma?tab=tags


.. raw:: html

    <script>
        var package = "fastoma";
        var versions = ["0.5.1","0.5.0","0.4.1","0.4.0","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastoma/README.html