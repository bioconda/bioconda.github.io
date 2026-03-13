:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dunovo'
.. highlight: bash

dunovo
======

.. conda:recipe:: dunovo
   :replaces_section_title:
   :noindex:

   Du Novo\: A pipeline for processing duplex sequencing data.

   :homepage: https://github.com/galaxyproject/dunovo
   :license: GPL2
   :recipe: /`dunovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo/meta.yaml>`_

   


.. conda:package:: dunovo

   |downloads_dunovo| |docker_dunovo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-4</code>,  <code>3.0.2-3</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>2.16-0</code>,  <code>2.15-4</code>,  <code>2.15-3</code>,  <code>2.15-2</code>,  <code>2.15-1</code>,  </span></summary>
      

      ``3.0.2-4``,  ``3.0.2-3``,  ``3.0.2-1``,  ``3.0.2-0``,  ``2.16-0``,  ``2.15-4``,  ``2.15-3``,  ``2.15-2``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.0.12-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``0.8.1-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.1-0``,  ``0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bash: ``>=4.0.0``
   :depends on biopython: ``1.78.*``
   :depends on bowtie: ``>=1.3.0``
   :depends on coreutils: 
   :depends on file: 
   :depends on gawk: 
   :depends on gzip: 
   :depends on libgcc: ``>=13``
   :depends on mafft: ``>=7.221``
   :depends on networkx: ``2.4.*``
   :depends on numpy: ``<1.24``
   :depends on python: ``>=3.6``
   :depends on samtools: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install dunovo

to add into an existing workspace instead, run::

    pixi add dunovo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dunovo

Alternatively, to install into a new environment, run::

    conda create -n envname dunovo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dunovo:<tag>

(see `dunovo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dunovo| image:: https://img.shields.io/conda/dn/bioconda/dunovo.svg?style=flat
   :target: https://anaconda.org/bioconda/dunovo
   :alt:   (downloads)
.. |docker_dunovo| image:: https://quay.io/repository/biocontainers/dunovo/status
   :target: https://quay.io/repository/biocontainers/dunovo
.. _`dunovo/tags`: https://quay.io/repository/biocontainers/dunovo?tab=tags


.. raw:: html

    <script>
        var package = "dunovo";
        var versions = ["3.0.2","3.0.2","3.0.2","3.0.2","2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dunovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dunovo/README.html