:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadaist2'
.. highlight: bash

dadaist2
========

.. conda:recipe:: dadaist2
   :replaces_section_title:
   :noindex:

   Command line wrapper to run DADA2 on a set of paired\-end reads

   :homepage: https://quadram-institute-bioscience.github.io/dadaist2
   :developer docs: https://github.com/quadram-institute-bioscience/dadaist2
   :license: MIT
   :recipe: /`dadaist2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2/meta.yaml>`_
   :links: biotools: :biotools:`dadaist2`, doi: :doi:`10.3390/ijms22105309`

   Command line wrapper to run DADA2 on a set of paired\-end reads with several exporting tools to generate plots and numerical ecology analyses


.. conda:package:: dadaist2

   |downloads_dadaist2| |docker_dadaist2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-2</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.5-0``,  ``0.7.3-2``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.4.00-2``,  ``0.4.00-1``,  ``0.4.00-0``,  ``0.2.00-0``,  ``0.1.04-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dada2: ``>=1.34.0``
   :depends on bioconductor-decipher: 
   :depends on bioconductor-microbiome: 
   :depends on bioconductor-phyloseq: 
   :depends on biom-format: ``2.1.10.*``
   :depends on click: 
   :depends on clustalo: 
   :depends on cutadapt: ``>=3.4``
   :depends on fastp: 
   :depends on fasttree: 
   :depends on iqtree: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on pandas: ``>=1.0``
   :depends on perl: 
   :depends on perl-fastx-reader: ``>=0.90``
   :depends on pyfastx: 
   :depends on python: ``>=3.7``
   :depends on r-matrix: ``>=1.4``
   :depends on requests: 
   :depends on rich: 
   :depends on rich-click: 
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on seqfu: 
   :depends on usearch: 

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

    pixi global install dadaist2

to add into an existing workspace instead, run::

    pixi add dadaist2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dadaist2

Alternatively, to install into a new environment, run::

    conda create -n envname dadaist2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dadaist2:<tag>

(see `dadaist2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dadaist2| image:: https://img.shields.io/conda/dn/bioconda/dadaist2.svg?style=flat
   :target: https://anaconda.org/bioconda/dadaist2
   :alt:   (downloads)
.. |docker_dadaist2| image:: https://quay.io/repository/biocontainers/dadaist2/status
   :target: https://quay.io/repository/biocontainers/dadaist2
.. _`dadaist2/tags`: https://quay.io/repository/biocontainers/dadaist2?tab=tags


.. raw:: html

    <script>
        var package = "dadaist2";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.0","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadaist2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadaist2/README.html