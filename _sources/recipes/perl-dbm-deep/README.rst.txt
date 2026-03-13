:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbm-deep'
.. highlight: bash

perl-dbm-deep
=============

.. conda:recipe:: perl-dbm-deep
   :replaces_section_title:
   :noindex:

   A pure perl multi\-level hash\/array DBM that supports transactions

   :homepage: http://metacpan.org/pod/DBM-Deep
   :license: perl_5
   :recipe: /`perl-dbm-deep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbm-deep/meta.yaml>`_

   


.. conda:package:: perl-dbm-deep

   |downloads_perl-dbm-deep| |docker_perl-dbm-deep|

   :versions:
      
      

      ``2.0019-0``,  ``2.0016-0``,  ``2.0013-1``,  ``2.0013-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-dbi: 
   :depends on perl-digest-md5: 
   :depends on perl-scalar-list-utils: 

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

    pixi global install perl-dbm-deep

to add into an existing workspace instead, run::

    pixi add perl-dbm-deep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-dbm-deep

Alternatively, to install into a new environment, run::

    conda create -n envname perl-dbm-deep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-dbm-deep:<tag>

(see `perl-dbm-deep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-dbm-deep| image:: https://img.shields.io/conda/dn/bioconda/perl-dbm-deep.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbm-deep
   :alt:   (downloads)
.. |docker_perl-dbm-deep| image:: https://quay.io/repository/biocontainers/perl-dbm-deep/status
   :target: https://quay.io/repository/biocontainers/perl-dbm-deep
.. _`perl-dbm-deep/tags`: https://quay.io/repository/biocontainers/perl-dbm-deep?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbm-deep";
        var versions = ["2.0019","2.0016","2.0013","2.0013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbm-deep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbm-deep/README.html