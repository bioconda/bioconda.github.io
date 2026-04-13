:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ispcr'
.. highlight: bash

ispcr
=====

.. conda:recipe:: ispcr
   :replaces_section_title:
   :noindex:

   In silico PCR

   :homepage: https://users.soe.ucsc.edu/~kent/
   :license: License is hereby granted for personal, academic, and non-profit use.
   :recipe: /`ispcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ispcr/meta.yaml>`_
   :links: biotools: :biotools:`ispcr`

   


.. conda:package:: ispcr

   |downloads_ispcr| |docker_ispcr|

   :versions:
      
      

      ``33-6``,  ``33-5``,  ``33-4``,  ``33-3``,  ``33-2``,  ``33-1``,  ``33-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install ispcr

to add into an existing workspace instead, run::

    pixi add ispcr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ispcr

Alternatively, to install into a new environment, run::

    conda create -n envname ispcr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ispcr:<tag>

(see `ispcr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ispcr| image:: https://img.shields.io/conda/dn/bioconda/ispcr.svg?style=flat
   :target: https://anaconda.org/bioconda/ispcr
   :alt:   (downloads)
.. |docker_ispcr| image:: https://quay.io/repository/biocontainers/ispcr/status
   :target: https://quay.io/repository/biocontainers/ispcr
.. _`ispcr/tags`: https://quay.io/repository/biocontainers/ispcr?tab=tags


.. raw:: html

    <script>
        var package = "ispcr";
        var versions = ["33","33","33","33","33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ispcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ispcr/README.html