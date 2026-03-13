:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dammit'
.. highlight: bash

dammit
======

.. conda:recipe:: dammit
   :replaces_section_title:
   :noindex:

   simple de novo transcriptome annotator

   :homepage: http://dib-lab.github.io/dammit/
   :license: BSD
   :recipe: /`dammit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit/meta.yaml>`_

   


.. conda:package:: dammit

   |downloads_dammit| |docker_dammit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1-0</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0.rc0-0</code>,  <code>1.0rc2-2</code>,  <code>1.0rc2-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``1.2-0``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0-4``,  ``1.0-3``,  ``1.0.rc0-0``,  ``1.0rc2-2``,  ``1.0rc2-0``,  ``0.3.2-0``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-seqlogo: 
   :depends on busco: ``3.0.2``
   :depends on doit: ``>=0.29.0``
   :depends on hmmer: 
   :depends on infernal: 
   :depends on khmer: ``>=2.1``
   :depends on last: 
   :depends on matplotlib: 
   :depends on numexpr: ``>=2.3.1``
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on python: ``>3``
   :depends on sh: 
   :depends on shmlast: 
   :depends on sphinx: ``>1.3.1``
   :depends on sphinx_rtd_theme: ``>=0.1.9``
   :depends on transdecoder: 

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

    pixi global install dammit

to add into an existing workspace instead, run::

    pixi add dammit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dammit

Alternatively, to install into a new environment, run::

    conda create -n envname dammit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dammit:<tag>

(see `dammit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dammit| image:: https://img.shields.io/conda/dn/bioconda/dammit.svg?style=flat
   :target: https://anaconda.org/bioconda/dammit
   :alt:   (downloads)
.. |docker_dammit| image:: https://quay.io/repository/biocontainers/dammit/status
   :target: https://quay.io/repository/biocontainers/dammit
.. _`dammit/tags`: https://quay.io/repository/biocontainers/dammit?tab=tags


.. raw:: html

    <script>
        var package = "dammit";
        var versions = ["1.2","1.1.1","1.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammit/README.html