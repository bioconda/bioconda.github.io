:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mycotools'
.. highlight: bash

mycotools
=========

.. conda:recipe:: mycotools
   :replaces_section_title:
   :noindex:

   Comparative genomics automation and standardization software.

   :homepage: https://github.com/xonq/mycotools
   :documentation: https://github.com/xonq/mycotools/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`mycotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mycotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mycotools/meta.yaml>`_

   


.. conda:package:: mycotools

   |downloads_mycotools| |docker_mycotools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-0</code>,  <code>0.32.11-0</code>,  <code>0.32.10-0</code>,  <code>0.32.9-0</code>,  <code>0.32.7-0</code>,  <code>0.32.6-0</code>,  <code>0.32.5-0</code>,  <code>0.32.4-0</code>,  <code>0.32.3-0</code>,  </span></summary>
      

      ``1.0.0-0``,  ``0.32.11-0``,  ``0.32.10-0``,  ``0.32.9-0``,  ``0.32.7-0``,  ``0.32.6-0``,  ``0.32.5-0``,  ``0.32.4-0``,  ``0.32.3-0``,  ``0.32.2-0``,  ``0.32.1-1``,  ``0.32.1-0``,  ``0.31.48-0``,  ``0.31.46-0``,  ``0.31.45-0``,  ``0.31.44-0``,  ``0.31.43-0``,  ``0.31.42-0``,  ``0.31.41-0``,  ``0.31.40-0``,  ``0.31.39-0``,  ``0.31.38-0``,  ``0.31.37-0``,  ``0.31.36-0``,  ``0.31.35-0``,  ``0.31.34-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on cryptography: 
   :depends on diamond: 
   :depends on ete3: 
   :depends on fasttree: 
   :depends on hmmer: 
   :depends on iqtree: 
   :depends on mafft: 
   :depends on mmseqs2: 
   :depends on ncbi-datasets-cli: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on requests: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install mycotools

to add into an existing workspace instead, run::

    pixi add mycotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mycotools

Alternatively, to install into a new environment, run::

    conda create -n envname mycotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mycotools:<tag>

(see `mycotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mycotools| image:: https://img.shields.io/conda/dn/bioconda/mycotools.svg?style=flat
   :target: https://anaconda.org/bioconda/mycotools
   :alt:   (downloads)
.. |docker_mycotools| image:: https://quay.io/repository/biocontainers/mycotools/status
   :target: https://quay.io/repository/biocontainers/mycotools
.. _`mycotools/tags`: https://quay.io/repository/biocontainers/mycotools?tab=tags


.. raw:: html

    <script>
        var package = "mycotools";
        var versions = ["1.0.0","0.32.11","0.32.10","0.32.9","0.32.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mycotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mycotools/README.html