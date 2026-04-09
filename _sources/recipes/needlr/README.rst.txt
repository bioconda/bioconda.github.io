:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'needlr'
.. highlight: bash

needlr
======

.. conda:recipe:: needlr
   :replaces_section_title:
   :noindex:

   needLR is a command line tool that uses Truvari merging to compare query structural variant \(SV\) vcfs to our collection of 1000 Genomes Project \(1KGP\) samples sequenced by Oxford Nanopore Technologies long\-read sequencing \(ONT LRS\).

   :homepage: https://github.com/millerlaboratory/needLR
   :license: MIT
   :recipe: /`needlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/needlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/needlr/meta.yaml>`_

   


.. conda:package:: needlr

   |downloads_needlr| |docker_needlr|

   :versions:
      
      

      ``4.0-0``

      

   
   :depends on bcftools: ``1.23.1.*``
   :depends on bedtools: ``2.31.1.*``
   :depends on coreutils: ``9.5.*``
   :depends on gawk: ``5.3.1.*``
   :depends on sed: ``4.7.*``
   :depends on truvari: ``4.2.2.*``

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

    pixi global install needlr

to add into an existing workspace instead, run::

    pixi add needlr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install needlr

Alternatively, to install into a new environment, run::

    conda create -n envname needlr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/needlr:<tag>

(see `needlr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_needlr| image:: https://img.shields.io/conda/dn/bioconda/needlr.svg?style=flat
   :target: https://anaconda.org/bioconda/needlr
   :alt:   (downloads)
.. |docker_needlr| image:: https://quay.io/repository/biocontainers/needlr/status
   :target: https://quay.io/repository/biocontainers/needlr
.. _`needlr/tags`: https://quay.io/repository/biocontainers/needlr?tab=tags


.. raw:: html

    <script>
        var package = "needlr";
        var versions = ["4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/needlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/needlr/README.html