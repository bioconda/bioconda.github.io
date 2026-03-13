:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'structure'
.. highlight: bash

structure
=========

.. conda:recipe:: structure
   :replaces_section_title:
   :noindex:

   The program structure is a free software package for using multi\-locus genotype data to investigate population structure. Its uses include inferring the presence of distinct populations\, assigning individuals to populations\, studying hybrid zones\, identifying migrants and admixed individuals\, and estimating population allele frequencies in situations where many individuals are migrants or admixed. It can be applied to most of the commonly\-used genetic markers\, including SNPS\, microsatellites\, RFLPs and AFLPs.

   :homepage: https://web.stanford.edu/group/pritchardlab/structure.html
   :license: MIT
   :recipe: /`structure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/structure/meta.yaml>`_
   :links: biotools: :biotools:`Structure`

   


.. conda:package:: structure

   |downloads_structure| |docker_structure|

   :versions:
      
      

      ``2.3.4-7``,  ``2.3.4-6``,  ``2.3.4-5``,  ``2.3.4-4``,  ``2.3.4-3``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``

      

   
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

    pixi global install structure

to add into an existing workspace instead, run::

    pixi add structure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install structure

Alternatively, to install into a new environment, run::

    conda create -n envname structure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/structure:<tag>

(see `structure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_structure| image:: https://img.shields.io/conda/dn/bioconda/structure.svg?style=flat
   :target: https://anaconda.org/bioconda/structure
   :alt:   (downloads)
.. |docker_structure| image:: https://quay.io/repository/biocontainers/structure/status
   :target: https://quay.io/repository/biocontainers/structure
.. _`structure/tags`: https://quay.io/repository/biocontainers/structure?tab=tags


.. raw:: html

    <script>
        var package = "structure";
        var versions = ["2.3.4","2.3.4","2.3.4","2.3.4","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/structure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/structure/README.html