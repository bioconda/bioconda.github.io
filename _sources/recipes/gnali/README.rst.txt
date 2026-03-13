:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnali'
.. highlight: bash

gnali
=====

.. conda:recipe:: gnali
   :replaces_section_title:
   :noindex:

   gNALI \(gene nonessentiality and loss\-of\-function identifier\) is a tool for finding PLoF gene variants.

   :homepage: https://github.com/phac-nml/gnali
   :license: APACHE / Apache-2.0
   :recipe: /`gnali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnali/meta.yaml>`_

   


.. conda:package:: gnali

   |downloads_gnali| |docker_gnali|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ensembl-vep: 
   :depends on filelock: 
   :depends on git: ``>=2``
   :depends on htslib: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl-bio-bigfile: 
   :depends on progress: 
   :depends on py-bgzip: 
   :depends on pybiomart: 
   :depends on pysam: ``<0.16``
   :depends on python: ``>=3.6``
   :depends on python-magic: 
   :depends on pyyaml: 
   :depends on samtools: 

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

    pixi global install gnali

to add into an existing workspace instead, run::

    pixi add gnali

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gnali

Alternatively, to install into a new environment, run::

    conda create -n envname gnali

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gnali:<tag>

(see `gnali/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gnali| image:: https://img.shields.io/conda/dn/bioconda/gnali.svg?style=flat
   :target: https://anaconda.org/bioconda/gnali
   :alt:   (downloads)
.. |docker_gnali| image:: https://quay.io/repository/biocontainers/gnali/status
   :target: https://quay.io/repository/biocontainers/gnali
.. _`gnali/tags`: https://quay.io/repository/biocontainers/gnali?tab=tags


.. raw:: html

    <script>
        var package = "gnali";
        var versions = ["1.1.0","1.0.5","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnali/README.html