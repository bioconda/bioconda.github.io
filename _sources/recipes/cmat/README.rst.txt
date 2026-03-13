:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmat'
.. highlight: bash

cmat
====

.. conda:recipe:: cmat
   :replaces_section_title:
   :noindex:

   ClinVar Mapping and Annotation Toolkit.

   :homepage: https://github.com/EBIvariation/CMAT
   :documentation: https://github.com/EBIvariation/CMAT/blob/v3.4.3/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`cmat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmat/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioadv/vbae018`

   


.. conda:package:: cmat

   |downloads_cmat| |docker_cmat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  </span></summary>
      

      ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on coverage: ``6.5.0``
   :depends on coveralls: ``3.3.1``
   :depends on jsonschema: ``4.23.0``
   :depends on nextflow: ``>=21.10``
   :depends on numpy: ``1.26.0``
   :depends on pandas: ``2.2.3``
   :depends on pytest: ``7.2.2``
   :depends on pytest-cov: ``2.10.0``
   :depends on python: ``>=3.11,<3.12.0a0``
   :depends on pyyaml: ``6.0.1``
   :depends on requests: ``2.32.4``
   :depends on requests-mock: ``1.8.0``
   :depends on retry: ``0.9.2``

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

    pixi global install cmat

to add into an existing workspace instead, run::

    pixi add cmat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cmat

Alternatively, to install into a new environment, run::

    conda create -n envname cmat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cmat:<tag>

(see `cmat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cmat| image:: https://img.shields.io/conda/dn/bioconda/cmat.svg?style=flat
   :target: https://anaconda.org/bioconda/cmat
   :alt:   (downloads)
.. |docker_cmat| image:: https://quay.io/repository/biocontainers/cmat/status
   :target: https://quay.io/repository/biocontainers/cmat
.. _`cmat/tags`: https://quay.io/repository/biocontainers/cmat?tab=tags


.. raw:: html

    <script>
        var package = "cmat";
        var versions = ["3.4.3","3.4.2","3.4.1","3.4.0","3.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmat/README.html