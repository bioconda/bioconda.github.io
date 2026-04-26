:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nrpys'
.. highlight: bash

nrpys
=====

.. conda:recipe:: nrpys
   :replaces_section_title:
   :noindex:

   Python language bindings for nrps\-rs substrate specificity predictor.

   :homepage: https://github.com/kblin/nrpys
   :license: AGPL-3.0-or-later
   :recipe: /`nrpys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nrpys/meta.yaml>`_

   


.. conda:package:: nrpys

   |downloads_nrpys| |docker_nrpys|

   :versions:
      
      

      ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on python_abi: ``3.11.* *_cp311``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install nrpys

to add into an existing workspace instead, run::

    pixi add nrpys

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nrpys

Alternatively, to install into a new environment, run::

    conda create -n envname nrpys

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nrpys:<tag>

(see `nrpys/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nrpys| image:: https://img.shields.io/conda/dn/bioconda/nrpys.svg?style=flat
   :target: https://anaconda.org/bioconda/nrpys
   :alt:   (downloads)
.. |docker_nrpys| image:: https://quay.io/repository/biocontainers/nrpys/status
   :target: https://quay.io/repository/biocontainers/nrpys
.. _`nrpys/tags`: https://quay.io/repository/biocontainers/nrpys?tab=tags


.. raw:: html

    <script>
        var package = "nrpys";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nrpys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nrpys/README.html