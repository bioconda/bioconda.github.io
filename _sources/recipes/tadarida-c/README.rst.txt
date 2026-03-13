:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tadarida-c'
.. highlight: bash

tadarida-c
==========

.. conda:recipe:: tadarida-c
   :replaces_section_title:
   :noindex:

   Tadarida\-C \(Toolbox for Animal Detection on Acoustic Recordings \- Classification part\) for Galaxy use.

   :homepage: https://github.com/YvesBas/Tadarida-C
   :license: GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
   :recipe: /`tadarida-c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tadarida-c/meta.yaml>`_

   


.. conda:package:: tadarida-c

   |downloads_tadarida-c| |docker_tadarida-c|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends on r-base: ``>=3.4.1,<3.4.2.0a0``
   :depends on r-data.table: 
   :depends on r-randomforest: 

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

    pixi global install tadarida-c

to add into an existing workspace instead, run::

    pixi add tadarida-c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tadarida-c

Alternatively, to install into a new environment, run::

    conda create -n envname tadarida-c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tadarida-c:<tag>

(see `tadarida-c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tadarida-c| image:: https://img.shields.io/conda/dn/bioconda/tadarida-c.svg?style=flat
   :target: https://anaconda.org/bioconda/tadarida-c
   :alt:   (downloads)
.. |docker_tadarida-c| image:: https://quay.io/repository/biocontainers/tadarida-c/status
   :target: https://quay.io/repository/biocontainers/tadarida-c
.. _`tadarida-c/tags`: https://quay.io/repository/biocontainers/tadarida-c?tab=tags


.. raw:: html

    <script>
        var package = "tadarida-c";
        var versions = ["1.2","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tadarida-c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tadarida-c/README.html