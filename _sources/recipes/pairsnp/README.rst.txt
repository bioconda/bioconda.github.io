:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairsnp'
.. highlight: bash

pairsnp
=======

.. conda:recipe:: pairsnp
   :replaces_section_title:
   :noindex:

   pairsnp calculates pairwise SNP distance matrices from multiple sequence alignment fasta files.

   :homepage: https://github.com/gtonkinhill/pairsnp
   :license: MIT / MIT
   :recipe: /`pairsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp/meta.yaml>`_

   


.. conda:package:: pairsnp

   |downloads_pairsnp| |docker_pairsnp|

   :versions:
      
      

      ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install pairsnp

to add into an existing workspace instead, run::

    pixi add pairsnp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pairsnp

Alternatively, to install into a new environment, run::

    conda create -n envname pairsnp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pairsnp:<tag>

(see `pairsnp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pairsnp| image:: https://img.shields.io/conda/dn/bioconda/pairsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/pairsnp
   :alt:   (downloads)
.. |docker_pairsnp| image:: https://quay.io/repository/biocontainers/pairsnp/status
   :target: https://quay.io/repository/biocontainers/pairsnp
.. _`pairsnp/tags`: https://quay.io/repository/biocontainers/pairsnp?tab=tags


.. raw:: html

    <script>
        var package = "pairsnp";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairsnp/README.html