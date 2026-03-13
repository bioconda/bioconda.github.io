:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncfp'
.. highlight: bash

ncfp
====

.. conda:recipe:: ncfp
   :replaces_section_title:
   :noindex:

   A program\/module to find nt sequences that code for aa sequences

   :homepage: http://widdowquinn.github.io/ncfp/
   :documentation: https://ncfp.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/widdowquinn/ncfp
   :license: MIT / MIT
   :recipe: /`ncfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp/meta.yaml>`_

   ncfp is a script and module that facilitates recovery of nucleotide sequences from NCBI that encode a set of input protein sequences


.. conda:package:: ncfp

   |downloads_ncfp| |docker_ncfp|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on biopython: 
   :depends on bioservices: 
   :depends on python: ``>=3``
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

    pixi global install ncfp

to add into an existing workspace instead, run::

    pixi add ncfp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncfp

Alternatively, to install into a new environment, run::

    conda create -n envname ncfp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncfp:<tag>

(see `ncfp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncfp| image:: https://img.shields.io/conda/dn/bioconda/ncfp.svg?style=flat
   :target: https://anaconda.org/bioconda/ncfp
   :alt:   (downloads)
.. |docker_ncfp| image:: https://quay.io/repository/biocontainers/ncfp/status
   :target: https://quay.io/repository/biocontainers/ncfp
.. _`ncfp/tags`: https://quay.io/repository/biocontainers/ncfp?tab=tags


.. raw:: html

    <script>
        var package = "ncfp";
        var versions = ["0.2.0","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncfp/README.html