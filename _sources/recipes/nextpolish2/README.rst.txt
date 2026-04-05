:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextpolish2'
.. highlight: bash

nextpolish2
===========

.. conda:recipe:: nextpolish2
   :replaces_section_title:
   :noindex:

   Repeat\-aware polishing genomes assembled using HiFi long reads.

   :homepage: https://github.com/Nextomics/NextPolish2
   :documentation: https://github.com/Nextomics/NextPolish2/blob/0.2.2/README.md
   
   :license: GBPL
   :recipe: /`nextpolish2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextpolish2/meta.yaml>`_
   :links: doi: :doi:`10.1093/gpbjnl/qzad009`

   


.. conda:package:: nextpolish2

   |downloads_nextpolish2| |docker_nextpolish2|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on yak: ``>=0.1``

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

    pixi global install nextpolish2

to add into an existing workspace instead, run::

    pixi add nextpolish2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextpolish2

Alternatively, to install into a new environment, run::

    conda create -n envname nextpolish2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextpolish2:<tag>

(see `nextpolish2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextpolish2| image:: https://img.shields.io/conda/dn/bioconda/nextpolish2.svg?style=flat
   :target: https://anaconda.org/bioconda/nextpolish2
   :alt:   (downloads)
.. |docker_nextpolish2| image:: https://quay.io/repository/biocontainers/nextpolish2/status
   :target: https://quay.io/repository/biocontainers/nextpolish2
.. _`nextpolish2/tags`: https://quay.io/repository/biocontainers/nextpolish2?tab=tags


.. raw:: html

    <script>
        var package = "nextpolish2";
        var versions = ["0.2.2","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextpolish2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextpolish2/README.html