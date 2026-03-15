:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoquant'
.. highlight: bash

isoquant
========

.. conda:recipe:: isoquant
   :replaces_section_title:
   :noindex:

   IsoQuant is a tool for reference\-based analysis of long RNA reads\, such as gene\/transcript quantification and discovery.

   :homepage: https://github.com/ablab/IsoQuant
   :documentation: https://ablab.github.io/IsoQuant
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`isoquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01565-y`

   


.. conda:package:: isoquant

   |downloads_isoquant| |docker_isoquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.11.0-0</code>,  <code>3.10.0-0</code>,  <code>3.9.0-0</code>,  <code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.3-0</code>,  <code>3.6.2-0</code>,  </span></summary>
      

      ``3.12.0-0``,  ``3.11.1-0``,  ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.0-0``,  ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.3-0``,  ``3.6.2-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on argcomplete: ``>=1.11.1``
   :depends on argh: ``>=0.26.2``
   :depends on coverage: ``>=7.6``
   :depends on editdistance: ``>=0.6.2``
   :depends on gffutils: ``>=0.10.1``
   :depends on minimap2: ``>=2.18``
   :depends on numba: ``>=0.58``
   :depends on numpy: ``>=1.24``
   :depends on packaging: 
   :depends on pandas: ``>=1.0.1``
   :depends on pyfaidx: ``>=0.7``
   :depends on pysam: ``>=0.15``
   :depends on python: 
   :depends on pyyaml: ``>=5.4``
   :depends on samtools: ``>=1.14``
   :depends on scipy: ``>=1.10``
   :depends on seaborn-base: ``>=0.10.0``
   :depends on simplejson: ``>=3.17.0``
   :depends on six: ``>=1.14.0``
   :depends on ssw-py: ``>=1.0``
   :depends on star: 

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

    pixi global install isoquant

to add into an existing workspace instead, run::

    pixi add isoquant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isoquant

Alternatively, to install into a new environment, run::

    conda create -n envname isoquant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isoquant:<tag>

(see `isoquant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isoquant| image:: https://img.shields.io/conda/dn/bioconda/isoquant.svg?style=flat
   :target: https://anaconda.org/bioconda/isoquant
   :alt:   (downloads)
.. |docker_isoquant| image:: https://quay.io/repository/biocontainers/isoquant/status
   :target: https://quay.io/repository/biocontainers/isoquant
.. _`isoquant/tags`: https://quay.io/repository/biocontainers/isoquant?tab=tags


.. raw:: html

    <script>
        var package = "isoquant";
        var versions = ["3.12.0","3.11.1","3.11.0","3.10.0","3.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoquant/README.html