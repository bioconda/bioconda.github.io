:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pifcosm'
.. highlight: bash

pifcosm
=======

.. conda:recipe:: pifcosm
   :replaces_section_title:
   :noindex:

   PisCoSm is a pipeline to construct supermatrix trees from GenBank data

   :homepage: https://github.com/RybergGroup/PifCoSm
   :license: GPL-3.0-only
   :recipe: /`pifcosm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1922539117`

   


.. conda:package:: pifcosm

   |downloads_pifcosm| |docker_pifcosm|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on cd-hit: 
   :depends on fasttree: 
   :depends on gblocks: 
   :depends on hmmer: 
   :depends on mafft: 
   :depends on muscle: 
   :depends on perl: 
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on phylommand: 
   :depends on raxml: 
   :depends on roguenarok: 

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

    pixi global install pifcosm

to add into an existing workspace instead, run::

    pixi add pifcosm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pifcosm

Alternatively, to install into a new environment, run::

    conda create -n envname pifcosm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pifcosm:<tag>

(see `pifcosm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pifcosm| image:: https://img.shields.io/conda/dn/bioconda/pifcosm.svg?style=flat
   :target: https://anaconda.org/bioconda/pifcosm
   :alt:   (downloads)
.. |docker_pifcosm| image:: https://quay.io/repository/biocontainers/pifcosm/status
   :target: https://quay.io/repository/biocontainers/pifcosm
.. _`pifcosm/tags`: https://quay.io/repository/biocontainers/pifcosm?tab=tags


.. raw:: html

    <script>
        var package = "pifcosm";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pifcosm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pifcosm/README.html