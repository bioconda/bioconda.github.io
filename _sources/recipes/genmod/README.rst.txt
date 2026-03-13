:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genmod'
.. highlight: bash

genmod
======

.. conda:recipe:: genmod
   :replaces_section_title:
   :noindex:

   Annotate genetic inheritance models in variant files

   :homepage: http://github.com/moonso/genmod
   :license: MIT / MIT
   :recipe: /`genmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genmod/meta.yaml>`_

   


.. conda:package:: genmod

   |downloads_genmod| |docker_genmod|

   :versions:
      
      

      ``3.10.2-0``,  ``3.10.1-0``,  ``3.10-0``,  ``3.9-0``,  ``3.8.3-0``,  ``3.8.2-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.4-0``

      

   
   :depends on click: 
   :depends on configobj: 
   :depends on extract_vcf: 
   :depends on importlib_resources: 
   :depends on interval_tree: ``>=0.3.4``
   :depends on intervaltree: ``>=3.1.0``
   :depends on ped_parser: 
   :depends on pytabix: 
   :depends on python: 
   :depends on six: 
   :depends on vcftoolbox: 

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

    pixi global install genmod

to add into an existing workspace instead, run::

    pixi add genmod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genmod

Alternatively, to install into a new environment, run::

    conda create -n envname genmod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genmod:<tag>

(see `genmod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genmod| image:: https://img.shields.io/conda/dn/bioconda/genmod.svg?style=flat
   :target: https://anaconda.org/bioconda/genmod
   :alt:   (downloads)
.. |docker_genmod| image:: https://quay.io/repository/biocontainers/genmod/status
   :target: https://quay.io/repository/biocontainers/genmod
.. _`genmod/tags`: https://quay.io/repository/biocontainers/genmod?tab=tags


.. raw:: html

    <script>
        var package = "genmod";
        var versions = ["3.10.2","3.10.1","3.10","3.9","3.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genmod/README.html