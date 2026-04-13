:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgt'
.. highlight: bash

rgt
===

.. conda:recipe:: rgt
   :replaces_section_title:
   :noindex:

   Toolkit to perform regulatory genomics data analysis

   :homepage: http://www.regulatory-genomics.org
   :documentation: http://www.regulatory-genomics.org/rgt/tutorial/
   
   :developer docs: https://github.com/CostaLab/reg-gen
   :license: GPL / GPL-3.0-or-later
   :recipe: /`rgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgt/meta.yaml>`_

   


.. conda:package:: rgt

   |downloads_rgt| |docker_rgt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.12.3-3</code>,  <code>0.12.3-2</code>,  <code>0.12.3-1</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.11.4-2</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.3-3``,  ``0.12.3-2``,  ``0.12.3-1``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.11.4-2``,  ``0.11.4-1``,  ``0.11.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on biopython: ``>=1.64``
   :depends on fisher: ``>=0.1.5``
   :depends on hmmlearn: ``0.2.2``
   :depends on htseq: 
   :depends on joblib: 
   :depends on libgcc-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on logomaker: 
   :depends on matplotlib-base: ``>=1.1.0``
   :depends on matplotlib-venn: 
   :depends on moods: ``>=1.9.4.1``
   :depends on mpmath: 
   :depends on natsort: 
   :depends on numpy: ``>=1.4.0``
   :depends on pandas: 
   :depends on pybigwig: 
   :depends on pysam: ``>=0.20.0``
   :depends on python: ``>=3.7,<3.8.0a0``
   :depends on python_abi: ``3.7.* *_cp37m``
   :depends on pyx: 
   :depends on scikit-learn: ``>=0.19.0``
   :depends on scipy: ``>=1.0.0``
   :depends on seaborn: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-bigbedtobed: 
   :depends on ucsc-bigwigmerge: 
   :depends on ucsc-wigtobigwig: 

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

    pixi global install rgt

to add into an existing workspace instead, run::

    pixi add rgt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rgt

Alternatively, to install into a new environment, run::

    conda create -n envname rgt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rgt:<tag>

(see `rgt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rgt| image:: https://img.shields.io/conda/dn/bioconda/rgt.svg?style=flat
   :target: https://anaconda.org/bioconda/rgt
   :alt:   (downloads)
.. |docker_rgt| image:: https://quay.io/repository/biocontainers/rgt/status
   :target: https://quay.io/repository/biocontainers/rgt
.. _`rgt/tags`: https://quay.io/repository/biocontainers/rgt?tab=tags


.. raw:: html

    <script>
        var package = "rgt";
        var versions = ["1.0.2","1.0.1","1.0.0","0.12.3","0.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgt/README.html