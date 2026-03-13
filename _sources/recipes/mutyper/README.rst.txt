:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutyper'
.. highlight: bash

mutyper
=======

.. conda:recipe:: mutyper
   :replaces_section_title:
   :noindex:

   A Python package and command line utility for annotating the local ancestral sequence context of biallelic SNPs.

   :homepage: https://github.com/harrispopgen/mutyper
   :documentation: https://harrispopgen.github.io/mutyper
   
   :license: MIT / MIT
   :recipe: /`mutyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutyper/meta.yaml>`_

   


.. conda:package:: mutyper

   |downloads_mutyper| |docker_mutyper|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on biopython: 
   :depends on cyvcf2: ``>=0.30.15``
   :depends on libgcc: ``>=14``
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on pyliftover: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install mutyper

to add into an existing workspace instead, run::

    pixi add mutyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mutyper

Alternatively, to install into a new environment, run::

    conda create -n envname mutyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mutyper:<tag>

(see `mutyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mutyper| image:: https://img.shields.io/conda/dn/bioconda/mutyper.svg?style=flat
   :target: https://anaconda.org/bioconda/mutyper
   :alt:   (downloads)
.. |docker_mutyper| image:: https://quay.io/repository/biocontainers/mutyper/status
   :target: https://quay.io/repository/biocontainers/mutyper
.. _`mutyper/tags`: https://quay.io/repository/biocontainers/mutyper?tab=tags


.. raw:: html

    <script>
        var package = "mutyper";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutyper/README.html