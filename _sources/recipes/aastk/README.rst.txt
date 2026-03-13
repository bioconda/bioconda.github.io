:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aastk'
.. highlight: bash

aastk
=====

.. conda:recipe:: aastk
   :replaces_section_title:
   :noindex:

   Toolkit for analyses of amino acid sequences

   :homepage: https://github.com/dspeth/aastk/
   :documentation: https://globdb.org/aastk
   
   :license: GPL-3.0-or-later
   :recipe: /`aastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aastk/meta.yaml>`_

   This package contains several tools to generate and work with amino acid sequence datasets.
   AASTK is primarily designed to work with the GlobDB genome database.



.. conda:package:: aastk

   |downloads_aastk| |docker_aastk|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on contourpy: ``>=1.3.2``
   :depends on diamond: ``>=2.1.11``
   :depends on matplotlib-base: ``>=3.10.1``
   :depends on numpy: ``>=2.2.5``
   :depends on opentsne: ``>=1.0.2``
   :depends on pandas: ``>=2.2.3``
   :depends on python: ``>=3.13``
   :depends on pyyaml: ``>=6.0.2``
   :depends on scikit-learn: ``>=1.6.1``
   :depends on scipy: ``>=1.15.3``
   :depends on seqkit: ``>=2.5.1``
   :depends on tqdm: ``>=4.67.1``

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

    pixi global install aastk

to add into an existing workspace instead, run::

    pixi add aastk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aastk

Alternatively, to install into a new environment, run::

    conda create -n envname aastk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aastk:<tag>

(see `aastk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aastk| image:: https://img.shields.io/conda/dn/bioconda/aastk.svg?style=flat
   :target: https://anaconda.org/bioconda/aastk
   :alt:   (downloads)
.. |docker_aastk| image:: https://quay.io/repository/biocontainers/aastk/status
   :target: https://quay.io/repository/biocontainers/aastk
.. _`aastk/tags`: https://quay.io/repository/biocontainers/aastk?tab=tags


.. raw:: html

    <script>
        var package = "aastk";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aastk/README.html