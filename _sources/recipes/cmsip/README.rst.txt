:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmsip'
.. highlight: bash

cmsip
=====

.. conda:recipe:: cmsip
   :replaces_section_title:
   :noindex:

   A package for detecting differential 5hmC regions from CMS\-IP sequencing data.

   :homepage: https://github.com/lijinbio/cmsip
   :license: MIT / MIT
   :recipe: /`cmsip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmsip/meta.yaml>`_

   


.. conda:package:: cmsip

   |downloads_cmsip| |docker_cmsip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.3.0-0</code>,  <code>0.0.2.9-0</code>,  <code>0.0.2.8-1</code>,  <code>0.0.2.8-0</code>,  <code>0.0.2.6-0</code>,  <code>0.0.2.3-0</code>,  <code>0.0.2.1-1</code>,  <code>0.0.2.1-0</code>,  <code>0.0.2.0-0</code>,  </span></summary>
      

      ``0.0.3.0-0``,  ``0.0.2.9-0``,  ``0.0.2.8-1``,  ``0.0.2.8-0``,  ``0.0.2.6-0``,  ``0.0.2.3-0``,  ``0.0.2.1-1``,  ``0.0.2.1-0``,  ``0.0.2.0-0``,  ``0.0.1.8-0``,  ``0.0.1.7-0``,  ``0.0.1.4-1``,  ``0.0.1.4-0``,  ``0.0.1.3-0``,  ``0.0.1.2-0``,  ``0.0.1.1.9-0``,  ``0.0.1.1.1-0``,  ``0.0.0.9-0``,  ``0.0.0.6-0``,  ``0.0.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-genefilter: 
   :depends on gawk: 
   :depends on matplotlib-base: 
   :depends on moabs: 
   :depends on python: ``>=3``
   :depends on pyyaml: 
   :depends on r-base: 
   :depends on r-desctools: 
   :depends on ucsc-fetchchromsizes: 

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

    pixi global install cmsip

to add into an existing workspace instead, run::

    pixi add cmsip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cmsip

Alternatively, to install into a new environment, run::

    conda create -n envname cmsip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cmsip:<tag>

(see `cmsip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cmsip| image:: https://img.shields.io/conda/dn/bioconda/cmsip.svg?style=flat
   :target: https://anaconda.org/bioconda/cmsip
   :alt:   (downloads)
.. |docker_cmsip| image:: https://quay.io/repository/biocontainers/cmsip/status
   :target: https://quay.io/repository/biocontainers/cmsip
.. _`cmsip/tags`: https://quay.io/repository/biocontainers/cmsip?tab=tags


.. raw:: html

    <script>
        var package = "cmsip";
        var versions = ["0.0.3.0","0.0.2.9","0.0.2.8","0.0.2.8","0.0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmsip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmsip/README.html