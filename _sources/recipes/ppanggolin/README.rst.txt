:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ppanggolin'
.. highlight: bash

ppanggolin
==========

.. conda:recipe:: ppanggolin
   :replaces_section_title:
   :noindex:

   PPanGGOLiN\: Depicting microbial species diversity via a Partitioned PanGenome Graph.

   :homepage: https://github.com/labgem/PPanGGOLiN
   :documentation: https://ppanggolin.readthedocs.io
   
   :license: OTHER / CeCiLL-2.1
   :recipe: /`ppanggolin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ppanggolin/meta.yaml>`_
   :links: biotools: :biotools:`PPanGGOLiN`, usegalaxy-eu: :usegalaxy-eu:`ppanggolin_all`, usegalaxy-eu: :usegalaxy-eu:`ppanggolin_msa`, doi: :doi:`10.1101/836239`

   


.. conda:package:: ppanggolin

   |downloads_ppanggolin| |docker_ppanggolin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.6-0</code>,  <code>2.2.5-1</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-1</code>,  <code>2.2.2-0</code>,  <code>2.2.1-2</code>,  <code>2.2.1-1</code>,  </span></summary>
      

      ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.105-1``,  ``1.2.105-0``,  ``1.2.74-1``,  ``1.2.74-0``,  ``1.2.63-1``,  ``1.2.63-0``,  ``1.2.61-0``,  ``1.2.46-1``,  ``1.2.46-0``,  ``1.1.136-1``,  ``1.1.136-0``,  ``1.1.131-0``,  ``1.1.96-0``,  ``1.1.85-1``,  ``1.1.85-0``,  ``1.1.72-0``,  ``1.0.13-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``v0.3.88-1``,  ``v0.3.88-0``

      
      .. raw:: html

         </details>
      

   
   :depends on aragorn: ``1.*``
   :depends on bokeh: ``>=3.0.0,<4.0.0``
   :depends on dataclasses: ``0.8.*``
   :depends on gmpy2: ``>=2.0.0,<3.0.0``
   :depends on infernal: ``1.*``
   :depends on libgcc: ``>=13``
   :depends on mafft: ``7.*``
   :depends on mmseqs2: ``15.*``
   :depends on networkx: ``>=3.0.0,<4.0.0``
   :depends on numpy: ``>1.24.0,<2.0.0``
   :depends on pandas: ``>=2.0.0,<3.0.0``
   :depends on plotly: ``>=5.0.0,<6.0.0``
   :depends on pyrodigal: ``>=3.0.0,<4.0.0``
   :depends on pytables: ``>=3.8.0,<4.0.0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.0.0,<2.0.0``
   :depends on tqdm: ``>=4.0.0,<5.0.0``

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

    pixi global install ppanggolin

to add into an existing workspace instead, run::

    pixi add ppanggolin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ppanggolin

Alternatively, to install into a new environment, run::

    conda create -n envname ppanggolin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ppanggolin:<tag>

(see `ppanggolin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ppanggolin| image:: https://img.shields.io/conda/dn/bioconda/ppanggolin.svg?style=flat
   :target: https://anaconda.org/bioconda/ppanggolin
   :alt:   (downloads)
.. |docker_ppanggolin| image:: https://quay.io/repository/biocontainers/ppanggolin/status
   :target: https://quay.io/repository/biocontainers/ppanggolin
.. _`ppanggolin/tags`: https://quay.io/repository/biocontainers/ppanggolin?tab=tags


.. raw:: html

    <script>
        var package = "ppanggolin";
        var versions = ["2.2.6","2.2.5","2.2.5","2.2.4","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ppanggolin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ppanggolin/README.html