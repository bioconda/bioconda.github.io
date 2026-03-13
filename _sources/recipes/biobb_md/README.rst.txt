:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_md'
.. highlight: bash

biobb_md
========

.. conda:recipe:: biobb_md
   :replaces_section_title:
   :noindex:

   Deprecated Package\: biobb\_md is no longer maintained and has been superseded by the biobb\_gromacs package. Biobb\_md is the Biobb module collection to perform molecular dynamics simulations.

   :homepage: https://github.com/bioexcel/biobb_md
   :documentation: http://biobb_md.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_md <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md/meta.yaml>`_

   Deprecated Package\: biobb\_md is no longer maintained and has been superseded by the biobb\_gromacs package. Biobb\_md is the Biobb module collection to perform molecular dynamics simulations. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layers of compatibility and interoperability over popular bioinformatics tools.


.. conda:package:: biobb_md

   |downloads_biobb_md| |docker_biobb_md|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``3.7.2-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biobb_common: ``3.7.0``
   :depends on gromacs: ``2019.1``
   :depends on python: ``3.7.*``

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

    pixi global install biobb_md

to add into an existing workspace instead, run::

    pixi add biobb_md

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_md

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_md

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_md:<tag>

(see `biobb_md/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_md| image:: https://img.shields.io/conda/dn/bioconda/biobb_md.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_md
   :alt:   (downloads)
.. |docker_biobb_md| image:: https://quay.io/repository/biocontainers/biobb_md/status
   :target: https://quay.io/repository/biocontainers/biobb_md
.. _`biobb_md/tags`: https://quay.io/repository/biocontainers/biobb_md?tab=tags


.. raw:: html

    <script>
        var package = "biobb_md";
        var versions = ["3.7.2","3.7.1","3.7.0","3.6.0","3.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_md/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_md/README.html