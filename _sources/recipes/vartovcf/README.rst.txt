:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vartovcf'
.. highlight: bash

vartovcf
========

.. conda:recipe:: vartovcf
   :replaces_section_title:
   :noindex:

   Convert variants from VarDict\/VarDictJava into VCF v4.2 format.

   :homepage: https://github.com/clintval/vartovcf
   :documentation: https://github.com/clintval/vartovcf/blob/1.5.1/README.md
   
   :license: MIT / MIT
   :recipe: /`vartovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vartovcf/meta.yaml>`_

   


.. conda:package:: vartovcf

   |downloads_vartovcf| |docker_vartovcf|

   :versions:
      
      

      ``1.5.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install vartovcf

to add into an existing workspace instead, run::

    pixi add vartovcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vartovcf

Alternatively, to install into a new environment, run::

    conda create -n envname vartovcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vartovcf:<tag>

(see `vartovcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vartovcf| image:: https://img.shields.io/conda/dn/bioconda/vartovcf.svg?style=flat
   :target: https://anaconda.org/bioconda/vartovcf
   :alt:   (downloads)
.. |docker_vartovcf| image:: https://quay.io/repository/biocontainers/vartovcf/status
   :target: https://quay.io/repository/biocontainers/vartovcf
.. _`vartovcf/tags`: https://quay.io/repository/biocontainers/vartovcf?tab=tags


.. raw:: html

    <script>
        var package = "vartovcf";
        var versions = ["1.5.1","1.4.0","1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vartovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vartovcf/README.html