:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdrpcatch'
.. highlight: bash

rdrpcatch
=========

.. conda:recipe:: rdrpcatch
   :replaces_section_title:
   :noindex:

   RNA virus RdRp sequence scanner.

   :homepage: https://github.com/dimitris-karapliafis/RdRpCATCH
   :license: MIT / MIT
   :recipe: /`rdrpcatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdrpcatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdrpcatch/meta.yaml>`_

   RdRpCATCH \(RNA\-dependent RNA polymerase Collaborative Analysis Tool with Collections of pHMMs\) 
   is a tool for scanning sequences for RNA\-dependent RNA polymerases \(RdRps\) using profile HMMs.



.. conda:package:: rdrpcatch

   |downloads_rdrpcatch| |docker_rdrpcatch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1.post1-0</code>,  <code>1.0.1-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``1.0.1.post1-0``,  ``1.0.1-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on altair: ``5.5.0``
   :depends on matplotlib-base: ``3.10.1``
   :depends on mmseqs2: ``17.b804f``
   :depends on needletail: ``0.6.3``
   :depends on numpy: ``2.2.4``
   :depends on pandas: ``2.2.3``
   :depends on polars: ``1.26.0``
   :depends on pyhmmer: ``0.11.0``
   :depends on python: ``>=3.12``
   :depends on requests: ``2.32.3``
   :depends on rich: ``13.9.4``
   :depends on rich-click: ``1.8.8``
   :depends on seqkit: ``2.10.0``
   :depends on upsetplot: ``0.9.0``

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

    pixi global install rdrpcatch

to add into an existing workspace instead, run::

    pixi add rdrpcatch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rdrpcatch

Alternatively, to install into a new environment, run::

    conda create -n envname rdrpcatch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rdrpcatch:<tag>

(see `rdrpcatch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rdrpcatch| image:: https://img.shields.io/conda/dn/bioconda/rdrpcatch.svg?style=flat
   :target: https://anaconda.org/bioconda/rdrpcatch
   :alt:   (downloads)
.. |docker_rdrpcatch| image:: https://quay.io/repository/biocontainers/rdrpcatch/status
   :target: https://quay.io/repository/biocontainers/rdrpcatch
.. _`rdrpcatch/tags`: https://quay.io/repository/biocontainers/rdrpcatch?tab=tags


.. raw:: html

    <script>
        var package = "rdrpcatch";
        var versions = ["1.0.1.post1","1.0.1","0.0.9","0.0.8","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdrpcatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdrpcatch/README.html