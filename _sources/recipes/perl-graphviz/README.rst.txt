:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-graphviz'
.. highlight: bash

perl-graphviz
=============

.. conda:recipe:: perl-graphviz
   :replaces_section_title:
   :noindex:

   Interface to AT\&T\'s GraphViz. Deprecated. See GraphViz2.

   :homepage: https://metacpan.org/pod/GraphViz
   :license: perl_5
   :recipe: /`perl-graphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-graphviz/meta.yaml>`_

   


.. conda:package:: perl-graphviz

   |downloads_perl-graphviz| |docker_perl-graphviz|

   :versions:
      
      

      ``2.26-0``,  ``2.25-0``,  ``2.24-1``,  ``2.24-0``,  ``2.20-1``

      

   
   :depends on graphviz: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-file-which: 
   :depends on perl-getopt-long: 
   :depends on perl-ipc-run: 
   :depends on perl-parse-recdescent: 
   :depends on perl-pod-usage: 
   :depends on perl-time-hires: 
   :depends on perl-xml-twig: 
   :depends on perl-xml-xpath: 

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

    pixi global install perl-graphviz

to add into an existing workspace instead, run::

    pixi add perl-graphviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-graphviz

Alternatively, to install into a new environment, run::

    conda create -n envname perl-graphviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-graphviz:<tag>

(see `perl-graphviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-graphviz| image:: https://img.shields.io/conda/dn/bioconda/perl-graphviz.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-graphviz
   :alt:   (downloads)
.. |docker_perl-graphviz| image:: https://quay.io/repository/biocontainers/perl-graphviz/status
   :target: https://quay.io/repository/biocontainers/perl-graphviz
.. _`perl-graphviz/tags`: https://quay.io/repository/biocontainers/perl-graphviz?tab=tags


.. raw:: html

    <script>
        var package = "perl-graphviz";
        var versions = ["2.26","2.25","2.24","2.24","2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-graphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-graphviz/README.html