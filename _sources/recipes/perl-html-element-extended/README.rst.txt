:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-element-extended'
.. highlight: bash

perl-html-element-extended
==========================

.. conda:recipe:: perl-html-element-extended
   :replaces_section_title:
   :noindex:

   Perl extension for manipulating a table composed of HTML\:\:Element style components.

   :homepage: http://metacpan.org/pod/HTML-Element-Extended
   :license: unknown
   :recipe: /`perl-html-element-extended <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-element-extended>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-element-extended/meta.yaml>`_

   


.. conda:package:: perl-html-element-extended

   |downloads_perl-html-element-extended| |docker_perl-html-element-extended|

   :versions:
      
      

      ``1.18-2``,  ``1.18-1``,  ``1.18-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-html-tree: 

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

    pixi global install perl-html-element-extended

to add into an existing workspace instead, run::

    pixi add perl-html-element-extended

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-element-extended

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-element-extended

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-element-extended:<tag>

(see `perl-html-element-extended/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-element-extended| image:: https://img.shields.io/conda/dn/bioconda/perl-html-element-extended.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-element-extended
   :alt:   (downloads)
.. |docker_perl-html-element-extended| image:: https://quay.io/repository/biocontainers/perl-html-element-extended/status
   :target: https://quay.io/repository/biocontainers/perl-html-element-extended
.. _`perl-html-element-extended/tags`: https://quay.io/repository/biocontainers/perl-html-element-extended?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-element-extended";
        var versions = ["1.18","1.18","1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-element-extended/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-element-extended/README.html