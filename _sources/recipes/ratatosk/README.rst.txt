:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratatosk'
.. highlight: bash

ratatosk
========

.. conda:recipe:: ratatosk
   :replaces_section_title:
   :noindex:

   Hybrid error correction of long reads using colored de Bruijn graphs.

   :homepage: https://github.com/DecodeGenetics/Ratatosk
   :documentation: https://github.com/DecodeGenetics/Ratatosk/blob/v0.9.0/README.md
   
   :license: BSD / BSD-2-Clause
   :recipe: /`ratatosk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatosk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratatosk/meta.yaml>`_
   :links: biotools: :biotools:`ratatosk`, doi: :doi:`10.1186/s13059-020-02244-4`

   


.. conda:package:: ratatosk

   |downloads_ratatosk| |docker_ratatosk|

   :versions:
      
      

      ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.7.6.3-2``,  ``0.7.6.3-1``,  ``0.7.6.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install ratatosk

to add into an existing workspace instead, run::

    pixi add ratatosk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ratatosk

Alternatively, to install into a new environment, run::

    conda create -n envname ratatosk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ratatosk:<tag>

(see `ratatosk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ratatosk| image:: https://img.shields.io/conda/dn/bioconda/ratatosk.svg?style=flat
   :target: https://anaconda.org/bioconda/ratatosk
   :alt:   (downloads)
.. |docker_ratatosk| image:: https://quay.io/repository/biocontainers/ratatosk/status
   :target: https://quay.io/repository/biocontainers/ratatosk
.. _`ratatosk/tags`: https://quay.io/repository/biocontainers/ratatosk?tab=tags


.. raw:: html

    <script>
        var package = "ratatosk";
        var versions = ["0.9.0","0.9.0","0.9.0","0.7.6.3","0.7.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratatosk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratatosk/README.html