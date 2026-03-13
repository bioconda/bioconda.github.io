:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-tree'
.. highlight: bash

perl-html-tree
==============

.. conda:recipe:: perl-html-tree
   :replaces_section_title:
   :noindex:

   Work with HTML in a DOM\-like tree structure

   :homepage: http://metacpan.org/pod/HTML::Tree
   :license: perl_5
   :recipe: /`perl-html-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tree/meta.yaml>`_

   


.. conda:package:: perl-html-tree

   |downloads_perl-html-tree| |docker_perl-html-tree|

   :versions:
      
      

      ``5.07-2``,  ``5.07-1``,  ``5.07-0``,  ``5.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-html-parser: 
   :depends on perl-html-tagset: 

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

    pixi global install perl-html-tree

to add into an existing workspace instead, run::

    pixi add perl-html-tree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-tree

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-tree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-tree:<tag>

(see `perl-html-tree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-tree| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-tree
   :alt:   (downloads)
.. |docker_perl-html-tree| image:: https://quay.io/repository/biocontainers/perl-html-tree/status
   :target: https://quay.io/repository/biocontainers/perl-html-tree
.. _`perl-html-tree/tags`: https://quay.io/repository/biocontainers/perl-html-tree?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-tree";
        var versions = ["5.07","5.07","5.07","5.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tree/README.html