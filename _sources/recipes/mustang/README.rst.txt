:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mustang'
.. highlight: bash

mustang
=======

.. conda:recipe:: mustang
   :replaces_section_title:
   :noindex:

   Mustang is a program that implements an algorithm for structural alignment of multiple protein structures.

   :homepage: https://lcb.infotech.monash.edu.au/mustang
   :license: file
   :recipe: /`mustang <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mustang>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mustang/meta.yaml>`_
   :links: biotools: :biotools:`mustang`, doi: :doi:`10.1002/prot.20921`

   


.. conda:package:: mustang

   |downloads_mustang| |docker_mustang|

   :versions:
      
      

      ``3.2.4-0``,  ``3.2.3-1``,  ``3.2.3-0``

      

   
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

    pixi global install mustang

to add into an existing workspace instead, run::

    pixi add mustang

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mustang

Alternatively, to install into a new environment, run::

    conda create -n envname mustang

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mustang:<tag>

(see `mustang/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mustang| image:: https://img.shields.io/conda/dn/bioconda/mustang.svg?style=flat
   :target: https://anaconda.org/bioconda/mustang
   :alt:   (downloads)
.. |docker_mustang| image:: https://quay.io/repository/biocontainers/mustang/status
   :target: https://quay.io/repository/biocontainers/mustang
.. _`mustang/tags`: https://quay.io/repository/biocontainers/mustang?tab=tags


.. raw:: html

    <script>
        var package = "mustang";
        var versions = ["3.2.4","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mustang/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mustang/README.html