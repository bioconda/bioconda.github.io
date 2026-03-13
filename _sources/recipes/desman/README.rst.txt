:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'desman'
.. highlight: bash

desman
======

.. conda:recipe:: desman
   :replaces_section_title:
   :noindex:

   De novo Extraction of Strains from MetAgeNomes

   :homepage: https://github.com/chrisquince/DESMAN
   :license: BSD / BSD
   :recipe: /`desman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desman/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1309-9`

   


.. conda:package:: desman

   |downloads_desman| |docker_desman|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-10</code>,  <code>2.1-9</code>,  <code>2.1-8</code>,  <code>2.1-7</code>,  <code>2.1-6</code>,  <code>2.1-4</code>,  <code>2.1-3</code>,  <code>2.1-2</code>,  <code>2.1-1</code>,  </span></summary>
      

      ``2.1-10``,  ``2.1-9``,  ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on cython: ``>=0.19.1``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.0,<3.0a0``
   :depends on pandas: ``>=0.11.0``
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-getopt: 
   :depends on r-ggplot2: ``>=2.2.2``
   :depends on r-labeling: 
   :depends on r-reshape: ``>=0.8.7``
   :depends on scikit-learn: 
   :depends on scipy: ``>=0.12.0``
   :depends on setuptools: 

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

    pixi global install desman

to add into an existing workspace instead, run::

    pixi add desman

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install desman

Alternatively, to install into a new environment, run::

    conda create -n envname desman

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/desman:<tag>

(see `desman/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_desman| image:: https://img.shields.io/conda/dn/bioconda/desman.svg?style=flat
   :target: https://anaconda.org/bioconda/desman
   :alt:   (downloads)
.. |docker_desman| image:: https://quay.io/repository/biocontainers/desman/status
   :target: https://quay.io/repository/biocontainers/desman
.. _`desman/tags`: https://quay.io/repository/biocontainers/desman?tab=tags


.. raw:: html

    <script>
        var package = "desman";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desman/README.html