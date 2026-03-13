:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ima3'
.. highlight: bash

ima3
====

.. conda:recipe:: ima3
   :replaces_section_title:
   :noindex:

   IMa3 can be used to solve a fundamental problem in evolutionary genetics\, which is to jointly consider phylogenetic history and pouplation genetic history\, including gene exchange. IMa3 can be used to estimate the rooted phylogenetic tree for multiple populations\, and does so while integrating over all possible Isolation\-with\-Migration models

   :homepage: https://github.com/jodyhey/IMa3
   :license: GPL (>= 3)
   :recipe: /`ima3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ima3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ima3/meta.yaml>`_

   


.. conda:package:: ima3

   |downloads_ima3| |docker_ima3|

   :versions:
      
      

      ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on openmpi: ``>=1.8``
   :depends on openmpi: ``>=5.0.6,<6.0a0``

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

    pixi global install ima3

to add into an existing workspace instead, run::

    pixi add ima3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ima3

Alternatively, to install into a new environment, run::

    conda create -n envname ima3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ima3:<tag>

(see `ima3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ima3| image:: https://img.shields.io/conda/dn/bioconda/ima3.svg?style=flat
   :target: https://anaconda.org/bioconda/ima3
   :alt:   (downloads)
.. |docker_ima3| image:: https://quay.io/repository/biocontainers/ima3/status
   :target: https://quay.io/repository/biocontainers/ima3
.. _`ima3/tags`: https://quay.io/repository/biocontainers/ima3?tab=tags


.. raw:: html

    <script>
        var package = "ima3";
        var versions = ["1.13","1.13","1.13","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ima3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ima3/README.html