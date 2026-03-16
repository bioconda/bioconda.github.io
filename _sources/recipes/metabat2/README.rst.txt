:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabat2'
.. highlight: bash

metabat2
========

.. conda:recipe:: metabat2
   :replaces_section_title:
   :noindex:

   Metagenome binning.

   :homepage: https://bitbucket.org/berkeleylab/metabat
   :documentation: https://bitbucket.org/berkeleylab/metabat/src/v2.18/README.md
   
   :license: BSD / BSD-3-Clause-LBNL
   :recipe: /`metabat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.1165`, biotools: :biotools:`MetaBAT_2`, usegalaxy-eu: :usegalaxy-eu:`metabat2`

   


.. conda:package:: metabat2

   |downloads_metabat2| |docker_metabat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18-0</code>,  <code>2.17-1</code>,  <code>2.17-0</code>,  <code>2.15-2</code>,  <code>2.15-1</code>,  <code>2.15-0</code>,  <code>2.14-0</code>,  <code>2.13-1</code>,  <code>2.13-0</code>,  </span></summary>
      

      ``2.18-0``,  ``2.17-1``,  ``2.17-0``,  ``2.15-2``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.13-1``,  ``2.13-0``,  ``2.12.1-1``,  ``2.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 

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

    pixi global install metabat2

to add into an existing workspace instead, run::

    pixi add metabat2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metabat2

Alternatively, to install into a new environment, run::

    conda create -n envname metabat2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metabat2:<tag>

(see `metabat2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metabat2| image:: https://img.shields.io/conda/dn/bioconda/metabat2.svg?style=flat
   :target: https://anaconda.org/bioconda/metabat2
   :alt:   (downloads)
.. |docker_metabat2| image:: https://quay.io/repository/biocontainers/metabat2/status
   :target: https://quay.io/repository/biocontainers/metabat2
.. _`metabat2/tags`: https://quay.io/repository/biocontainers/metabat2?tab=tags


.. raw:: html

    <script>
        var package = "metabat2";
        var versions = ["2.18","2.17","2.17","2.15","2.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabat2/README.html