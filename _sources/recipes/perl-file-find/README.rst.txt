:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-find'
.. highlight: bash

perl-file-find
==============

.. conda:recipe:: perl-file-find/1.27
   :replaces_section_title:
   :noindex:

   Traverse a directory tree.

   :homepage: http://metacpan.org/pod/File::Find
   :license: perl_5
   :recipe: /`perl-file-find <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find>`_/`1.27 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-find/1.27/meta.yaml>`_

   


.. conda:package:: perl-file-find

   |downloads_perl-file-find| |docker_perl-file-find|

   :versions:
      
      

      ``1.27-2``,  ``1.27-1``,  ``1.27-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-file-find

to add into an existing workspace instead, run::

    pixi add perl-file-find

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-find

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-find

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-find:<tag>

(see `perl-file-find/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-find| image:: https://img.shields.io/conda/dn/bioconda/perl-file-find.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-find
   :alt:   (downloads)
.. |docker_perl-file-find| image:: https://quay.io/repository/biocontainers/perl-file-find/status
   :target: https://quay.io/repository/biocontainers/perl-file-find
.. _`perl-file-find/tags`: https://quay.io/repository/biocontainers/perl-file-find?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-find";
        var versions = ["1.27","1.27","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-find/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-find/README.html