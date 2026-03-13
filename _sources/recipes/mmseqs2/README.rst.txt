:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmseqs2'
.. highlight: bash

mmseqs2
=======

.. conda:recipe:: mmseqs2
   :replaces_section_title:
   :noindex:

   MMseqs2\: ultra fast and sensitive sequence search and clustering suite

   :homepage: https://github.com/soedinglab/mmseqs2
   :license: MIT
   :recipe: /`mmseqs2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmseqs2/meta.yaml>`_
   :links: doi: :doi:`10.1038/nbt.3988`, doi: :doi:`10.1038/s41467-018-04964-5`, doi: :doi:`10.1093/bioinformatics/bty1057`, doi: :doi:`10.1093/bioinformatics/btab184`, doi: :doi:`10.1101/2024.11.13.623350v1`, biotools: :biotools:`mmseqs2`, biotools: :biotools:`linclust`

   


.. conda:package:: mmseqs2

   |downloads_mmseqs2| |docker_mmseqs2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>18.8cc5c-0</code>,  <code>17.b804f-1</code>,  <code>17.b804f-0</code>,  <code>16.747c6-1</code>,  <code>16.747c6-0</code>,  <code>15.6f452-3</code>,  <code>15.6f452-2</code>,  <code>15.6f452-1</code>,  <code>15.6f452-0</code>,  </span></summary>
      

      ``18.8cc5c-0``,  ``17.b804f-1``,  ``17.b804f-0``,  ``16.747c6-1``,  ``16.747c6-0``,  ``15.6f452-3``,  ``15.6f452-2``,  ``15.6f452-1``,  ``15.6f452-0``,  ``14.7e284-2``,  ``14.7e284-1``,  ``14.7e284-0``,  ``13.45111-2``,  ``13.45111-1``,  ``13.45111-0``,  ``12.113e3-2``,  ``12.113e3-1``,  ``12.113e3-0``,  ``11.e1a1c-0``,  ``10.6d92c-0``,  ``9.d36de-0``,  ``8.fac81-1``,  ``7.4e23d-1``,  ``6.f5a1c-1``,  ``5.9375b-1``,  ``4.bff50-1``,  ``4.0b8cc-1``,  ``3.be8f6-1``,  ``3.be8f6-0``,  ``2.23394-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on aria2: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gawk: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install mmseqs2

to add into an existing workspace instead, run::

    pixi add mmseqs2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mmseqs2

Alternatively, to install into a new environment, run::

    conda create -n envname mmseqs2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mmseqs2:<tag>

(see `mmseqs2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mmseqs2| image:: https://img.shields.io/conda/dn/bioconda/mmseqs2.svg?style=flat
   :target: https://anaconda.org/bioconda/mmseqs2
   :alt:   (downloads)
.. |docker_mmseqs2| image:: https://quay.io/repository/biocontainers/mmseqs2/status
   :target: https://quay.io/repository/biocontainers/mmseqs2
.. _`mmseqs2/tags`: https://quay.io/repository/biocontainers/mmseqs2?tab=tags


.. raw:: html

    <script>
        var package = "mmseqs2";
        var versions = ["18.8cc5c","17.b804f","17.b804f","16.747c6","16.747c6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmseqs2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmseqs2/README.html