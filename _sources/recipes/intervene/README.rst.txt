:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intervene'
.. highlight: bash

intervene
=========

.. conda:recipe:: intervene
   :replaces_section_title:
   :noindex:

   A tool for intersection of multiple gene or genomic region sets and visualization as venn diagrams\, UpSet plots or pariwaise heatmaps

   :homepage: https://github.com/asntech/intervene
   :license: MIT / MIT License
   :recipe: /`intervene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene/meta.yaml>`_
   :links: biotools: :biotools:`Intervene`, doi: :doi:`10.1186/s12859-017-1708-7`

   


.. conda:package:: intervene

   |downloads_intervene| |docker_intervene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-5</code>,  <code>0.6.4-4</code>,  <code>0.6.4-3</code>,  <code>0.6.4-2</code>,  <code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.2-0</code>,  </span></summary>
      

      ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-5``,  ``0.6.4-4``,  ``0.6.4-3``,  ``0.6.4-2``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.5.9-0``,  ``0.5.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.29.1``
   :depends on matplotlib-base: ``<3.4``
   :depends on numpy: 
   :depends on pandas: ``>=1.0.0``
   :depends on pybedtools: 
   :depends on pysam: ``>=0.15``
   :depends on python: 
   :depends on r-base: 
   :depends on r-cairo: 
   :depends on r-corrplot: 
   :depends on r-upsetr: ``>=1.4.0``
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install intervene

to add into an existing workspace instead, run::

    pixi add intervene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install intervene

Alternatively, to install into a new environment, run::

    conda create -n envname intervene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/intervene:<tag>

(see `intervene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_intervene| image:: https://img.shields.io/conda/dn/bioconda/intervene.svg?style=flat
   :target: https://anaconda.org/bioconda/intervene
   :alt:   (downloads)
.. |docker_intervene| image:: https://quay.io/repository/biocontainers/intervene/status
   :target: https://quay.io/repository/biocontainers/intervene
.. _`intervene/tags`: https://quay.io/repository/biocontainers/intervene?tab=tags


.. raw:: html

    <script>
        var package = "intervene";
        var versions = ["0.6.5","0.6.5","0.6.4","0.6.4","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervene/README.html