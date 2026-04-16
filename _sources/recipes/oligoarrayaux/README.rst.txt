:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligoarrayaux'
.. highlight: bash

oligoarrayaux
=============

.. conda:recipe:: oligoarrayaux
   :replaces_section_title:
   :noindex:

   OligoArrayAux is a subset of the UNAFold package for use with OligoArray.

   :homepage: http://unafold.rna.albany.edu/?q=DINAMelt/OligoArrayAux
   :license: ACADEMIC NON-COMMERCIAL USE LICENSE
   :recipe: /`oligoarrayaux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligoarrayaux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligoarrayaux/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-1-60327-429-6_1`

   


.. conda:package:: oligoarrayaux

   |downloads_oligoarrayaux| |docker_oligoarrayaux|

   :versions:
      
      

      ``3.8.1-0``,  ``3.8-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install oligoarrayaux

to add into an existing workspace instead, run::

    pixi add oligoarrayaux

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oligoarrayaux

Alternatively, to install into a new environment, run::

    conda create -n envname oligoarrayaux

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oligoarrayaux:<tag>

(see `oligoarrayaux/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oligoarrayaux| image:: https://img.shields.io/conda/dn/bioconda/oligoarrayaux.svg?style=flat
   :target: https://anaconda.org/bioconda/oligoarrayaux
   :alt:   (downloads)
.. |docker_oligoarrayaux| image:: https://quay.io/repository/biocontainers/oligoarrayaux/status
   :target: https://quay.io/repository/biocontainers/oligoarrayaux
.. _`oligoarrayaux/tags`: https://quay.io/repository/biocontainers/oligoarrayaux?tab=tags


.. raw:: html

    <script>
        var package = "oligoarrayaux";
        var versions = ["3.8.1","3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligoarrayaux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligoarrayaux/README.html