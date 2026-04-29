:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bowtie2'
.. highlight: bash

bowtie2
=======

.. conda:recipe:: bowtie2
   :replaces_section_title:
   :noindex:

   A fast and sensitive gapped read aligner.

   :homepage: https://bowtie-bio.sourceforge.net/bowtie2/index.shtml
   :documentation: https://github.com/BenLangmead/bowtie2/blob/v2.5.5/README.md
   
   :developer docs: https://github.com/BenLangmead/bowtie2
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2/meta.yaml>`_
   :links: biotools: :biotools:`bowtie2`, doi: :doi:`10.1038/nmeth.1923`, debian: :debian:`bowtie2`, usegalaxy-eu: :usegalaxy-eu:`bowtie2`

   


.. conda:package:: bowtie2

   |downloads_bowtie2| |docker_bowtie2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.5-0</code>,  <code>2.5.4-7</code>,  <code>2.5.4-6</code>,  <code>2.5.4-5</code>,  <code>2.5.4-4</code>,  <code>2.5.4-3</code>,  <code>2.5.4-2</code>,  <code>2.5.4-1</code>,  <code>2.5.4-0</code>,  </span></summary>
      

      ``2.5.5-0``,  ``2.5.4-7``,  ``2.5.4-6``,  ``2.5.4-5``,  ``2.5.4-4``,  ``2.5.4-3``,  ``2.5.4-2``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.5-4``,  ``2.4.5-3``,  ``2.4.5-2``,  ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.5.1-0``,  ``2.3.5-0``,  ``2.3.4.3-1``,  ``2.3.4.3-0``,  ``2.3.4.2-0``,  ``2.3.4.1-1``,  ``2.3.4.1-0``,  ``2.3.4-0``,  ``2.3.3.1-0``,  ``2.3.2-1``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.8-2``,  ``2.2.8-1``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-8``,  ``2.2.5-7``,  ``2.2.5-6``,  ``2.2.5-5``,  ``2.2.5-4``,  ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-1``,  ``2.2.4-8``,  ``2.2.4-7``,  ``2.2.4-6``,  ``2.2.4-5``,  ``2.2.4-4``,  ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 
   :depends on python: 
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install bowtie2

to add into an existing workspace instead, run::

    pixi add bowtie2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bowtie2

Alternatively, to install into a new environment, run::

    conda create -n envname bowtie2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bowtie2:<tag>

(see `bowtie2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bowtie2| image:: https://img.shields.io/conda/dn/bioconda/bowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bowtie2
   :alt:   (downloads)
.. |docker_bowtie2| image:: https://quay.io/repository/biocontainers/bowtie2/status
   :target: https://quay.io/repository/biocontainers/bowtie2
.. _`bowtie2/tags`: https://quay.io/repository/biocontainers/bowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bowtie2";
        var versions = ["2.5.5","2.5.4","2.5.4","2.5.4","2.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie2/README.html