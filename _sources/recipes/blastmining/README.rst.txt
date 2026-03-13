:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastmining'
.. highlight: bash

blastmining
===========

.. conda:recipe:: blastmining
   :replaces_section_title:
   :noindex:

   blastMining\: Mining NCBI BLAST outputs

   :homepage: https://github.com/NuruddinKhoiry/blastMining
   :documentation: https://github.com/NuruddinKhoiry/blastMining/blob/master/README.md
   
   :license: GPL3 / GNU GENERAL PUBLIC V3
   :recipe: /`blastmining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastmining/meta.yaml>`_
   :links: biotools: :biotools:`blastMining`, doi: :doi:`10.5281/zenodo.7431488`

   


.. conda:package:: blastmining

   |downloads_blastmining| |docker_blastmining|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on blast: ``>=2.12.0``
   :depends on csvtk: 
   :depends on fastnumbers: 
   :depends on krona: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on python: ``>=3.6``
   :depends on taxonkit: 

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

    pixi global install blastmining

to add into an existing workspace instead, run::

    pixi add blastmining

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blastmining

Alternatively, to install into a new environment, run::

    conda create -n envname blastmining

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blastmining:<tag>

(see `blastmining/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blastmining| image:: https://img.shields.io/conda/dn/bioconda/blastmining.svg?style=flat
   :target: https://anaconda.org/bioconda/blastmining
   :alt:   (downloads)
.. |docker_blastmining| image:: https://quay.io/repository/biocontainers/blastmining/status
   :target: https://quay.io/repository/biocontainers/blastmining
.. _`blastmining/tags`: https://quay.io/repository/biocontainers/blastmining?tab=tags


.. raw:: html

    <script>
        var package = "blastmining";
        var versions = ["1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastmining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastmining/README.html