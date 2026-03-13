:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toulligqc'
.. highlight: bash

toulligqc
=========

.. conda:recipe:: toulligqc
   :replaces_section_title:
   :noindex:

   A post sequencing QC tool for Oxford Nanopore sequencers.

   :homepage: https://github.com/GenomicParisCentre/toulligQC
   :documentation: https://github.com/GenomiqueENS/toulligQC/blob/v2.8.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`toulligqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc/meta.yaml>`_
   :links: biotools: :biotools:`ToulligQC`

   


.. conda:package:: toulligqc

   |downloads_toulligqc| |docker_toulligqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.4-0</code>,  <code>2.8.3-0</code>,  <code>2.8-0</code>,  <code>2.7.1-1</code>,  <code>2.7.1-0</code>,  <code>2.5.6-0</code>,  <code>2.5.5-0</code>,  <code>2.5.4-0</code>,  <code>2.5.3-0</code>,  </span></summary>
      

      ``2.8.4-0``,  ``2.8.3-0``,  ``2.8-0``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.10-0``,  ``0.9-2``,  ``0.9-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on h5py: ``>=3.10.0``
   :depends on matplotlib-base: ``>=3.6.3``
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=2.1.4``
   :depends on plotly: ``>=5.15.0,<6.0.0``
   :depends on pod5: ``>=0.3.15``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.11``
   :depends on scikit-learn: ``>=1.4.1``
   :depends on scipy: ``>=1.11.4``
   :depends on tqdm: ``>=4.66.2``

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

    pixi global install toulligqc

to add into an existing workspace instead, run::

    pixi add toulligqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install toulligqc

Alternatively, to install into a new environment, run::

    conda create -n envname toulligqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/toulligqc:<tag>

(see `toulligqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_toulligqc| image:: https://img.shields.io/conda/dn/bioconda/toulligqc.svg?style=flat
   :target: https://anaconda.org/bioconda/toulligqc
   :alt:   (downloads)
.. |docker_toulligqc| image:: https://quay.io/repository/biocontainers/toulligqc/status
   :target: https://quay.io/repository/biocontainers/toulligqc
.. _`toulligqc/tags`: https://quay.io/repository/biocontainers/toulligqc?tab=tags


.. raw:: html

    <script>
        var package = "toulligqc";
        var versions = ["2.8.4","2.8.3","2.8","2.7.1","2.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toulligqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toulligqc/README.html