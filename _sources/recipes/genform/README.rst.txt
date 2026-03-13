:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genform'
.. highlight: bash

genform
=======

.. conda:recipe:: genform
   :replaces_section_title:
   :noindex:

   Generation of molecular formulas by high\-resolution MS and MS\/MS data.

   :homepage: https://sourceforge.net/projects/genform
   :license: GPL / GPL-2.0-only
   :recipe: /`genform <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genform>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genform/meta.yaml>`_
   :links: doi: :doi:`10.1101/295071`

   


.. conda:package:: genform

   |downloads_genform| |docker_genform|

   :versions:
      
      

      ``r8-8``,  ``r8-5``,  ``r8-4``,  ``r8-3``,  ``r8-2``,  ``r8-1``,  ``r8-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install genform

to add into an existing workspace instead, run::

    pixi add genform

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genform

Alternatively, to install into a new environment, run::

    conda create -n envname genform

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genform:<tag>

(see `genform/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genform| image:: https://img.shields.io/conda/dn/bioconda/genform.svg?style=flat
   :target: https://anaconda.org/bioconda/genform
   :alt:   (downloads)
.. |docker_genform| image:: https://quay.io/repository/biocontainers/genform/status
   :target: https://quay.io/repository/biocontainers/genform
.. _`genform/tags`: https://quay.io/repository/biocontainers/genform?tab=tags


.. raw:: html

    <script>
        var package = "genform";
        var versions = ["r8","r8","r8","r8","r8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genform/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genform/README.html