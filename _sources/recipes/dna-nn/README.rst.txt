:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dna-nn'
.. highlight: bash

dna-nn
======

.. conda:recipe:: dna-nn
   :replaces_section_title:
   :noindex:

   Model and predict short DNA sequence features with neural networks.

   :homepage: https://github.com/lh3/dna-nn
   :license: Unknown
   :recipe: /`dna-nn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna-nn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna-nn/meta.yaml>`_

   


.. conda:package:: dna-nn

   |downloads_dna-nn| |docker_dna-nn|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on k8: 
   :depends on libgcc: ``>=13``
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

    pixi global install dna-nn

to add into an existing workspace instead, run::

    pixi add dna-nn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dna-nn

Alternatively, to install into a new environment, run::

    conda create -n envname dna-nn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dna-nn:<tag>

(see `dna-nn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dna-nn| image:: https://img.shields.io/conda/dn/bioconda/dna-nn.svg?style=flat
   :target: https://anaconda.org/bioconda/dna-nn
   :alt:   (downloads)
.. |docker_dna-nn| image:: https://quay.io/repository/biocontainers/dna-nn/status
   :target: https://quay.io/repository/biocontainers/dna-nn
.. _`dna-nn/tags`: https://quay.io/repository/biocontainers/dna-nn?tab=tags


.. raw:: html

    <script>
        var package = "dna-nn";
        var versions = ["0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dna-nn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dna-nn/README.html