:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hairsplitter'
.. highlight: bash

hairsplitter
============

.. conda:recipe:: hairsplitter
   :replaces_section_title:
   :noindex:

   Recovers collapsed haplotypes from a draft assembly and long reads

   :homepage: https://github.com/RolandFaure/HairSplitter
   :license: GPL-3.0-or-later
   :recipe: /`hairsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hairsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hairsplitter/meta.yaml>`_

   


.. conda:package:: hairsplitter

   |downloads_hairsplitter| |docker_hairsplitter|

   :versions:
      
      

      ``1.9.10-1``,  ``1.9.10-0``,  ``1.9.9-0``,  ``1.9.5-0``,  ``1.8.0-0``,  ``1.7.15-0``,  ``1.7.14-0``,  ``1.7.13-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc-ng: ``>=12``
   :depends on libgomp: 
   :depends on libstdcxx-ng: ``>=12``
   :depends on minigraph: ``>=0.20``
   :depends on minimap2: 
   :depends on numpy: 
   :depends on python: 
   :depends on racon: 
   :depends on raven-assembler: 
   :depends on samtools: ``>=1.16``
   :depends on scipy: 

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

    pixi global install hairsplitter

to add into an existing workspace instead, run::

    pixi add hairsplitter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hairsplitter

Alternatively, to install into a new environment, run::

    conda create -n envname hairsplitter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hairsplitter:<tag>

(see `hairsplitter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hairsplitter| image:: https://img.shields.io/conda/dn/bioconda/hairsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/hairsplitter
   :alt:   (downloads)
.. |docker_hairsplitter| image:: https://quay.io/repository/biocontainers/hairsplitter/status
   :target: https://quay.io/repository/biocontainers/hairsplitter
.. _`hairsplitter/tags`: https://quay.io/repository/biocontainers/hairsplitter?tab=tags


.. raw:: html

    <script>
        var package = "hairsplitter";
        var versions = ["1.9.10","1.9.10","1.9.9","1.9.5","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hairsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hairsplitter/README.html