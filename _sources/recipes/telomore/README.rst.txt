:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telomore'
.. highlight: bash

telomore
========

.. conda:recipe:: telomore
   :replaces_section_title:
   :noindex:

   Targeted assembly of Streptomycetes telomeres.

   :homepage: https://github.com/dalofa/telomore
   :documentation: https://github.com/dalofa/telomore/blob/0.4.1/README.md
   
   :license: MIT / MIT
   :recipe: /`telomore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telomore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telomore/meta.yaml>`_

   


.. conda:package:: telomore

   |downloads_telomore| |docker_telomore|

   :versions:
      
      

      ``0.4.1-0``

      

   
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on emboss: 
   :depends on lamassemble: 
   :depends on mafft: 
   :depends on minimap2: ``>=2.25``
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on samtools: 

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

    pixi global install telomore

to add into an existing workspace instead, run::

    pixi add telomore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install telomore

Alternatively, to install into a new environment, run::

    conda create -n envname telomore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/telomore:<tag>

(see `telomore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_telomore| image:: https://img.shields.io/conda/dn/bioconda/telomore.svg?style=flat
   :target: https://anaconda.org/bioconda/telomore
   :alt:   (downloads)
.. |docker_telomore| image:: https://quay.io/repository/biocontainers/telomore/status
   :target: https://quay.io/repository/biocontainers/telomore
.. _`telomore/tags`: https://quay.io/repository/biocontainers/telomore?tab=tags


.. raw:: html

    <script>
        var package = "telomore";
        var versions = ["0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telomore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telomore/README.html