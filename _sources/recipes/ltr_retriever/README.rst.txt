:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ltr_retriever'
.. highlight: bash

ltr_retriever
=============

.. conda:recipe:: ltr_retriever
   :replaces_section_title:
   :noindex:

   Sensitive and accurate identification of LTR retrotransposons

   :homepage: https://github.com/oushujun/LTR_retriever
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ltr_retriever <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_retriever>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ltr_retriever/meta.yaml>`_
   :links: doi: :doi:`10.1104/pp.17.01310`, biotools: :biotools:`ltr_retriever`

   


.. conda:package:: ltr_retriever

   |downloads_ltr_retriever| |docker_ltr_retriever|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.5-0</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.9.9-0</code>,  <code>2.9.8-0</code>,  </span></summary>
      

      ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.9.9-0``,  ``2.9.8-0``,  ``2.9.5-0``,  ``2.9.4-0``,  ``2.9.0-3``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.8.7-0``,  ``2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cd-hit: 
   :depends on libstdcxx-ng: 
   :depends on perl: 
   :depends on perl-text-soundex: 
   :depends on repeatmasker: 
   :depends on rmblast: 
   :depends on tesorter: 

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

    pixi global install ltr_retriever

to add into an existing workspace instead, run::

    pixi add ltr_retriever

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ltr_retriever

Alternatively, to install into a new environment, run::

    conda create -n envname ltr_retriever

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ltr_retriever:<tag>

(see `ltr_retriever/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ltr_retriever| image:: https://img.shields.io/conda/dn/bioconda/ltr_retriever.svg?style=flat
   :target: https://anaconda.org/bioconda/ltr_retriever
   :alt:   (downloads)
.. |docker_ltr_retriever| image:: https://quay.io/repository/biocontainers/ltr_retriever/status
   :target: https://quay.io/repository/biocontainers/ltr_retriever
.. _`ltr_retriever/tags`: https://quay.io/repository/biocontainers/ltr_retriever?tab=tags


.. raw:: html

    <script>
        var package = "ltr_retriever";
        var versions = ["3.0.5","3.0.4","3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ltr_retriever/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ltr_retriever/README.html