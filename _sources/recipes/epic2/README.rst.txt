:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epic2'
.. highlight: bash

epic2
=====

.. conda:recipe:: epic2
   :replaces_section_title:
   :noindex:

   Ultraperformant Chip\-Seq broad domain finder based on SICER.

   :homepage: http://github.com/endrebak/epic2
   :license: MIT
   :recipe: /`epic2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz232`

   


.. conda:package:: epic2

   |downloads_epic2| |docker_epic2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.54-0</code>,  <code>0.0.53-0</code>,  <code>0.0.52-9</code>,  <code>0.0.52-8</code>,  <code>0.0.52-7</code>,  <code>0.0.52-6</code>,  <code>0.0.52-5</code>,  <code>0.0.52-4</code>,  <code>0.0.52-3</code>,  </span></summary>
      

      ``0.0.54-0``,  ``0.0.53-0``,  ``0.0.52-9``,  ``0.0.52-8``,  ``0.0.52-7``,  ``0.0.52-6``,  ``0.0.52-5``,  ``0.0.52-4``,  ``0.0.52-3``,  ``0.0.52-2``,  ``0.0.52-1``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.48-1``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.41-3``,  ``0.0.41-2``,  ``0.0.41-1``,  ``0.0.41-0``,  ``0.0.40-0``,  ``0.0.39-0``,  ``0.0.37-0``,  ``0.0.36-0``,  ``0.0.35-0``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.26-0``,  ``0.0.16-0``,  ``0.0.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on natsort: 
   :depends on numpy: 
   :depends on pysam: ``>=0.23.3,<0.24.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 

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

    pixi global install epic2

to add into an existing workspace instead, run::

    pixi add epic2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install epic2

Alternatively, to install into a new environment, run::

    conda create -n envname epic2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/epic2:<tag>

(see `epic2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_epic2| image:: https://img.shields.io/conda/dn/bioconda/epic2.svg?style=flat
   :target: https://anaconda.org/bioconda/epic2
   :alt:   (downloads)
.. |docker_epic2| image:: https://quay.io/repository/biocontainers/epic2/status
   :target: https://quay.io/repository/biocontainers/epic2
.. _`epic2/tags`: https://quay.io/repository/biocontainers/epic2?tab=tags


.. raw:: html

    <script>
        var package = "epic2";
        var versions = ["0.0.54","0.0.53","0.0.52","0.0.52","0.0.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic2/README.html