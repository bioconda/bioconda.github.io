:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csem'
.. highlight: bash

csem
====

.. conda:recipe:: csem
   :replaces_section_title:
   :noindex:

   ChIP\-Seq multi\-read allocation using Expectation\-Maximization

   :homepage: http://deweylab.biostat.wisc.edu/csem/
   :developer docs: https://github.com/descostesn/CSEM-copy
   :license: GPL / GPL-3.0-or-later
   :recipe: /`csem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csem/meta.yaml>`_

   CSEM \(Chung et al. 2011\) uses an expectation\-maximization algorithm to
   probabilistically reassign multi\-mapping reads across the genome\, producing
   a BAM in which multi\-reads are allocated proportionally to local enrichment.
   Reference\: Chung D\, Kuan PF\, Li B\, Sanalkumar R\, Liang K\, Bresnick EH\,
   et al. Discovering Transcription Factor Binding Sites in Highly Repetitive
   Regions of Genomes with Multi\-Read Analysis of ChIP\-Seq Data.
   PLoS Comput Biol. 2011\;7\:e1002111.



.. conda:package:: csem

   |downloads_csem| |docker_csem|

   :versions:
      
      

      ``2.4-1``,  ``2.4-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.2,<2.0a0``
   :depends on ncurses: ``>=6.5,<7.0a0``
   :depends on perl: 
   :depends on perl-perldoc: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install csem

to add into an existing workspace instead, run::

    pixi add csem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install csem

Alternatively, to install into a new environment, run::

    conda create -n envname csem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/csem:<tag>

(see `csem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_csem| image:: https://img.shields.io/conda/dn/bioconda/csem.svg?style=flat
   :target: https://anaconda.org/bioconda/csem
   :alt:   (downloads)
.. |docker_csem| image:: https://quay.io/repository/biocontainers/csem/status
   :target: https://quay.io/repository/biocontainers/csem
.. _`csem/tags`: https://quay.io/repository/biocontainers/csem?tab=tags


.. raw:: html

    <script>
        var package = "csem";
        var versions = ["2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csem/README.html