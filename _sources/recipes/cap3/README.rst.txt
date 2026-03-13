:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cap3'
.. highlight: bash

cap3
====

.. conda:recipe:: cap3
   :replaces_section_title:
   :noindex:

   DNA sequence assembly program.

   :homepage: http://seq.cs.iastate.edu/
   :license: Michigan Tech.
   :recipe: /`cap3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap3/meta.yaml>`_

   


.. conda:package:: cap3

   |downloads_cap3| |docker_cap3|

   :versions:
      
      

      ``10.2011-3``,  ``10.2011-2``,  ``10.2011-1``,  ``10.2011-0``

      

   
   :depends on libgcc-ng: ``>=9.3.0``

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

    pixi global install cap3

to add into an existing workspace instead, run::

    pixi add cap3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cap3

Alternatively, to install into a new environment, run::

    conda create -n envname cap3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cap3:<tag>

(see `cap3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cap3| image:: https://img.shields.io/conda/dn/bioconda/cap3.svg?style=flat
   :target: https://anaconda.org/bioconda/cap3
   :alt:   (downloads)
.. |docker_cap3| image:: https://quay.io/repository/biocontainers/cap3/status
   :target: https://quay.io/repository/biocontainers/cap3
.. _`cap3/tags`: https://quay.io/repository/biocontainers/cap3?tab=tags


.. raw:: html

    <script>
        var package = "cap3";
        var versions = ["10.2011","10.2011","10.2011","10.2011"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cap3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cap3/README.html