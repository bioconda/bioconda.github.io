:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge3'
.. highlight: bash

mirge3
======

.. conda:recipe:: mirge3
   :replaces_section_title:
   :noindex:

   Comprehensive analysis of small RNA sequencing Data

   :homepage: https://github.com/mhalushka/miRge3.0/
   :documentation: https://mirge3.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`mirge3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge3/meta.yaml>`_

   Comprehensive analysis of small RNA sequencing data


.. conda:package:: mirge3

   |downloads_mirge3| |docker_mirge3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  <code>0.1.1-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  </span></summary>
      

      ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: 
   :depends on biopython: 
   :depends on bowtie: 
   :depends on cutadapt: 
   :depends on future: ``>=0.18.2``
   :depends on joblib: ``>=0.15.1``
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on python: 
   :depends on r-ggplot2: 
   :depends on reportlab: ``>=3.5.42``
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.4.1``
   :depends on viennarna: 

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

    pixi global install mirge3

to add into an existing workspace instead, run::

    pixi add mirge3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirge3

Alternatively, to install into a new environment, run::

    conda create -n envname mirge3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirge3:<tag>

(see `mirge3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirge3| image:: https://img.shields.io/conda/dn/bioconda/mirge3.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge3
   :alt:   (downloads)
.. |docker_mirge3| image:: https://quay.io/repository/biocontainers/mirge3/status
   :target: https://quay.io/repository/biocontainers/mirge3
.. _`mirge3/tags`: https://quay.io/repository/biocontainers/mirge3?tab=tags


.. raw:: html

    <script>
        var package = "mirge3";
        var versions = ["0.1.4","0.1.4","0.1.2","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge3/README.html