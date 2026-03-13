:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmasker'
.. highlight: bash

kmasker
=======

.. conda:recipe:: kmasker
   :replaces_section_title:
   :noindex:

   A tool for masking and exploring of sequences from plant species.

   :homepage: https://kmasker.ipk-gatersleben.de/
   :developer docs: https://github.com/tschmutzer/kmasker
   :license: GPL3
   :recipe: /`kmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker/meta.yaml>`_
   :links: biotools: :biotools:`kmasker`

   


.. conda:package:: kmasker

   |downloads_kmasker| |docker_kmasker|

   :versions:
      
      

      ``1.1.1-6``,  ``1.1.1-5``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on blast: 
   :depends on coreutils: ``>=8.15``
   :depends on ea-utils: 
   :depends on gffread: 
   :depends on jellyfish: ``2.2.10.*``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: ``>=1.24.3,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on which: ``>=2.21``

   :additional platforms:
      

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

    pixi global install kmasker

to add into an existing workspace instead, run::

    pixi add kmasker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmasker

Alternatively, to install into a new environment, run::

    conda create -n envname kmasker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmasker:<tag>

(see `kmasker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmasker| image:: https://img.shields.io/conda/dn/bioconda/kmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/kmasker
   :alt:   (downloads)
.. |docker_kmasker| image:: https://quay.io/repository/biocontainers/kmasker/status
   :target: https://quay.io/repository/biocontainers/kmasker
.. _`kmasker/tags`: https://quay.io/repository/biocontainers/kmasker?tab=tags


.. raw:: html

    <script>
        var package = "kmasker";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmasker/README.html