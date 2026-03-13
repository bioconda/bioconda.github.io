:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'norns'
.. highlight: bash

norns
=====

.. conda:recipe:: norns
   :replaces_section_title:
   :noindex:

   Simple yaml\-based config module

   :homepage: https://github.com/simonvh/norns
   :license: MIT / MIT License
   :recipe: /`norns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns/meta.yaml>`_

   


.. conda:package:: norns

   |downloads_norns| |docker_norns|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends on appdirs: 
   :depends on nose: 
   :depends on python: 
   :depends on pyyaml: 

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

    pixi global install norns

to add into an existing workspace instead, run::

    pixi add norns

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install norns

Alternatively, to install into a new environment, run::

    conda create -n envname norns

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/norns:<tag>

(see `norns/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_norns| image:: https://img.shields.io/conda/dn/bioconda/norns.svg?style=flat
   :target: https://anaconda.org/bioconda/norns
   :alt:   (downloads)
.. |docker_norns| image:: https://quay.io/repository/biocontainers/norns/status
   :target: https://quay.io/repository/biocontainers/norns
.. _`norns/tags`: https://quay.io/repository/biocontainers/norns?tab=tags


.. raw:: html

    <script>
        var package = "norns";
        var versions = ["0.1.6","0.1.5","0.1.5","0.1.4","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/norns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/norns/README.html