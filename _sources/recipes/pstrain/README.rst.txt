:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pstrain'
.. highlight: bash

pstrain
=======

.. conda:recipe:: pstrain
   :replaces_section_title:
   :noindex:

   An Iterative Microbial Strains Profiling Algorithm for Shotgun Metagenomic Sequencing Data

   :homepage: https://github.com/wshuai294/PStrain
   :license: MIT
   :recipe: /`pstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pstrain/meta.yaml>`_
   :links: biotools: :biotools:`pstrain`

   


.. conda:package:: pstrain

   |downloads_pstrain| |docker_pstrain|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on bowtie2: 
   :depends on metaphlan: ``4``
   :depends on numpy: 
   :depends on openjdk: 
   :depends on pulp: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
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

    pixi global install pstrain

to add into an existing workspace instead, run::

    pixi add pstrain

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pstrain

Alternatively, to install into a new environment, run::

    conda create -n envname pstrain

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pstrain:<tag>

(see `pstrain/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pstrain| image:: https://img.shields.io/conda/dn/bioconda/pstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/pstrain
   :alt:   (downloads)
.. |docker_pstrain| image:: https://quay.io/repository/biocontainers/pstrain/status
   :target: https://quay.io/repository/biocontainers/pstrain
.. _`pstrain/tags`: https://quay.io/repository/biocontainers/pstrain?tab=tags


.. raw:: html

    <script>
        var package = "pstrain";
        var versions = ["1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pstrain/README.html