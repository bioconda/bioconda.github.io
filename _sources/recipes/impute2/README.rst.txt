:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'impute2'
.. highlight: bash

impute2
=======

.. conda:recipe:: impute2
   :replaces_section_title:
   :noindex:

   Genotype imputation and haplotype phasing

   :homepage: https://mathgen.stats.ox.ac.uk/impute/impute_v2.html
   :license: Academic use, commerically restricted (http://www.stats.ox.ac.uk/~marchini/software/gwas/gwas.html#licence)
   :recipe: /`impute2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impute2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/impute2/meta.yaml>`_
   :links: biotools: :biotools:`IMPUTE2`, doi: :doi:`10.1534/g3.111.001198`

   


.. conda:package:: impute2

   |downloads_impute2| |docker_impute2|

   :versions:
      
      

      ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``

      

   

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

    pixi global install impute2

to add into an existing workspace instead, run::

    pixi add impute2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install impute2

Alternatively, to install into a new environment, run::

    conda create -n envname impute2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/impute2:<tag>

(see `impute2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_impute2| image:: https://img.shields.io/conda/dn/bioconda/impute2.svg?style=flat
   :target: https://anaconda.org/bioconda/impute2
   :alt:   (downloads)
.. |docker_impute2| image:: https://quay.io/repository/biocontainers/impute2/status
   :target: https://quay.io/repository/biocontainers/impute2
.. _`impute2/tags`: https://quay.io/repository/biocontainers/impute2?tab=tags


.. raw:: html

    <script>
        var package = "impute2";
        var versions = ["2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/impute2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/impute2/README.html