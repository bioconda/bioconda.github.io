:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'estmapper'
.. highlight: bash

estmapper
=========

.. conda:recipe:: estmapper
   :replaces_section_title:
   :noindex:

   Software package for the high\-throughput alignment of large cDNA \(EST\, mRNA\) sequence sets to a large eukaryotic genome of the same species.

   :homepage: https://sourceforge.net/projects/kmer
   :license: GPL-3.0-or-later
   :recipe: /`estmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/estmapper/meta.yaml>`_

   


.. conda:package:: estmapper

   |downloads_estmapper| |docker_estmapper|

   :versions:
      
      

      ``2008-7``,  ``2008-6``,  ``2008-5``,  ``2008-4``,  ``2008-3``,  ``2008-2``,  ``2008-1``,  ``2008-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

    pixi global install estmapper

to add into an existing workspace instead, run::

    pixi add estmapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install estmapper

Alternatively, to install into a new environment, run::

    conda create -n envname estmapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/estmapper:<tag>

(see `estmapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_estmapper| image:: https://img.shields.io/conda/dn/bioconda/estmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/estmapper
   :alt:   (downloads)
.. |docker_estmapper| image:: https://quay.io/repository/biocontainers/estmapper/status
   :target: https://quay.io/repository/biocontainers/estmapper
.. _`estmapper/tags`: https://quay.io/repository/biocontainers/estmapper?tab=tags


.. raw:: html

    <script>
        var package = "estmapper";
        var versions = ["2008","2008","2008","2008","2008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/estmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/estmapper/README.html