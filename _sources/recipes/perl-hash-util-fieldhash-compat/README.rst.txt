:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hash-util-fieldhash-compat'
.. highlight: bash

perl-hash-util-fieldhash-compat
===============================

.. conda:recipe:: perl-hash-util-fieldhash-compat/0.11
   :replaces_section_title:
   :noindex:

   Use Hash\:\:Util\:\:FieldHash or ties\, depending on availability

   :homepage: https://github.com/karenetheridge/Hash-Util-FieldHash-Compat
   :license: perl_5
   :recipe: /`perl-hash-util-fieldhash-compat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11/meta.yaml>`_

   


.. conda:package:: perl-hash-util-fieldhash-compat

   |downloads_perl-hash-util-fieldhash-compat| |docker_perl-hash-util-fieldhash-compat|

   :versions:
      
      

      ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-constant: 
   :depends on perl-exporter: 
   :depends on perl-parent: 
   :depends on perl-tie-refhash: 
   :depends on perl-tie-refhash-weak: 

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

    pixi global install perl-hash-util-fieldhash-compat

to add into an existing workspace instead, run::

    pixi add perl-hash-util-fieldhash-compat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-hash-util-fieldhash-compat

Alternatively, to install into a new environment, run::

    conda create -n envname perl-hash-util-fieldhash-compat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-hash-util-fieldhash-compat:<tag>

(see `perl-hash-util-fieldhash-compat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-hash-util-fieldhash-compat| image:: https://img.shields.io/conda/dn/bioconda/perl-hash-util-fieldhash-compat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hash-util-fieldhash-compat
   :alt:   (downloads)
.. |docker_perl-hash-util-fieldhash-compat| image:: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat/status
   :target: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat
.. _`perl-hash-util-fieldhash-compat/tags`: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat?tab=tags


.. raw:: html

    <script>
        var package = "perl-hash-util-fieldhash-compat";
        var versions = ["0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html