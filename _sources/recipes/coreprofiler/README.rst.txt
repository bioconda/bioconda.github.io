:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coreprofiler'
.. highlight: bash

coreprofiler
============

.. conda:recipe:: coreprofiler
   :replaces_section_title:
   :noindex:

   CoreProfiler\, a robust and integrable cgMLST software.

   :homepage: https://gitlab.com/ifb-elixirfr/abromics
   :documentation: https://gitlab.com/ifb-elixirfr/abromics/coreprofiler/-/blob/main/docs/build/html/index.html
   
   :developer docs: https://gitlab.com/ifb-elixirfr/abromics/coreprofiler
   :license: GPL3 / GPL-3.0-only
   :recipe: /`coreprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coreprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coreprofiler/meta.yaml>`_

   


.. conda:package:: coreprofiler

   |downloads_coreprofiler| |docker_coreprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bio: 
   :depends on biopython: ``>=1.81.0``
   :depends on blast: 
   :depends on bs4: 
   :depends on pandas: ``>=2.0.3``
   :depends on python: ``>=3.11``
   :depends on rauth: ``>=0.7.3,<0.8.0``
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

    pixi global install coreprofiler

to add into an existing workspace instead, run::

    pixi add coreprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coreprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname coreprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coreprofiler:<tag>

(see `coreprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coreprofiler| image:: https://img.shields.io/conda/dn/bioconda/coreprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/coreprofiler
   :alt:   (downloads)
.. |docker_coreprofiler| image:: https://quay.io/repository/biocontainers/coreprofiler/status
   :target: https://quay.io/repository/biocontainers/coreprofiler
.. _`coreprofiler/tags`: https://quay.io/repository/biocontainers/coreprofiler?tab=tags


.. raw:: html

    <script>
        var package = "coreprofiler";
        var versions = ["2.0.0","1.1.9","1.1.8","1.1.7","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coreprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coreprofiler/README.html