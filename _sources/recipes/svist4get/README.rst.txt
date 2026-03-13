:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svist4get'
.. highlight: bash

svist4get
=========

.. conda:recipe:: svist4get
   :replaces_section_title:
   :noindex:

   A simple visualization tool for genomic tracks from sequencing experiments

   :homepage: https://github.com/art-egorov/svist4get
   :license: OTHER / WTFPL
   :recipe: /`svist4get <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svist4get>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svist4get/meta.yaml>`_

   


.. conda:package:: svist4get

   |downloads_svist4get| |docker_svist4get|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1.1-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.24-0</code>,  <code>1.2.23-0</code>,  <code>1.2.22-0</code>,  <code>1.2.21-0</code>,  <code>1.2.20-0</code>,  <code>1.2.19-0</code>,  </span></summary>
      

      ``1.3.1.1-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.24-0``,  ``1.2.23-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17.1-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-1``,  ``1.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on configs: 
   :depends on pybedtools: 
   :depends on python: ``>=3.4``
   :depends on reportlab: 
   :depends on wand: 

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

    pixi global install svist4get

to add into an existing workspace instead, run::

    pixi add svist4get

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svist4get

Alternatively, to install into a new environment, run::

    conda create -n envname svist4get

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svist4get:<tag>

(see `svist4get/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svist4get| image:: https://img.shields.io/conda/dn/bioconda/svist4get.svg?style=flat
   :target: https://anaconda.org/bioconda/svist4get
   :alt:   (downloads)
.. |docker_svist4get| image:: https://quay.io/repository/biocontainers/svist4get/status
   :target: https://quay.io/repository/biocontainers/svist4get
.. _`svist4get/tags`: https://quay.io/repository/biocontainers/svist4get?tab=tags


.. raw:: html

    <script>
        var package = "svist4get";
        var versions = ["1.3.1.1","1.3.1","1.3","1.2.24","1.2.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svist4get/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svist4get/README.html