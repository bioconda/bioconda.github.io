:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-clone-pp'
.. highlight: bash

perl-clone-pp
=============

.. conda:recipe:: perl-clone-pp
   :replaces_section_title:
   :noindex:

   Recursively copy Perl datatypes

   :homepage: http://metacpan.org/pod/Clone::PP
   :license: perl_5
   :recipe: /`perl-clone-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone-pp/meta.yaml>`_

   


.. conda:package:: perl-clone-pp

   |downloads_perl-clone-pp| |docker_perl-clone-pp|

   :versions:
      
      

      ``1.08-0``,  ``1.07-2``,  ``1.07-1``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-apache-test: 

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

    pixi global install perl-clone-pp

to add into an existing workspace instead, run::

    pixi add perl-clone-pp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-clone-pp

Alternatively, to install into a new environment, run::

    conda create -n envname perl-clone-pp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-clone-pp:<tag>

(see `perl-clone-pp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-clone-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-clone-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-clone-pp
   :alt:   (downloads)
.. |docker_perl-clone-pp| image:: https://quay.io/repository/biocontainers/perl-clone-pp/status
   :target: https://quay.io/repository/biocontainers/perl-clone-pp
.. _`perl-clone-pp/tags`: https://quay.io/repository/biocontainers/perl-clone-pp?tab=tags


.. raw:: html

    <script>
        var package = "perl-clone-pp";
        var versions = ["1.08","1.07","1.07","1.07","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone-pp/README.html