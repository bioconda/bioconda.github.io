:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kitsune'
.. highlight: bash

kitsune
=======

.. conda:recipe:: kitsune
   :replaces_section_title:
   :noindex:

   kitsune

   :homepage: https://github.com/natapol/kitsune
   :license: GPL3 / GPL-3.0-only
   :recipe: /`kitsune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kitsune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kitsune/meta.yaml>`_

   K\-mer\-length Iterative Selection for UNbiased Ecophylogenomics



.. conda:package:: kitsune

   |downloads_kitsune| |docker_kitsune|

   :versions:
      
      

      ``1.3.5-0``,  ``1.3.3-0``

      

   
   :depends on kmer-jellyfish: ``>=2.2``
   :depends on numpy: ``>=1.22.3``
   :depends on python: ``>=3.5``
   :depends on scipy: ``>=1.7.3``
   :depends on tqdm: ``>=4.38.0``

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

    pixi global install kitsune

to add into an existing workspace instead, run::

    pixi add kitsune

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kitsune

Alternatively, to install into a new environment, run::

    conda create -n envname kitsune

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kitsune:<tag>

(see `kitsune/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kitsune| image:: https://img.shields.io/conda/dn/bioconda/kitsune.svg?style=flat
   :target: https://anaconda.org/bioconda/kitsune
   :alt:   (downloads)
.. |docker_kitsune| image:: https://quay.io/repository/biocontainers/kitsune/status
   :target: https://quay.io/repository/biocontainers/kitsune
.. _`kitsune/tags`: https://quay.io/repository/biocontainers/kitsune?tab=tags


.. raw:: html

    <script>
        var package = "kitsune";
        var versions = ["1.3.5","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kitsune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kitsune/README.html