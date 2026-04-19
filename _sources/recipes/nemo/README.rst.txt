:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nemo'
.. highlight: bash

nemo
====

.. conda:recipe:: nemo
   :replaces_section_title:
   :noindex:

   Individual\-based forward\-time genetics simulation software

   :homepage: http://nemo2.sourceforge.net
   :license: GPLv2
   :recipe: /`nemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo/meta.yaml>`_

   


.. conda:package:: nemo

   |downloads_nemo| |docker_nemo|

   :versions:
      
      

      ``2.3.51-2``,  ``2.3.51-1``,  ``2.3.51-0``

      

   
   :depends on gsl: ``>=2.6,<2.7.0a0``
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``
   :depends on openblas: 

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

    pixi global install nemo

to add into an existing workspace instead, run::

    pixi add nemo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nemo

Alternatively, to install into a new environment, run::

    conda create -n envname nemo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nemo:<tag>

(see `nemo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nemo| image:: https://img.shields.io/conda/dn/bioconda/nemo.svg?style=flat
   :target: https://anaconda.org/bioconda/nemo
   :alt:   (downloads)
.. |docker_nemo| image:: https://quay.io/repository/biocontainers/nemo/status
   :target: https://quay.io/repository/biocontainers/nemo
.. _`nemo/tags`: https://quay.io/repository/biocontainers/nemo?tab=tags


.. raw:: html

    <script>
        var package = "nemo";
        var versions = ["2.3.51","2.3.51","2.3.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nemo/README.html