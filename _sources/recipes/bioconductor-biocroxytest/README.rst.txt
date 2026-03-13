:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocroxytest'
.. highlight: bash

bioconductor-biocroxytest
=========================

.. conda:recipe:: bioconductor-biocroxytest
   :replaces_section_title:
   :noindex:

   Handle Long Tests in Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biocroxytest.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-biocroxytest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocroxytest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocroxytest/meta.yaml>`_

   This package provides a roclet for roxygen2 that identifies and processes code blocks in your documentation marked with \`\@longtests\`. These blocks should contain tests that take a long time to run and thus cannot be included in the regular test suite of the package. When you run \`roxygen2\:\:roxygenise\` with the \`longtests\_roclet\`\, it will extract these long tests from your documentation and save them in a separate directory. This allows you to run these long tests separately from the rest of your tests\, for example\, on a continuous integration server that is set up to run long tests.


.. conda:package:: bioconductor-biocroxytest

   |downloads_bioconductor-biocroxytest| |docker_bioconductor-biocroxytest|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-glue: 
   :depends on r-roxygen2: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-biocroxytest

to add into an existing workspace instead, run::

    pixi add bioconductor-biocroxytest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocroxytest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocroxytest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocroxytest:<tag>

(see `bioconductor-biocroxytest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocroxytest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocroxytest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocroxytest
   :alt:   (downloads)
.. |docker_bioconductor-biocroxytest| image:: https://quay.io/repository/biocontainers/bioconductor-biocroxytest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocroxytest
.. _`bioconductor-biocroxytest/tags`: https://quay.io/repository/biocontainers/bioconductor-biocroxytest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocroxytest";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocroxytest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocroxytest/README.html