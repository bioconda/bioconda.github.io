:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scaffold_builder'
.. highlight: bash

scaffold_builder
================

.. conda:recipe:: scaffold_builder
   :replaces_section_title:
   :noindex:

   Scaffold\_builder\: Combining de novo and reference\-guided assembly with Scaffold\_builder.

   :homepage: http://edwards.sdsu.edu/scaffold_builder
   :developer docs: https://github.com/metageni/Scaffold_builder
   :license: GPL / GPL-3.0
   :recipe: /`scaffold_builder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaffold_builder/meta.yaml>`_

   


.. conda:package:: scaffold_builder

   |downloads_scaffold_builder| |docker_scaffold_builder|

   :versions:
      
      

      ``2.3-0``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends on mummer: 
   :depends on python: ``<3``

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

    pixi global install scaffold_builder

to add into an existing workspace instead, run::

    pixi add scaffold_builder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scaffold_builder

Alternatively, to install into a new environment, run::

    conda create -n envname scaffold_builder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scaffold_builder:<tag>

(see `scaffold_builder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scaffold_builder| image:: https://img.shields.io/conda/dn/bioconda/scaffold_builder.svg?style=flat
   :target: https://anaconda.org/bioconda/scaffold_builder
   :alt:   (downloads)
.. |docker_scaffold_builder| image:: https://quay.io/repository/biocontainers/scaffold_builder/status
   :target: https://quay.io/repository/biocontainers/scaffold_builder
.. _`scaffold_builder/tags`: https://quay.io/repository/biocontainers/scaffold_builder?tab=tags


.. raw:: html

    <script>
        var package = "scaffold_builder";
        var versions = ["2.3","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scaffold_builder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scaffold_builder/README.html