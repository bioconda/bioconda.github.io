:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zerone'
.. highlight: bash

zerone
======

.. conda:recipe:: zerone
   :replaces_section_title:
   :noindex:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw336`

   


.. conda:package:: zerone

   |downloads_zerone| |docker_zerone|

   :versions:
      
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends on libgcc: ``>=13``
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

    pixi global install zerone

to add into an existing workspace instead, run::

    pixi add zerone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zerone

Alternatively, to install into a new environment, run::

    conda create -n envname zerone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zerone:<tag>

(see `zerone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zerone| image:: https://img.shields.io/conda/dn/bioconda/zerone.svg?style=flat
   :target: https://anaconda.org/bioconda/zerone
   :alt:   (downloads)
.. |docker_zerone| image:: https://quay.io/repository/biocontainers/zerone/status
   :target: https://quay.io/repository/biocontainers/zerone
.. _`zerone/tags`: https://quay.io/repository/biocontainers/zerone?tab=tags


.. raw:: html

    <script>
        var package = "zerone";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zerone/README.html