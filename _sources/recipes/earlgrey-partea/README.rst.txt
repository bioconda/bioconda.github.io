:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'earlgrey-partea'
.. highlight: bash

earlgrey-partea
===============

.. conda:recipe:: earlgrey-partea
   :replaces_section_title:
   :noindex:

   Pangenome transposable element annotation pipeline using EarlGrey.

   :homepage: https://github.com/TobyBaril/EarlGreyParTEA
   :license: OSL-2.1
   :recipe: /`earlgrey-partea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/earlgrey-partea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/earlgrey-partea/meta.yaml>`_

   EarlGrey ParTEA extends EarlGrey for pangenome\-scale transposable element
   annotation. It processes multiple genomes in parallel\, performs cross\-species
   clustering\, and generates comprehensive repeat annotations.



.. conda:package:: earlgrey-partea

   |downloads_earlgrey-partea| |docker_earlgrey-partea|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.4-0``

      

   
   :depends on cd-hit: 
   :depends on earlgrey: ``>=7.1.0``
   :depends on graphviz: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.9,<3.13``
   :depends on snakemake-minimal: 

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

    pixi global install earlgrey-partea

to add into an existing workspace instead, run::

    pixi add earlgrey-partea

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install earlgrey-partea

Alternatively, to install into a new environment, run::

    conda create -n envname earlgrey-partea

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/earlgrey-partea:<tag>

(see `earlgrey-partea/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_earlgrey-partea| image:: https://img.shields.io/conda/dn/bioconda/earlgrey-partea.svg?style=flat
   :target: https://anaconda.org/bioconda/earlgrey-partea
   :alt:   (downloads)
.. |docker_earlgrey-partea| image:: https://quay.io/repository/biocontainers/earlgrey-partea/status
   :target: https://quay.io/repository/biocontainers/earlgrey-partea
.. _`earlgrey-partea/tags`: https://quay.io/repository/biocontainers/earlgrey-partea?tab=tags


.. raw:: html

    <script>
        var package = "earlgrey-partea";
        var versions = ["0.1.6","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/earlgrey-partea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/earlgrey-partea/README.html