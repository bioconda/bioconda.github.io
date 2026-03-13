:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutmap'
.. highlight: bash

mutmap
======

.. conda:recipe:: mutmap
   :replaces_section_title:
   :noindex:

   MutMap\: pipeline to identify causative mutations responsible for a phenotype.

   :homepage: https://github.com/YuSugihara/MutMap
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mutmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap/meta.yaml>`_
   :links: biotools: :biotools:`mutmap`, doi: :doi:`10.1038/nbt.2095`

   


.. conda:package:: mutmap

   |downloads_mutmap| |docker_mutmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.9-0</code>,  <code>2.3.8-0</code>,  <code>2.3.6-0</code>,  <code>2.3.5-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  </span></summary>
      

      ``2.3.9-0``,  ``2.3.8-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: ``>=1.7``
   :depends on bwa: 
   :depends on htslib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.5``
   :depends on samtools: ``>=1.7``
   :depends on seaborn-base: 
   :depends on snpeff: 
   :depends on trimmomatic: 

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

    pixi global install mutmap

to add into an existing workspace instead, run::

    pixi add mutmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mutmap

Alternatively, to install into a new environment, run::

    conda create -n envname mutmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mutmap:<tag>

(see `mutmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mutmap| image:: https://img.shields.io/conda/dn/bioconda/mutmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mutmap
   :alt:   (downloads)
.. |docker_mutmap| image:: https://quay.io/repository/biocontainers/mutmap/status
   :target: https://quay.io/repository/biocontainers/mutmap
.. _`mutmap/tags`: https://quay.io/repository/biocontainers/mutmap?tab=tags


.. raw:: html

    <script>
        var package = "mutmap";
        var versions = ["2.3.9","2.3.8","2.3.6","2.3.5","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutmap/README.html