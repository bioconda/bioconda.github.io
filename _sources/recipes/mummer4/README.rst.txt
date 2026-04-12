:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer4'
.. highlight: bash

mummer4
=======

.. conda:recipe:: mummer4
   :replaces_section_title:
   :noindex:

   MUMmer is a system for rapidly aligning entire genomes.

   :homepage: https://mummer4.github.io
   :documentation: https://github.com/mummer4/mummer/blob/v4.0.1/README.md
   
   :developer docs: https://github.com/mummer4/mummer
   :license: Artistic License 2.0
   :recipe: /`mummer4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1005944`, biotools: :biotools:`mummer4`, usegalaxy-eu: :usegalaxy-eu:`mummer_mummer`, usegalaxy-eu: :usegalaxy-eu:`mummerplot`, usegalaxy-eu: :usegalaxy-eu:`mummerplot_wrapper`

   


.. conda:package:: mummer4

   |downloads_mummer4| |docker_mummer4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>4.0.0rc1-8</code>,  <code>4.0.0rc1-7</code>,  <code>4.0.0rc1-6</code>,  <code>4.0.0rc1-5</code>,  <code>4.0.0rc1-4</code>,  <code>4.0.0rc1-3</code>,  <code>4.0.0rc1-2</code>,  </span></summary>
      

      ``4.0.1-0``,  ``4.0.0-0``,  ``4.0.0rc1-8``,  ``4.0.0rc1-7``,  ``4.0.0rc1-6``,  ``4.0.0rc1-5``,  ``4.0.0rc1-4``,  ``4.0.0rc1-3``,  ``4.0.0rc1-2``,  ``4.0.0rc1-1``,  ``4.0.0rc1-0``,  ``4.0.0beta2-5``,  ``4.0.0beta2-4``,  ``4.0.0beta2-3``,  ``4.0.0beta2-2``,  ``4.0.0beta2-1``,  ``4.0.0beta2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on yaggo: ``>=1.5.10,<1.6.0a0``

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

    pixi global install mummer4

to add into an existing workspace instead, run::

    pixi add mummer4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mummer4

Alternatively, to install into a new environment, run::

    conda create -n envname mummer4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mummer4:<tag>

(see `mummer4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mummer4| image:: https://img.shields.io/conda/dn/bioconda/mummer4.svg?style=flat
   :target: https://anaconda.org/bioconda/mummer4
   :alt:   (downloads)
.. |docker_mummer4| image:: https://quay.io/repository/biocontainers/mummer4/status
   :target: https://quay.io/repository/biocontainers/mummer4
.. _`mummer4/tags`: https://quay.io/repository/biocontainers/mummer4?tab=tags


.. raw:: html

    <script>
        var package = "mummer4";
        var versions = ["4.0.1","4.0.0","4.0.0rc1","4.0.0rc1","4.0.0rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer4/README.html