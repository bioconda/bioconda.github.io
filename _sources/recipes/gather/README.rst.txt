:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gather'
.. highlight: bash

gather
======

.. conda:recipe:: gather
   :replaces_section_title:
   :noindex:

   Assembly of heavy and light chain BCRs using De Bruijn graphs.

   :homepage: https://github.com/Neuroimmunology-UiO/gather
   :license: MIT
   :recipe: /`gather <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gather>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gather/meta.yaml>`_

   Gather is a Python\-based toolkit for assembling heavy and light chain BCRs from sequence data using
   De Bruijn graphs. It includes modules for processing 10X and single\-cell data.



.. conda:package:: gather

   |downloads_gather| |docker_gather|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on argcomplete: 
   :depends on bcalm: ``>=2.2.3``
   :depends on biopython: 
   :depends on glob2: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: ``>=1.19``
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on rich: 
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

    pixi global install gather

to add into an existing workspace instead, run::

    pixi add gather

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gather

Alternatively, to install into a new environment, run::

    conda create -n envname gather

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gather:<tag>

(see `gather/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gather| image:: https://img.shields.io/conda/dn/bioconda/gather.svg?style=flat
   :target: https://anaconda.org/bioconda/gather
   :alt:   (downloads)
.. |docker_gather| image:: https://quay.io/repository/biocontainers/gather/status
   :target: https://quay.io/repository/biocontainers/gather
.. _`gather/tags`: https://quay.io/repository/biocontainers/gather?tab=tags


.. raw:: html

    <script>
        var package = "gather";
        var versions = ["1.0.1","1.0.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gather/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gather/README.html