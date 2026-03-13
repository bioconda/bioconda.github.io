:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prscs'
.. highlight: bash

prscs
=====

.. conda:recipe:: prscs
   :replaces_section_title:
   :noindex:

   PRS\-CS is a Python based command line tool that infers posterior SNP effect sizes under continuous shrinkage \(CS\) priors using GWAS summary statistics and an external LD reference panel.


   :homepage: https://github.com/getian107/PRScs
   :license: MIT
   :recipe: /`prscs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prscs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prscs/meta.yaml>`_

   


.. conda:package:: prscs

   |downloads_prscs| |docker_prscs|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on h5py: 
   :depends on python: 
   :depends on scipy: 

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

    pixi global install prscs

to add into an existing workspace instead, run::

    pixi add prscs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prscs

Alternatively, to install into a new environment, run::

    conda create -n envname prscs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prscs:<tag>

(see `prscs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prscs| image:: https://img.shields.io/conda/dn/bioconda/prscs.svg?style=flat
   :target: https://anaconda.org/bioconda/prscs
   :alt:   (downloads)
.. |docker_prscs| image:: https://quay.io/repository/biocontainers/prscs/status
   :target: https://quay.io/repository/biocontainers/prscs
.. _`prscs/tags`: https://quay.io/repository/biocontainers/prscs?tab=tags


.. raw:: html

    <script>
        var package = "prscs";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prscs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prscs/README.html