:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gempipe'
.. highlight: bash

gempipe
=======

.. conda:recipe:: gempipe
   :replaces_section_title:
   :noindex:

   gempipe is a tool for the reconstruction of strain\-specific genome\-scale metabolic models.

   :homepage: https://github.com/lazzarigioele/gempipe
   :documentation: https://gempipe.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gempipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gempipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gempipe/meta.yaml>`_

   


.. conda:package:: gempipe

   |downloads_gempipe| |docker_gempipe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.5-0</code>,  <code>1.38.4-0</code>,  <code>1.38.3-0</code>,  <code>1.38.2-0</code>,  <code>1.38.1-0</code>,  <code>1.38.0-0</code>,  <code>1.37.7-0</code>,  <code>1.37.6-0</code>,  <code>1.37.5-0</code>,  </span></summary>
      

      ``1.38.5-0``,  ``1.38.4-0``,  ``1.38.3-0``,  ``1.38.2-0``,  ``1.38.1-0``,  ``1.38.0-0``,  ``1.37.7-0``,  ``1.37.6-0``,  ``1.37.5-0``,  ``1.37.4-0``,  ``1.37.3-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.35.5-0``,  ``1.35.4-0``,  ``1.35.3-0``,  ``1.35.2-0``,  ``1.35.1-0``,  ``1.35.0-0``,  ``1.34.2-0``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.33.4-0``,  ``1.33.3-0``,  ``1.33.2-0``,  ``1.33.1-0``,  ``1.33.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.80``
   :depends on blast: ``>=2.12.0``
   :depends on busco: ``>=5.4.0``
   :depends on cd-hit: ``>=4.8.1``
   :depends on cobra: ``>=0.29``
   :depends on diamond: ``>=2.0.15``
   :depends on eggnog-mapper: ``>=2.1.7``
   :depends on gzip: 
   :depends on ipython: ``>=8.7.0``
   :depends on matplotlib-base: ``>=3.7.0``
   :depends on ncbi-genome-download: ``>=0.3.3``
   :depends on openpyxl: ``>=3.1.0``
   :depends on pandas: ``>=2.0.0``
   :depends on pigz: ``>=2.5``
   :depends on prodigal: ``>=2.6.3``
   :depends on prokka: ``>=1.14.6``
   :depends on python: ``>=3.9``
   :depends on scikit-learn: ``>=1.3.0``
   :depends on scipy: ``>=1.10.0``
   :depends on seaborn: ``>=0.13.0``
   :depends on seqkit: ``>=2.2.0``
   :depends on tar: 
   :depends on wget: 

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

    pixi global install gempipe

to add into an existing workspace instead, run::

    pixi add gempipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gempipe

Alternatively, to install into a new environment, run::

    conda create -n envname gempipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gempipe:<tag>

(see `gempipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gempipe| image:: https://img.shields.io/conda/dn/bioconda/gempipe.svg?style=flat
   :target: https://anaconda.org/bioconda/gempipe
   :alt:   (downloads)
.. |docker_gempipe| image:: https://quay.io/repository/biocontainers/gempipe/status
   :target: https://quay.io/repository/biocontainers/gempipe
.. _`gempipe/tags`: https://quay.io/repository/biocontainers/gempipe?tab=tags


.. raw:: html

    <script>
        var package = "gempipe";
        var versions = ["1.38.5","1.38.4","1.38.3","1.38.2","1.38.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gempipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gempipe/README.html