:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-ripser'
.. highlight: bash

bio-ripser
==========

.. conda:recipe:: bio-ripser
   :replaces_section_title:
   :noindex:

   Ripser\: efficient computation of Vietoris–Rips persistence barcodes.

   :homepage: https://ripser.org
   :documentation: https://github.com/Ripser/ripser/blob/v1.2.1/README.md
   
   :developer docs: https://github.com/Ripser/ripser
   :license: MIT / MIT
   :recipe: /`bio-ripser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ripser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ripser/meta.yaml>`_

   


.. conda:package:: bio-ripser

   |downloads_bio-ripser| |docker_bio-ripser|

   :versions:
      
      

      ``1.2.1-0``

      

   
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

    pixi global install bio-ripser

to add into an existing workspace instead, run::

    pixi add bio-ripser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bio-ripser

Alternatively, to install into a new environment, run::

    conda create -n envname bio-ripser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bio-ripser:<tag>

(see `bio-ripser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bio-ripser| image:: https://img.shields.io/conda/dn/bioconda/bio-ripser.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-ripser
   :alt:   (downloads)
.. |docker_bio-ripser| image:: https://quay.io/repository/biocontainers/bio-ripser/status
   :target: https://quay.io/repository/biocontainers/bio-ripser
.. _`bio-ripser/tags`: https://quay.io/repository/biocontainers/bio-ripser?tab=tags


.. raw:: html

    <script>
        var package = "bio-ripser";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-ripser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-ripser/README.html