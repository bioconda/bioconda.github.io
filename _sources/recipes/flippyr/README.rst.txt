:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flippyr'
.. highlight: bash

flippyr
=======

.. conda:recipe:: flippyr
   :replaces_section_title:
   :noindex:

   This package is designed to align a PLINK fileset with a FASTA reference genome.

   :homepage: https://github.com/BEFH/flippyr
   :license: MIT / MIT
   :recipe: /`flippyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flippyr/meta.yaml>`_

   Flippy is a simple\, fast script to ensure that PLINK filesets are aligned to
   a reference genome in FASTA format. It identifies and fixes strand flipping\,
   and reversed alleles. It removes ambiguous \(palindromic\) alleles and sites
   that do not match the reference genome. It also recognizes and removes multi\-
   allelic sites and indels by default. Instructions and more details can be
   found on GitHub.



.. conda:package:: flippyr

   |downloads_flippyr| |docker_flippyr|

   :versions:
      
      

      ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.4.0-0``

      

   
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on python: 

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

    pixi global install flippyr

to add into an existing workspace instead, run::

    pixi add flippyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flippyr

Alternatively, to install into a new environment, run::

    conda create -n envname flippyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flippyr:<tag>

(see `flippyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flippyr| image:: https://img.shields.io/conda/dn/bioconda/flippyr.svg?style=flat
   :target: https://anaconda.org/bioconda/flippyr
   :alt:   (downloads)
.. |docker_flippyr| image:: https://quay.io/repository/biocontainers/flippyr/status
   :target: https://quay.io/repository/biocontainers/flippyr
.. _`flippyr/tags`: https://quay.io/repository/biocontainers/flippyr?tab=tags


.. raw:: html

    <script>
        var package = "flippyr";
        var versions = ["0.6.1","0.6.0","0.5.3","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flippyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flippyr/README.html