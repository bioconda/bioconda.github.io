:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kodoja'
.. highlight: bash

kodoja
======

.. conda:recipe:: kodoja
   :replaces_section_title:
   :noindex:

   Kodoja\: identifying viruses from plant RNA sequencing data

   :homepage: https://github.com/abaizan/kodoja/
   :license: MIT
   :recipe: /`kodoja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kodoja/meta.yaml>`_

   


.. conda:package:: kodoja

   |downloads_kodoja| |docker_kodoja|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.10-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-0</code>,  <code>0.0.3-1</code>,  <code>0.0.3-0</code>,  </span></summary>
      

      ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on fastqc: 
   :depends on kaiju: 
   :depends on kraken: 
   :depends on ncbi-genome-download: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
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

    pixi global install kodoja

to add into an existing workspace instead, run::

    pixi add kodoja

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kodoja

Alternatively, to install into a new environment, run::

    conda create -n envname kodoja

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kodoja:<tag>

(see `kodoja/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kodoja| image:: https://img.shields.io/conda/dn/bioconda/kodoja.svg?style=flat
   :target: https://anaconda.org/bioconda/kodoja
   :alt:   (downloads)
.. |docker_kodoja| image:: https://quay.io/repository/biocontainers/kodoja/status
   :target: https://quay.io/repository/biocontainers/kodoja
.. _`kodoja/tags`: https://quay.io/repository/biocontainers/kodoja?tab=tags


.. raw:: html

    <script>
        var package = "kodoja";
        var versions = ["0.0.10","0.0.9","0.0.8","0.0.7","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kodoja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kodoja/README.html