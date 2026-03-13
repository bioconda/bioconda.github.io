:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainr2'
.. highlight: bash

strainr2
========

.. conda:recipe:: strainr2
   :replaces_section_title:
   :noindex:

   StrainR2 accurately deconvolutes strain\-level abundances in synthetic microbial communities using metagenomic sequencing reads

   :homepage: https://github.com/BisanzLab/StrainR2
   :license: MIT / MIT
   :recipe: /`strainr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainr2/meta.yaml>`_

   


.. conda:package:: strainr2

   |downloads_strainr2| |docker_strainr2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``2.3.0-0``,  ``2.2.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on bedtools: 
   :depends on fastp: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-optparse: 
   :depends on r-tidyverse: 
   :depends on samtools: 

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

    pixi global install strainr2

to add into an existing workspace instead, run::

    pixi add strainr2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strainr2

Alternatively, to install into a new environment, run::

    conda create -n envname strainr2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strainr2:<tag>

(see `strainr2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strainr2| image:: https://img.shields.io/conda/dn/bioconda/strainr2.svg?style=flat
   :target: https://anaconda.org/bioconda/strainr2
   :alt:   (downloads)
.. |docker_strainr2| image:: https://quay.io/repository/biocontainers/strainr2/status
   :target: https://quay.io/repository/biocontainers/strainr2
.. _`strainr2/tags`: https://quay.io/repository/biocontainers/strainr2?tab=tags


.. raw:: html

    <script>
        var package = "strainr2";
        var versions = ["2.3.0","2.2.1","2.1.0","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainr2/README.html