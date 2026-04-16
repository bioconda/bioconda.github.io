:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simbac'
.. highlight: bash

simbac
======

.. conda:recipe:: simbac
   :replaces_section_title:
   :noindex:

   SimBac simulates bacterial genomes with the clonal genealogy under a coalescent model with recombination.

   :homepage: https://github.com/tbrown91/SimBac
   :license: GPL-3.0
   :recipe: /`simbac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simbac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simbac/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000044`

   


.. conda:package:: simbac

   |downloads_simbac| |docker_simbac|

   :versions:
      
      

      ``0.1a-6``,  ``0.1a-5``,  ``0.1a-4``,  ``0.1a-3``,  ``0.1a-2``,  ``0.1a-1``,  ``0.1a-0``

      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install simbac

to add into an existing workspace instead, run::

    pixi add simbac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install simbac

Alternatively, to install into a new environment, run::

    conda create -n envname simbac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/simbac:<tag>

(see `simbac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_simbac| image:: https://img.shields.io/conda/dn/bioconda/simbac.svg?style=flat
   :target: https://anaconda.org/bioconda/simbac
   :alt:   (downloads)
.. |docker_simbac| image:: https://quay.io/repository/biocontainers/simbac/status
   :target: https://quay.io/repository/biocontainers/simbac
.. _`simbac/tags`: https://quay.io/repository/biocontainers/simbac?tab=tags


.. raw:: html

    <script>
        var package = "simbac";
        var versions = ["0.1a","0.1a","0.1a","0.1a","0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simbac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simbac/README.html