:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tophat'
.. highlight: bash

tophat
======

.. conda:recipe:: tophat
   :replaces_section_title:
   :noindex:

   A spliced read mapper for RNA\-Seq.

   :homepage: http://ccb.jhu.edu/software/tophat
   :developer docs: https://github.com/infphilo/tophat
   :license: Boost Software License
   :recipe: /`tophat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat/meta.yaml>`_
   :links: biotools: :biotools:`tophat2`, usegalaxy-eu: :usegalaxy-eu:`tophat2`

   


.. conda:package:: tophat

   |downloads_tophat| |docker_tophat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-0</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.14-0</code>,  <code>2.0.13-6</code>,  <code>2.0.13-5</code>,  </span></summary>
      

      ``2.1.2-0``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.14-0``,  ``2.0.13-6``,  ``2.0.13-5``,  ``2.0.13-4``,  ``2.0.13-3``,  ``2.0.13-2``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on bowtie2: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on python: ``>=3``
   :depends on setuptools: 

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

    pixi global install tophat

to add into an existing workspace instead, run::

    pixi add tophat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tophat

Alternatively, to install into a new environment, run::

    conda create -n envname tophat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tophat:<tag>

(see `tophat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tophat| image:: https://img.shields.io/conda/dn/bioconda/tophat.svg?style=flat
   :target: https://anaconda.org/bioconda/tophat
   :alt:   (downloads)
.. |docker_tophat| image:: https://quay.io/repository/biocontainers/tophat/status
   :target: https://quay.io/repository/biocontainers/tophat
.. _`tophat/tags`: https://quay.io/repository/biocontainers/tophat?tab=tags


.. raw:: html

    <script>
        var package = "tophat";
        var versions = ["2.1.2","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat/README.html