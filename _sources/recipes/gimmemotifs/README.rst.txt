:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gimmemotifs'
.. highlight: bash

gimmemotifs
===========

.. conda:recipe:: gimmemotifs
   :replaces_section_title:
   :noindex:

   Motif prediction pipeline and various motif\-related tools.

   :homepage: https://github.com/vanheeringen-lab/gimmemotifs
   :documentation: https://gimmemotifs.readthedocs.io/en/master
   
   :license: MIT / MIT
   :recipe: /`gimmemotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs/meta.yaml>`_
   :links: biotools: :biotools:`gimmemotifs`, doi: :doi:`10.1093/bioinformatics/btq636`, doi: :doi:`10.1101/474403`

   Motif prediction pipeline and various motif\-related tools.


.. conda:package:: gimmemotifs

   |downloads_gimmemotifs| |docker_gimmemotifs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.18.0-7</code>,  <code>0.18.0-5</code>,  <code>0.18.0-4</code>,  <code>0.18.0-2</code>,  <code>0.18.0-1</code>,  <code>0.18.0-0</code>,  <code>0.17.2-1</code>,  </span></summary>
      

      ``0.18.1-1``,  ``0.18.1-0``,  ``0.18.0-7``,  ``0.18.0-5``,  ``0.18.0-4``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.2-1``,  ``0.17.2-0``,  ``0.17.1-2``,  ``0.17.1-1``,  ``0.17.1-0``,  ``0.17.0-2``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-2``,  ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.4-2``,  ``0.14.4-1``,  ``0.14.4-0``,  ``0.14.3-1``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-4``,  ``0.13.1-3``,  ``0.13.1-2``,  ``0.13.1-1``,  ``0.13.1-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.10.0b6-1``,  ``0.10.0b5-1``,  ``0.10.0b4-1``,  ``0.10.0b4-0``,  ``0.10.0b1-0``,  ``0.9.0.6-0``,  ``0.9.0.5-0``,  ``0.9.0.4-0``,  ``0.9.0.3-2``,  ``0.8.9.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on dinamo: ``>=1.0``
   :depends on gadem: ``>=1.3.1``
   :depends on gimmemotifs-minimal: ``0.18.1.*``
   :depends on homer: ``>=4.11``
   :depends on meme: ``>=5.5.7``
   :depends on prosampler: ``>=1.5``
   :depends on trawler: ``>=2.0``
   :depends on weeder: ``>=2.0``
   :depends on xxmotif: ``>=1.6``

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

    pixi global install gimmemotifs

to add into an existing workspace instead, run::

    pixi add gimmemotifs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gimmemotifs

Alternatively, to install into a new environment, run::

    conda create -n envname gimmemotifs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gimmemotifs:<tag>

(see `gimmemotifs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gimmemotifs| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs.svg?style=flat
   :target: https://anaconda.org/bioconda/gimmemotifs
   :alt:   (downloads)
.. |docker_gimmemotifs| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs
.. _`gimmemotifs/tags`: https://quay.io/repository/biocontainers/gimmemotifs?tab=tags


.. raw:: html

    <script>
        var package = "gimmemotifs";
        var versions = ["0.18.1","0.18.1","0.18.0","0.18.0","0.18.0"];
    </script>


.. conda:package:: gimmemotifs-minimal

   |downloads_gimmemotifs-minimal| |docker_gimmemotifs-minimal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.18.0-7</code>,  <code>0.18.0-5</code>,  <code>0.18.0-4</code>,  <code>0.18.0-2</code>,  <code>0.18.0-1</code>,  <code>0.18.0-0</code>,  <code>0.17.2-1</code>,  </span></summary>
      

      ``0.18.1-1``,  ``0.18.1-0``,  ``0.18.0-7``,  ``0.18.0-5``,  ``0.18.0-4``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.2-1``,  ``0.17.2-0``,  ``0.17.1-2``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on biofluff: ``>=3.0.4``
   :depends on configparser: 
   :depends on diskcache: 
   :depends on feather-format: 
   :depends on genomepy: ``>=0.14.0``
   :depends on iteround: 
   :depends on jinja2: 
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on logomaker: 
   :depends on loguru: 
   :depends on matplotlib-base: ``>=3.3``
   :depends on numpy: ``>=1.18``
   :depends on pandas: ``>=1.3``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.16``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-xxhash: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on qnorm: ``>=0.8.1``
   :depends on scikit-learn: ``>=0.23.2``
   :depends on scipy: ``>=1.5``
   :depends on seaborn-base: ``>=0.10.1``
   :depends on statsmodels: 
   :depends on tqdm: ``>=4.46.1``
   :depends on xdg: 

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

    pixi global install gimmemotifs-minimal

to add into an existing workspace instead, run::

    pixi add gimmemotifs-minimal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gimmemotifs-minimal

Alternatively, to install into a new environment, run::

    conda create -n envname gimmemotifs-minimal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gimmemotifs-minimal:<tag>

(see `gimmemotifs-minimal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gimmemotifs-minimal| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs-minimal.svg?style=flat
   :target: https://anaconda.org/bioconda/gimmemotifs-minimal
   :alt:   (downloads)
.. |docker_gimmemotifs-minimal| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs
.. _`gimmemotifs-minimal/tags`: https://quay.io/repository/biocontainers/gimmemotifs-minimal?tab=tags


.. raw:: html

    <script>
        var package = "gimmemotifs";
        var versions = ["0.18.1","0.18.1","0.18.0","0.18.0","0.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimmemotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimmemotifs/README.html