:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uropa'
.. highlight: bash

uropa
=====

.. conda:recipe:: uropa
   :replaces_section_title:
   :noindex:

   UROPA \(Universal RObust Peak Annotator\) is a command line based tool\, intended for genomic region annotation from e.g. peak calling.
   It detects the most appropriate annotation by taking parameters such as feature type\, anchor\, direction and strand into account.
   Furthermore\, it allows filtering for GTF attribute values\, e.g. protein\_coding.


   :homepage: https://github.com/loosolab/UROPA
   :documentation: http://uropa-manual.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`uropa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa/meta.yaml>`_

   


.. conda:package:: uropa

   |downloads_uropa| |docker_uropa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.3-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.5.3-0</code>,  <code>3.5.2-0</code>,  <code>3.5.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.4-0</code>,  </span></summary>
      

      ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.5.3-0``,  ``3.5.2-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.3-0``,  ``2.0.2a0-2``,  ``2.0.2a0-0``,  ``2.0.0a0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: 
   :depends on bioconductor-rbgl: 
   :depends on numpy: 
   :depends on psutil: 
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.6``
   :depends on r-base: 
   :depends on r-getopt: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-jsonlite: 
   :depends on r-tidyr: 
   :depends on r-upsetr: 
   :depends on r-venndiagram: 

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

    pixi global install uropa

to add into an existing workspace instead, run::

    pixi add uropa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install uropa

Alternatively, to install into a new environment, run::

    conda create -n envname uropa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/uropa:<tag>

(see `uropa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_uropa| image:: https://img.shields.io/conda/dn/bioconda/uropa.svg?style=flat
   :target: https://anaconda.org/bioconda/uropa
   :alt:   (downloads)
.. |docker_uropa| image:: https://quay.io/repository/biocontainers/uropa/status
   :target: https://quay.io/repository/biocontainers/uropa
.. _`uropa/tags`: https://quay.io/repository/biocontainers/uropa?tab=tags


.. raw:: html

    <script>
        var package = "uropa";
        var versions = ["4.0.3","4.0.2","4.0.1","4.0.0","3.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uropa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uropa/README.html