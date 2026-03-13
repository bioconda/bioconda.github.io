:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simwalk2'
.. highlight: bash

simwalk2
========

.. conda:recipe:: simwalk2
   :replaces_section_title:
   :noindex:

   Stochastic Statistical Analysis of Qualitative Traits

   :homepage: http://www.genetics.ucla.edu/software/
   :license: INDIVIDUAL
   :recipe: /`simwalk2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simwalk2/meta.yaml>`_

   


.. conda:package:: simwalk2

   |downloads_simwalk2| |docker_simwalk2|

   :versions:
      
      

      ``2.91-7``,  ``2.91-6``,  ``2.91-5``,  ``2.91-4``,  ``2.91-3``,  ``2.91-2``,  ``2.91-1``,  ``2.91-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``

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

    pixi global install simwalk2

to add into an existing workspace instead, run::

    pixi add simwalk2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install simwalk2

Alternatively, to install into a new environment, run::

    conda create -n envname simwalk2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/simwalk2:<tag>

(see `simwalk2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_simwalk2| image:: https://img.shields.io/conda/dn/bioconda/simwalk2.svg?style=flat
   :target: https://anaconda.org/bioconda/simwalk2
   :alt:   (downloads)
.. |docker_simwalk2| image:: https://quay.io/repository/biocontainers/simwalk2/status
   :target: https://quay.io/repository/biocontainers/simwalk2
.. _`simwalk2/tags`: https://quay.io/repository/biocontainers/simwalk2?tab=tags


.. raw:: html

    <script>
        var package = "simwalk2";
        var versions = ["2.91","2.91","2.91","2.91","2.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simwalk2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simwalk2/README.html