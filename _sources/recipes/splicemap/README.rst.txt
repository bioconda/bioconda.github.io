:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splicemap'
.. highlight: bash

splicemap
=========

.. conda:recipe:: splicemap
   :replaces_section_title:
   :noindex:

   Detects splice junctions from RNA\-seq data. This method does not depend on any existing annotation of gene structures and is capable of finding novel splice junctions with high sensitivity and specificity. It can handle long reads \(50–100 nt\) and can exploit paired\-read information to improve mapping accuracy.

   :homepage: https://web.stanford.edu/group/wonglab/SpliceMap
   :license: Custom
   :recipe: /`splicemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splicemap/meta.yaml>`_
   :links: biotools: :biotools:`splicemap`, doi: :doi:`10.1093/nar/gkq211`

   


.. conda:package:: splicemap

   |downloads_splicemap| |docker_splicemap|

   :versions:
      
      

      ``3.3.5.2-7``,  ``3.3.5.2-6``,  ``3.3.5.2-5``,  ``3.3.5.2-4``,  ``3.3.5.2-3``,  ``3.3.5.2-2``,  ``3.3.5.2-1``,  ``3.3.5.2-0``

      

   
   :depends on bowtie: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install splicemap

to add into an existing workspace instead, run::

    pixi add splicemap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install splicemap

Alternatively, to install into a new environment, run::

    conda create -n envname splicemap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/splicemap:<tag>

(see `splicemap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_splicemap| image:: https://img.shields.io/conda/dn/bioconda/splicemap.svg?style=flat
   :target: https://anaconda.org/bioconda/splicemap
   :alt:   (downloads)
.. |docker_splicemap| image:: https://quay.io/repository/biocontainers/splicemap/status
   :target: https://quay.io/repository/biocontainers/splicemap
.. _`splicemap/tags`: https://quay.io/repository/biocontainers/splicemap?tab=tags


.. raw:: html

    <script>
        var package = "splicemap";
        var versions = ["3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2","3.3.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splicemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splicemap/README.html