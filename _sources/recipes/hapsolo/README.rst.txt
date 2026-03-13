:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapsolo'
.. highlight: bash

hapsolo
=======

.. conda:recipe:: hapsolo
   :replaces_section_title:
   :noindex:

   An optimization approach for removing secondary haplotigs during diploid genome assembly and scaffolding.

   :homepage: https://github.com/esolares/HapSolo
   :license: GPL / GPL-2.0
   :recipe: /`hapsolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapsolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapsolo/meta.yaml>`_

   


.. conda:package:: hapsolo

   |downloads_hapsolo| |docker_hapsolo|

   :versions:
      
      

      ``2021.10.09-0``

      

   
   :depends on augustus: 
   :depends on blast: 
   :depends on blat: ``>=36``
   :depends on braker: 
   :depends on busco: ``3.0.*``
   :depends on matplotlib-base: ``<3``
   :depends on minimap2: 
   :depends on mummer: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on python: ``2.7.*``
   :depends on quast: 
   :depends on ucsc-fatotwobit: 

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

    pixi global install hapsolo

to add into an existing workspace instead, run::

    pixi add hapsolo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hapsolo

Alternatively, to install into a new environment, run::

    conda create -n envname hapsolo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hapsolo:<tag>

(see `hapsolo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hapsolo| image:: https://img.shields.io/conda/dn/bioconda/hapsolo.svg?style=flat
   :target: https://anaconda.org/bioconda/hapsolo
   :alt:   (downloads)
.. |docker_hapsolo| image:: https://quay.io/repository/biocontainers/hapsolo/status
   :target: https://quay.io/repository/biocontainers/hapsolo
.. _`hapsolo/tags`: https://quay.io/repository/biocontainers/hapsolo?tab=tags


.. raw:: html

    <script>
        var package = "hapsolo";
        var versions = ["2021.10.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapsolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapsolo/README.html