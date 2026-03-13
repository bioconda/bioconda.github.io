:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'surpyvor'
.. highlight: bash

surpyvor
========

.. conda:recipe:: surpyvor
   :replaces_section_title:
   :noindex:

   Evaluating\, merging and plotting SV vcf files

   :homepage: https://github.com/wdecoster/surpyvor
   :license: MIT / MIT License
   :recipe: /`surpyvor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.244939.118`

   


.. conda:package:: surpyvor

   |downloads_surpyvor| |docker_surpyvor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.6.0-1</code>,  </span></summary>
      

      ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on cyvcf2: 
   :depends on htslib: 
   :depends on matplotlib-base: 
   :depends on matplotlib-venn: 
   :depends on numpy: 
   :depends on python: ``>=3``
   :depends on survivor: 
   :depends on upsetplot: 

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

    pixi global install surpyvor

to add into an existing workspace instead, run::

    pixi add surpyvor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install surpyvor

Alternatively, to install into a new environment, run::

    conda create -n envname surpyvor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/surpyvor:<tag>

(see `surpyvor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_surpyvor| image:: https://img.shields.io/conda/dn/bioconda/surpyvor.svg?style=flat
   :target: https://anaconda.org/bioconda/surpyvor
   :alt:   (downloads)
.. |docker_surpyvor| image:: https://quay.io/repository/biocontainers/surpyvor/status
   :target: https://quay.io/repository/biocontainers/surpyvor
.. _`surpyvor/tags`: https://quay.io/repository/biocontainers/surpyvor?tab=tags


.. raw:: html

    <script>
        var package = "surpyvor";
        var versions = ["0.15.0","0.14.0","0.13.0","0.12.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/surpyvor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/surpyvor/README.html