:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mldbm-sync'
.. highlight: bash

perl-mldbm-sync
===============

.. conda:recipe:: perl-mldbm-sync
   :replaces_section_title:
   :noindex:

   safe concurrent access to MLDBM databases

   :homepage: http://metacpan.org/pod/MLDBM-Sync
   :license: unknown
   :recipe: /`perl-mldbm-sync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync/meta.yaml>`_

   


.. conda:package:: perl-mldbm-sync

   |downloads_perl-mldbm-sync| |docker_perl-mldbm-sync|

   :versions:
      
      

      ``0.30-2``,  ``0.30-1``,  ``0.30-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-mldbm: 
   :depends on perl-tie-cache: 

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

    pixi global install perl-mldbm-sync

to add into an existing workspace instead, run::

    pixi add perl-mldbm-sync

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mldbm-sync

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mldbm-sync

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mldbm-sync:<tag>

(see `perl-mldbm-sync/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mldbm-sync| image:: https://img.shields.io/conda/dn/bioconda/perl-mldbm-sync.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mldbm-sync
   :alt:   (downloads)
.. |docker_perl-mldbm-sync| image:: https://quay.io/repository/biocontainers/perl-mldbm-sync/status
   :target: https://quay.io/repository/biocontainers/perl-mldbm-sync
.. _`perl-mldbm-sync/tags`: https://quay.io/repository/biocontainers/perl-mldbm-sync?tab=tags


.. raw:: html

    <script>
        var package = "perl-mldbm-sync";
        var versions = ["0.30","0.30","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mldbm-sync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mldbm-sync/README.html