:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamroaster'
.. highlight: bash

hamroaster
==========

.. conda:recipe:: hamroaster
   :replaces_section_title:
   :noindex:

   An analysis pipeline to compare the output of different AMR detection tools and provide metrics of their performance

   :homepage: https://github.com/ewissel/hAMRoaster
   :license: CC0
   :recipe: /`hamroaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamroaster/meta.yaml>`_

   


.. conda:package:: hamroaster

   |downloads_hamroaster| |docker_hamroaster|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 

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

    pixi global install hamroaster

to add into an existing workspace instead, run::

    pixi add hamroaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hamroaster

Alternatively, to install into a new environment, run::

    conda create -n envname hamroaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hamroaster:<tag>

(see `hamroaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hamroaster| image:: https://img.shields.io/conda/dn/bioconda/hamroaster.svg?style=flat
   :target: https://anaconda.org/bioconda/hamroaster
   :alt:   (downloads)
.. |docker_hamroaster| image:: https://quay.io/repository/biocontainers/hamroaster/status
   :target: https://quay.io/repository/biocontainers/hamroaster
.. _`hamroaster/tags`: https://quay.io/repository/biocontainers/hamroaster?tab=tags


.. raw:: html

    <script>
        var package = "hamroaster";
        var versions = ["2.0","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamroaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamroaster/README.html