:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'screamingbackpack'
.. highlight: bash

screamingbackpack
=================

.. conda:recipe:: screamingbackpack
   :replaces_section_title:
   :noindex:

   ScreamingBackpack

   :homepage: http://pypi.python.org/pypi/ScreamingBackpack/
   :license: GPLv3
   :recipe: /`screamingbackpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack/meta.yaml>`_

   


.. conda:package:: screamingbackpack

   |downloads_screamingbackpack| |docker_screamingbackpack|

   :versions:
      
      

      ``0.2.333-1``,  ``0.2.333-0``

      

   
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

    pixi global install screamingbackpack

to add into an existing workspace instead, run::

    pixi add screamingbackpack

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install screamingbackpack

Alternatively, to install into a new environment, run::

    conda create -n envname screamingbackpack

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/screamingbackpack:<tag>

(see `screamingbackpack/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_screamingbackpack| image:: https://img.shields.io/conda/dn/bioconda/screamingbackpack.svg?style=flat
   :target: https://anaconda.org/bioconda/screamingbackpack
   :alt:   (downloads)
.. |docker_screamingbackpack| image:: https://quay.io/repository/biocontainers/screamingbackpack/status
   :target: https://quay.io/repository/biocontainers/screamingbackpack
.. _`screamingbackpack/tags`: https://quay.io/repository/biocontainers/screamingbackpack?tab=tags


.. raw:: html

    <script>
        var package = "screamingbackpack";
        var versions = ["0.2.333","0.2.333"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/screamingbackpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/screamingbackpack/README.html