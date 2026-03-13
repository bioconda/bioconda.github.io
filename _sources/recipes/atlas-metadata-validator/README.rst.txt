:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-metadata-validator'
.. highlight: bash

atlas-metadata-validator
========================

.. conda:recipe:: atlas-metadata-validator
   :replaces_section_title:
   :noindex:

   A MAGE\-TAB validator for Expression Atlas and Single Cell Expression Atlas

   :homepage: https://github.com/ebi-gene-expression-group/atlas-metadata-validator
   :license: APACHE / Apache Software
   :recipe: /`atlas-metadata-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-metadata-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-metadata-validator/meta.yaml>`_

   This is a python module to parse a set of MAGE\-TAB files and check for
   compatibility with the Expression Atlas and Single Cell Expression Atlas
   analysis pipelines. The main validation script automatically detects the
   experiment type from the MAGE\-TAB and runs the respective tests. Currently
   general checks \(for bulk and single\-cell experiment\) as well as Single Cell
   Expression Atlas specific checks are supported.  



.. conda:package:: atlas-metadata-validator

   |downloads_atlas-metadata-validator| |docker_atlas-metadata-validator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gitpython: ``>=3.1.7``
   :depends on python: ``>=3``
   :depends on requests: ``>=2.20.1``

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

    pixi global install atlas-metadata-validator

to add into an existing workspace instead, run::

    pixi add atlas-metadata-validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atlas-metadata-validator

Alternatively, to install into a new environment, run::

    conda create -n envname atlas-metadata-validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atlas-metadata-validator:<tag>

(see `atlas-metadata-validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atlas-metadata-validator| image:: https://img.shields.io/conda/dn/bioconda/atlas-metadata-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-metadata-validator
   :alt:   (downloads)
.. |docker_atlas-metadata-validator| image:: https://quay.io/repository/biocontainers/atlas-metadata-validator/status
   :target: https://quay.io/repository/biocontainers/atlas-metadata-validator
.. _`atlas-metadata-validator/tags`: https://quay.io/repository/biocontainers/atlas-metadata-validator?tab=tags


.. raw:: html

    <script>
        var package = "atlas-metadata-validator";
        var versions = ["1.6.1","1.6.0","1.5.0","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-metadata-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-metadata-validator/README.html