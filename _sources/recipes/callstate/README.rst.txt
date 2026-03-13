:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callstate'
.. highlight: bash

callstate
=========

.. conda:recipe:: callstate
   :replaces_section_title:
   :noindex:

   A replacement for GATK3 CallableLoci

   :homepage: https://github.com/LuobinY/Callstate
   :license: MIT
   :recipe: /`callstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate/meta.yaml>`_

   


.. conda:package:: callstate

   |downloads_callstate| |docker_callstate|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on htslib: ``>=1.10.2,<1.24.0a0``
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on pcre: ``>=8.44,<9.0a0``

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

    pixi global install callstate

to add into an existing workspace instead, run::

    pixi add callstate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install callstate

Alternatively, to install into a new environment, run::

    conda create -n envname callstate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/callstate:<tag>

(see `callstate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_callstate| image:: https://img.shields.io/conda/dn/bioconda/callstate.svg?style=flat
   :target: https://anaconda.org/bioconda/callstate
   :alt:   (downloads)
.. |docker_callstate| image:: https://quay.io/repository/biocontainers/callstate/status
   :target: https://quay.io/repository/biocontainers/callstate
.. _`callstate/tags`: https://quay.io/repository/biocontainers/callstate?tab=tags


.. raw:: html

    <script>
        var package = "callstate";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callstate/README.html