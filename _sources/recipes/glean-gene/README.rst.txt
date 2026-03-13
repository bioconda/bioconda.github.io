:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glean-gene'
.. highlight: bash

glean-gene
==========

.. conda:recipe:: glean-gene
   :replaces_section_title:
   :noindex:

   GLEAN is an unsupervised learning system to integrate disparate sources of gene structure evidence \(gene model predictions\, EST\/protein genomic sequence alignments\, SAGE\/peptide tags\, etc\) to produce a consensus gene prediction\, without prior training.

   :homepage: https://sourceforge.net/projects/glean-gene/
   :license: Artistic-1.0-Perl
   :recipe: /`glean-gene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glean-gene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glean-gene/meta.yaml>`_

   


.. conda:package:: glean-gene

   |downloads_glean-gene| |docker_glean-gene|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on graphviz: 
   :depends on perl: 
   :depends on perl-algorithm-diff: 
   :depends on perl-bioperl: 
   :depends on perl-data-dumper: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on perl-module-pluggable: 
   :depends on perl-storable: 
   :depends on perl-yaml: 

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

    pixi global install glean-gene

to add into an existing workspace instead, run::

    pixi add glean-gene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install glean-gene

Alternatively, to install into a new environment, run::

    conda create -n envname glean-gene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/glean-gene:<tag>

(see `glean-gene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_glean-gene| image:: https://img.shields.io/conda/dn/bioconda/glean-gene.svg?style=flat
   :target: https://anaconda.org/bioconda/glean-gene
   :alt:   (downloads)
.. |docker_glean-gene| image:: https://quay.io/repository/biocontainers/glean-gene/status
   :target: https://quay.io/repository/biocontainers/glean-gene
.. _`glean-gene/tags`: https://quay.io/repository/biocontainers/glean-gene?tab=tags


.. raw:: html

    <script>
        var package = "glean-gene";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glean-gene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glean-gene/README.html