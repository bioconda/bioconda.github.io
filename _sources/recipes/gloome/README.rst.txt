:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gloome'
.. highlight: bash

gloome
======

.. conda:recipe:: gloome
   :replaces_section_title:
   :noindex:

   GLOOME is a program that analyzes the evolution of phyletic patterns within the likelihood framework.

   :homepage: https://gloome.tau.ac.il/
   :license: GNU GENERAL PUBLIC LICENSE v3 (see https://gloome.tau.ac.il/source.php)
   :recipe: /`gloome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gloome/meta.yaml>`_
   :links: biotools: :biotools:`gloome`

   


.. conda:package:: gloome

   |downloads_gloome| |docker_gloome|

   :versions:
      
      

      ``VR01.266-3``,  ``VR01.266-2``,  ``VR01.266-1``,  ``VR01.266-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install gloome

to add into an existing workspace instead, run::

    pixi add gloome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gloome

Alternatively, to install into a new environment, run::

    conda create -n envname gloome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gloome:<tag>

(see `gloome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gloome| image:: https://img.shields.io/conda/dn/bioconda/gloome.svg?style=flat
   :target: https://anaconda.org/bioconda/gloome
   :alt:   (downloads)
.. |docker_gloome| image:: https://quay.io/repository/biocontainers/gloome/status
   :target: https://quay.io/repository/biocontainers/gloome
.. _`gloome/tags`: https://quay.io/repository/biocontainers/gloome?tab=tags


.. raw:: html

    <script>
        var package = "gloome";
        var versions = ["VR01.266","VR01.266","VR01.266","VR01.266"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gloome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gloome/README.html