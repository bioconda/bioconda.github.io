:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hg-color'
.. highlight: bash

hg-color
========

.. conda:recipe:: hg-color
   :replaces_section_title:
   :noindex:

   HG\-CoLoR \(Hybrid Graph for the error Correction of Long Reads\) is a hybrid method for the error correction of long reads that follows the main idea from NaS to produce corrected long reads from assemblies of related accurate short reads.

   :homepage: https://github.com/pierre-morisse/HG-CoLoR
   :license: GNU General Public License (GPL)
   :recipe: /`hg-color <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hg-color/meta.yaml>`_

   


.. conda:package:: hg-color

   |downloads_hg-color| |docker_hg-color|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on coreutils: 
   :depends on emboss: 
   :depends on kmc: 
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``
   :depends on parallel: 
   :depends on pgsa: 
   :depends on python: 
   :depends on quorum: 

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

    pixi global install hg-color

to add into an existing workspace instead, run::

    pixi add hg-color

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hg-color

Alternatively, to install into a new environment, run::

    conda create -n envname hg-color

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hg-color:<tag>

(see `hg-color/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hg-color| image:: https://img.shields.io/conda/dn/bioconda/hg-color.svg?style=flat
   :target: https://anaconda.org/bioconda/hg-color
   :alt:   (downloads)
.. |docker_hg-color| image:: https://quay.io/repository/biocontainers/hg-color/status
   :target: https://quay.io/repository/biocontainers/hg-color
.. _`hg-color/tags`: https://quay.io/repository/biocontainers/hg-color?tab=tags


.. raw:: html

    <script>
        var package = "hg-color";
        var versions = ["1.1.1","1.1.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hg-color/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hg-color/README.html