:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyseer'
.. highlight: bash

pyseer
======

.. conda:recipe:: pyseer
   :replaces_section_title:
   :noindex:

   Sequence Element Enrichment Analysis \(SEER\)\, python implementation.

   :homepage: https://github.com/mgalardini/pyseer
   :documentation: https://pyseer.readthedocs.io/en/master
   
   :license: APACHE / Apache-2.0
   :recipe: /`pyseer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyseer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty539`, doi: :doi:`10.1101/852426v1`

   


.. conda:package:: pyseer

   |downloads_pyseer| |docker_pyseer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.12-0</code>,  <code>1.3.11-0</code>,  <code>1.3.10-0</code>,  <code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedops: 
   :depends on bedtools: 
   :depends on bwa: 
   :depends on dendropy: 
   :depends on glmnet_py: 
   :depends on mash: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.6``
   :depends on python-dateutil: ``>=2.5.0``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on statsmodels: ``>=0.10``
   :depends on tqdm: 

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

    pixi global install pyseer

to add into an existing workspace instead, run::

    pixi add pyseer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyseer

Alternatively, to install into a new environment, run::

    conda create -n envname pyseer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyseer:<tag>

(see `pyseer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyseer| image:: https://img.shields.io/conda/dn/bioconda/pyseer.svg?style=flat
   :target: https://anaconda.org/bioconda/pyseer
   :alt:   (downloads)
.. |docker_pyseer| image:: https://quay.io/repository/biocontainers/pyseer/status
   :target: https://quay.io/repository/biocontainers/pyseer
.. _`pyseer/tags`: https://quay.io/repository/biocontainers/pyseer?tab=tags


.. raw:: html

    <script>
        var package = "pyseer";
        var versions = ["1.4.0","1.3.12","1.3.11","1.3.10","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyseer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyseer/README.html