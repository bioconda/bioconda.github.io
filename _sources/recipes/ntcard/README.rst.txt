:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntcard'
.. highlight: bash

ntcard
======

.. conda:recipe:: ntcard
   :replaces_section_title:
   :noindex:

   Estimating k\-mer coverage histogram of genomics data.

   :homepage: https://github.com/BirolLab/ntCard
   :documentation: https://github.com/BirolLab/ntCard/blob/1.2.2/README.md
   
   :license: MIT / MIT
   :recipe: /`ntcard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntcard/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw832`

   


.. conda:package:: ntcard

   |downloads_ntcard| |docker_ntcard|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-8</code>,  <code>1.2.2-7</code>,  <code>1.2.2-6</code>,  <code>1.2.2-5</code>,  <code>1.2.2-4</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  <code>1.2.2-1</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.2.2-8``,  ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install ntcard

to add into an existing workspace instead, run::

    pixi add ntcard

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntcard

Alternatively, to install into a new environment, run::

    conda create -n envname ntcard

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntcard:<tag>

(see `ntcard/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntcard| image:: https://img.shields.io/conda/dn/bioconda/ntcard.svg?style=flat
   :target: https://anaconda.org/bioconda/ntcard
   :alt:   (downloads)
.. |docker_ntcard| image:: https://quay.io/repository/biocontainers/ntcard/status
   :target: https://quay.io/repository/biocontainers/ntcard
.. _`ntcard/tags`: https://quay.io/repository/biocontainers/ntcard?tab=tags


.. raw:: html

    <script>
        var package = "ntcard";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntcard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntcard/README.html