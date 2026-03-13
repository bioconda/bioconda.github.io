:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famseq'
.. highlight: bash

famseq
======

.. conda:recipe:: famseq
   :replaces_section_title:
   :noindex:

   FamSeq is a computational tool for calculating probability of variants in family\-based sequencing data.

   :homepage: https://bioinformatics.mdanderson.org/public-software/famseq
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`famseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1222158110`

   


.. conda:package:: famseq

   |downloads_famseq| |docker_famseq|

   :versions:
      
      

      ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
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

    pixi global install famseq

to add into an existing workspace instead, run::

    pixi add famseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install famseq

Alternatively, to install into a new environment, run::

    conda create -n envname famseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/famseq:<tag>

(see `famseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_famseq| image:: https://img.shields.io/conda/dn/bioconda/famseq.svg?style=flat
   :target: https://anaconda.org/bioconda/famseq
   :alt:   (downloads)
.. |docker_famseq| image:: https://quay.io/repository/biocontainers/famseq/status
   :target: https://quay.io/repository/biocontainers/famseq
.. _`famseq/tags`: https://quay.io/repository/biocontainers/famseq?tab=tags


.. raw:: html

    <script>
        var package = "famseq";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famseq/README.html