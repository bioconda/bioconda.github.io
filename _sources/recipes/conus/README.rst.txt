:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conus'
.. highlight: bash

conus
=====

.. conda:recipe:: conus
   :replaces_section_title:
   :noindex:

   CONUS is an implementation of simple stochastic context\-free grammars for RNA secondary structure analysis.CONUS developed for exploring the consequences of different single sequence SCFG designs in predicting RNA secondary structure.

   :homepage: http://eddylab.org/software/conus/
   :license: file
   :recipe: /`conus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conus/meta.yaml>`_
   :links: biotools: :biotools:`CONUS`, doi: :doi:`10.1186/1471-2105-5-71`

   


.. conda:package:: conus

   |downloads_conus| |docker_conus|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install conus

to add into an existing workspace instead, run::

    pixi add conus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install conus

Alternatively, to install into a new environment, run::

    conda create -n envname conus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/conus:<tag>

(see `conus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_conus| image:: https://img.shields.io/conda/dn/bioconda/conus.svg?style=flat
   :target: https://anaconda.org/bioconda/conus
   :alt:   (downloads)
.. |docker_conus| image:: https://quay.io/repository/biocontainers/conus/status
   :target: https://quay.io/repository/biocontainers/conus
.. _`conus/tags`: https://quay.io/repository/biocontainers/conus?tab=tags


.. raw:: html

    <script>
        var package = "conus";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conus/README.html