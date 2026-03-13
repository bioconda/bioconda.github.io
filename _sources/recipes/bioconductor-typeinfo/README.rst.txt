:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-typeinfo'
.. highlight: bash

bioconductor-typeinfo
=====================

.. conda:recipe:: bioconductor-typeinfo
   :replaces_section_title:
   :noindex:

   Optional Type Specification Prototype

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TypeInfo.html
   :license: BSD_2_clause
   :recipe: /`bioconductor-typeinfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-typeinfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-typeinfo/meta.yaml>`_

   A prototype for a mechanism for specifying the types of parameters and the return value for an R function. This is meta\-information that can be used to generate stubs for servers and various interfaces to these functions. Additionally\, the arguments in a call to a typed function can be validated using the type specifications. We allow types to be specified as either i\) by class name using either inheritance \- is\(x\, className\)\, or strict instance of \- class\(x\) \%in\% className\, or ii\) a dynamic test given as an R expression which is evaluated at run\-time. More precise information and interesting tests can be done via ii\)\, but it is harder to use this information as meta\-data as it requires more effort to interpret it and it is of course run\-time information. It is typically more meaningful.


.. conda:package:: bioconductor-typeinfo

   |downloads_bioconductor-typeinfo| |docker_bioconductor-typeinfo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-typeinfo

to add into an existing workspace instead, run::

    pixi add bioconductor-typeinfo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-typeinfo

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-typeinfo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-typeinfo:<tag>

(see `bioconductor-typeinfo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-typeinfo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-typeinfo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-typeinfo
   :alt:   (downloads)
.. |docker_bioconductor-typeinfo| image:: https://quay.io/repository/biocontainers/bioconductor-typeinfo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-typeinfo
.. _`bioconductor-typeinfo/tags`: https://quay.io/repository/biocontainers/bioconductor-typeinfo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-typeinfo";
        var versions = ["1.68.0","1.66.0","1.64.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-typeinfo/README.html