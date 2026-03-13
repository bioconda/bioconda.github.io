:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metachip'
.. highlight: bash

metachip
========

.. conda:recipe:: metachip
   :replaces_section_title:
   :noindex:

   HGT detection pipeline

   :homepage: https://github.com/songweizhi/MetaCHIP
   :license: GPL3 / GPL3+
   :recipe: /`metachip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metachip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-019-0649-y`

   


.. conda:package:: metachip

   |downloads_metachip| |docker_metachip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.13-0</code>,  <code>1.10.12-0</code>,  <code>1.10.10-0</code>,  <code>1.10.9-0</code>,  <code>1.10.8-0</code>,  <code>1.10.6-0</code>,  <code>1.10.5-0</code>,  <code>1.10.4-0</code>,  <code>1.10.3-0</code>,  </span></summary>
      

      ``1.10.13-0``,  ``1.10.12-0``,  ``1.10.10-0``,  ``1.10.9-0``,  ``1.10.8-0``,  ``1.10.6-0``,  ``1.10.5-0``,  ``1.10.4-0``,  ``1.10.3-0``,  ``1.10.2-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``<=1.77``
   :depends on blast: 
   :depends on ete3: 
   :depends on fasttree: 
   :depends on hmmer: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on prodigal: 
   :depends on python: 
   :depends on r-ape: 
   :depends on r-base: 
   :depends on r-circlize: 
   :depends on r-optparse: 
   :depends on reportlab: 
   :depends on scipy: 

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

    pixi global install metachip

to add into an existing workspace instead, run::

    pixi add metachip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metachip

Alternatively, to install into a new environment, run::

    conda create -n envname metachip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metachip:<tag>

(see `metachip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metachip| image:: https://img.shields.io/conda/dn/bioconda/metachip.svg?style=flat
   :target: https://anaconda.org/bioconda/metachip
   :alt:   (downloads)
.. |docker_metachip| image:: https://quay.io/repository/biocontainers/metachip/status
   :target: https://quay.io/repository/biocontainers/metachip
.. _`metachip/tags`: https://quay.io/repository/biocontainers/metachip?tab=tags


.. raw:: html

    <script>
        var package = "metachip";
        var versions = ["1.10.13","1.10.12","1.10.10","1.10.9","1.10.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metachip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metachip/README.html