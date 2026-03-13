:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hopla'
.. highlight: bash

hopla
=====

.. conda:recipe:: hopla
   :replaces_section_title:
   :noindex:

   Hopla enables classic genomic single\, duo\, trio\, etc.\, analysis\, by studying a single \(multisample\) vcf\-file

   :homepage: https://github.com/CenterForMedicalGeneticsGhent/Hopla
   :license: MIT / MIT
   :recipe: /`hopla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hopla/meta.yaml>`_

   


.. conda:package:: hopla

   |downloads_hopla| |docker_hopla|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.0-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-dnacopy: ``>=1.64.0``
   :depends on bioconductor-genomicranges: ``>=1.42.0``
   :depends on merlin: ``1.1.2.*``
   :depends on pandoc: ``>=3.1.5``
   :depends on r-base: 
   :depends on r-data.table: ``>=1.13.2``
   :depends on r-htmltools: ``>=0.5.0``
   :depends on r-kinship2: ``>=1.8.5``
   :depends on r-knitr: ``>=1.29``
   :depends on r-plotly: ``>=4.9.2.1``
   :depends on r-rcolorbrewer: ``>=1.1_2``
   :depends on r-vcfr: ``>=1.12.0``

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

    pixi global install hopla

to add into an existing workspace instead, run::

    pixi add hopla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hopla

Alternatively, to install into a new environment, run::

    conda create -n envname hopla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hopla:<tag>

(see `hopla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hopla| image:: https://img.shields.io/conda/dn/bioconda/hopla.svg?style=flat
   :target: https://anaconda.org/bioconda/hopla
   :alt:   (downloads)
.. |docker_hopla| image:: https://quay.io/repository/biocontainers/hopla/status
   :target: https://quay.io/repository/biocontainers/hopla
.. _`hopla/tags`: https://quay.io/repository/biocontainers/hopla?tab=tags


.. raw:: html

    <script>
        var package = "hopla";
        var versions = ["1.2.1","1.2.1","1.2.0","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hopla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hopla/README.html