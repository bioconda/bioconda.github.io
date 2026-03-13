:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'met4j'
.. highlight: bash

met4j
=====

.. conda:recipe:: met4j
   :replaces_section_title:
   :noindex:

   Met4J is an open\-source Java library dedicated to the structural analysis of metabolic networks

   :homepage: https://forge.inrae.fr/metexplore/met4j/-/blob/master/met4j-toolbox/README.md
   :license: CeCILL-2.1
   :recipe: /`met4j <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/met4j>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/met4j/meta.yaml>`_

   


.. conda:package:: met4j

   |downloads_met4j| |docker_met4j|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends on openjdk: ``>17``

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

    pixi global install met4j

to add into an existing workspace instead, run::

    pixi add met4j

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install met4j

Alternatively, to install into a new environment, run::

    conda create -n envname met4j

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/met4j:<tag>

(see `met4j/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_met4j| image:: https://img.shields.io/conda/dn/bioconda/met4j.svg?style=flat
   :target: https://anaconda.org/bioconda/met4j
   :alt:   (downloads)
.. |docker_met4j| image:: https://quay.io/repository/biocontainers/met4j/status
   :target: https://quay.io/repository/biocontainers/met4j
.. _`met4j/tags`: https://quay.io/repository/biocontainers/met4j?tab=tags


.. raw:: html

    <script>
        var package = "met4j";
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.0","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/met4j/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/met4j/README.html