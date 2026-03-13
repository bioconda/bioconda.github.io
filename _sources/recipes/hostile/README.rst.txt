:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hostile'
.. highlight: bash

hostile
=======

.. conda:recipe:: hostile
   :replaces_section_title:
   :noindex:

   Hostile\: accurate host decontamination.

   :homepage: https://github.com/bede/hostile
   :documentation: https://github.com/bede/hostile/blob/2.0.2/README.md
   
   :license: MIT / MIT
   :recipe: /`hostile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hostile/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad728`, biotools: :biotools:`hostile`

   


.. conda:package:: hostile

   |downloads_hostile| |docker_hostile|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.31.1``
   :depends on bowtie2: ``2.5.4``
   :depends on defopt: ``>=7.0.0``
   :depends on dnaio: ``>=1.2.0``
   :depends on httpx: ``>=0.24.1``
   :depends on minimap2: ``>=2.28``
   :depends on platformdirs: ``>=3.5.1``
   :depends on python: ``>=3.10``
   :depends on samtools: ``>=1.17``
   :depends on tqdm: ``>=4.65.0``

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

    pixi global install hostile

to add into an existing workspace instead, run::

    pixi add hostile

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hostile

Alternatively, to install into a new environment, run::

    conda create -n envname hostile

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hostile:<tag>

(see `hostile/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hostile| image:: https://img.shields.io/conda/dn/bioconda/hostile.svg?style=flat
   :target: https://anaconda.org/bioconda/hostile
   :alt:   (downloads)
.. |docker_hostile| image:: https://quay.io/repository/biocontainers/hostile/status
   :target: https://quay.io/repository/biocontainers/hostile
.. _`hostile/tags`: https://quay.io/repository/biocontainers/hostile?tab=tags


.. raw:: html

    <script>
        var package = "hostile";
        var versions = ["2.0.2","2.0.1","2.0.0","2.0.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hostile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hostile/README.html