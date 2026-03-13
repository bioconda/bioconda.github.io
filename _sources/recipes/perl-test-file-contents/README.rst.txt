:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-file-contents'
.. highlight: bash

perl-test-file-contents
=======================

.. conda:recipe:: perl-test-file-contents/0.23
   :replaces_section_title:
   :noindex:

   Test routines for examining the contents of files

   :homepage: http://search.cpan.org/dist/Test-File-Contents/
   :license: perl_5
   :recipe: /`perl-test-file-contents <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file-contents/0.23/meta.yaml>`_

   


.. conda:package:: perl-test-file-contents

   |downloads_perl-test-file-contents| |docker_perl-test-file-contents|

   :versions:
      
      

      ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-digest-md5: 
   :depends on perl-file-spec: 
   :depends on perl-test-pod: 
   :depends on perl-test-pod-coverage: 
   :depends on perl-text-diff: 

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

    pixi global install perl-test-file-contents

to add into an existing workspace instead, run::

    pixi add perl-test-file-contents

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-file-contents

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-file-contents

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-file-contents:<tag>

(see `perl-test-file-contents/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-file-contents| image:: https://img.shields.io/conda/dn/bioconda/perl-test-file-contents.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-file-contents
   :alt:   (downloads)
.. |docker_perl-test-file-contents| image:: https://quay.io/repository/biocontainers/perl-test-file-contents/status
   :target: https://quay.io/repository/biocontainers/perl-test-file-contents
.. _`perl-test-file-contents/tags`: https://quay.io/repository/biocontainers/perl-test-file-contents?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-file-contents";
        var versions = ["0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-file-contents/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-file-contents/README.html