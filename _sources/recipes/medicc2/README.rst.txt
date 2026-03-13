:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medicc2'
.. highlight: bash

medicc2
=======

.. conda:recipe:: medicc2
   :replaces_section_title:
   :noindex:

   Whole\-genome doubling\-aware copy number phylogenies for cancer evolution

   :homepage: https://bitbucket.org/schwarzlab/medicc2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`medicc2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medicc2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medicc2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-022-02794-9`

   For more information see the accompanying biorxiv preprint \"Kaufmann et al. Whole\-genome 
   doubling\-aware copy number phylogenies for cancer evolution with MEDICC2.\"



.. conda:package:: medicc2

   |downloads_medicc2| |docker_medicc2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.9.2-0</code>,  </span></summary>
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.2-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.8.3-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6b1-0``,  ``0.5b4-0``,  ``0.5b3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on joblib: ``>=1.0.1``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on matplotlib-base: ``>=3.3.4``
   :depends on numpy: ``>=1.20.1,<2.0``
   :depends on numpy: ``>=1.21,<3``
   :depends on openfst: ``>=1.8.2,<1.8.3.0a0``
   :depends on pandas: ``>=1.2,<2.1``
   :depends on pyranges: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: ``>=5.4.1``
   :depends on scipy: ``>=1.7``

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

    pixi global install medicc2

to add into an existing workspace instead, run::

    pixi add medicc2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install medicc2

Alternatively, to install into a new environment, run::

    conda create -n envname medicc2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/medicc2:<tag>

(see `medicc2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_medicc2| image:: https://img.shields.io/conda/dn/bioconda/medicc2.svg?style=flat
   :target: https://anaconda.org/bioconda/medicc2
   :alt:   (downloads)
.. |docker_medicc2| image:: https://quay.io/repository/biocontainers/medicc2/status
   :target: https://quay.io/repository/biocontainers/medicc2
.. _`medicc2/tags`: https://quay.io/repository/biocontainers/medicc2?tab=tags


.. raw:: html

    <script>
        var package = "medicc2";
        var versions = ["1.1.2","1.1.2","1.1.1","1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medicc2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medicc2/README.html