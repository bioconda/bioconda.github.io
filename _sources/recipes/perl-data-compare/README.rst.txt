:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-compare'
.. highlight: bash

perl-data-compare
=================

.. conda:recipe:: perl-data-compare/1.25
   :replaces_section_title:
   :noindex:

   compare perl data structures

   :homepage: http://metacpan.org/pod/Data::Compare
   :license: unknown
   :recipe: /`perl-data-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare>`_/`1.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-compare/1.25/meta.yaml>`_

   


.. conda:package:: perl-data-compare

   |downloads_perl-data-compare| |docker_perl-data-compare|

   :versions:
      
      

      ``1.25-1``,  ``1.25-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-find-rule: 

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

    pixi global install perl-data-compare

to add into an existing workspace instead, run::

    pixi add perl-data-compare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-data-compare

Alternatively, to install into a new environment, run::

    conda create -n envname perl-data-compare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-data-compare:<tag>

(see `perl-data-compare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-data-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-data-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-compare
   :alt:   (downloads)
.. |docker_perl-data-compare| image:: https://quay.io/repository/biocontainers/perl-data-compare/status
   :target: https://quay.io/repository/biocontainers/perl-data-compare
.. _`perl-data-compare/tags`: https://quay.io/repository/biocontainers/perl-data-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-compare";
        var versions = ["1.25","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-compare/README.html