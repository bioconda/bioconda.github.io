:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosplit'
.. highlight: bash

nanosplit
=========

.. conda:recipe:: nanosplit
   :replaces_section_title:
   :noindex:

   Perform splitting of Oxford Nanopore sequencing data in a fail and pass dataset.

   :homepage: https://github.com/wdecoster/nanosplit
   :license: MIT / MIT License
   :recipe: /`nanosplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosplit/meta.yaml>`_

   


.. conda:package:: nanosplit

   |downloads_nanosplit| |docker_nanosplit|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends on biopython: 
   :depends on nanoget: 
   :depends on nanomath: 
   :depends on pypandoc: 
   :depends on python: ``3.5*``

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

    pixi global install nanosplit

to add into an existing workspace instead, run::

    pixi add nanosplit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanosplit

Alternatively, to install into a new environment, run::

    conda create -n envname nanosplit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanosplit:<tag>

(see `nanosplit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanosplit| image:: https://img.shields.io/conda/dn/bioconda/nanosplit.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosplit
   :alt:   (downloads)
.. |docker_nanosplit| image:: https://quay.io/repository/biocontainers/nanosplit/status
   :target: https://quay.io/repository/biocontainers/nanosplit
.. _`nanosplit/tags`: https://quay.io/repository/biocontainers/nanosplit?tab=tags


.. raw:: html

    <script>
        var package = "nanosplit";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosplit/README.html