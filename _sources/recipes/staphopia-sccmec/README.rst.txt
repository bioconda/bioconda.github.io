:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphopia-sccmec'
.. highlight: bash

staphopia-sccmec
================

.. conda:recipe:: staphopia-sccmec
   :replaces_section_title:
   :noindex:

   Predicts Staphylococcus aureus SCCmec type based on primers.

   :homepage: https://github.com/staphopia/staphopia-sccmec
   :license: MIT
   :recipe: /`staphopia-sccmec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec/meta.yaml>`_
   :links: biotools: :biotools:`Staphopia`, doi: :doi:`10.7717/peerj.5261`

   


.. conda:package:: staphopia-sccmec

   |downloads_staphopia-sccmec| |docker_staphopia-sccmec|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on blast: 
   :depends on executor: 
   :depends on python: ``>=3``

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

    pixi global install staphopia-sccmec

to add into an existing workspace instead, run::

    pixi add staphopia-sccmec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install staphopia-sccmec

Alternatively, to install into a new environment, run::

    conda create -n envname staphopia-sccmec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/staphopia-sccmec:<tag>

(see `staphopia-sccmec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_staphopia-sccmec| image:: https://img.shields.io/conda/dn/bioconda/staphopia-sccmec.svg?style=flat
   :target: https://anaconda.org/bioconda/staphopia-sccmec
   :alt:   (downloads)
.. |docker_staphopia-sccmec| image:: https://quay.io/repository/biocontainers/staphopia-sccmec/status
   :target: https://quay.io/repository/biocontainers/staphopia-sccmec
.. _`staphopia-sccmec/tags`: https://quay.io/repository/biocontainers/staphopia-sccmec?tab=tags


.. raw:: html

    <script>
        var package = "staphopia-sccmec";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphopia-sccmec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphopia-sccmec/README.html