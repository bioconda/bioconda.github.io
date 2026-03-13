:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicup'
.. highlight: bash

hicup
=====

.. conda:recipe:: hicup
   :replaces_section_title:
   :noindex:

   A tool for mapping and performing quality control on Hi\-C data

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/hicup/
   :license: GPLv3
   :recipe: /`hicup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup/meta.yaml>`_
   :links: biotools: :biotools:`hicup`, doi: :doi:`10.12688/f1000research.7334.1`

   


.. conda:package:: hicup

   |downloads_hicup| |docker_hicup|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  </span></summary>
      

      ``0.9.2-1``,  ``0.9.2-0``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.10-0``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie: 
   :depends on bowtie2: 
   :depends on pandoc: 
   :depends on perl: 
   :depends on perl-bioperl: 
   :depends on r-base: 
   :depends on r-plotly: 
   :depends on r-rmarkdown: 
   :depends on r-stringi: ``>=1.7.8``
   :depends on r-tidyverse: 
   :depends on samtools: 

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

    pixi global install hicup

to add into an existing workspace instead, run::

    pixi add hicup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hicup

Alternatively, to install into a new environment, run::

    conda create -n envname hicup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hicup:<tag>

(see `hicup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hicup| image:: https://img.shields.io/conda/dn/bioconda/hicup.svg?style=flat
   :target: https://anaconda.org/bioconda/hicup
   :alt:   (downloads)
.. |docker_hicup| image:: https://quay.io/repository/biocontainers/hicup/status
   :target: https://quay.io/repository/biocontainers/hicup
.. _`hicup/tags`: https://quay.io/repository/biocontainers/hicup?tab=tags


.. raw:: html

    <script>
        var package = "hicup";
        var versions = ["0.9.2","0.9.2","0.8.3","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicup/README.html