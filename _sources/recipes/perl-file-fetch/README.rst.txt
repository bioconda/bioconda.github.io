:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-fetch'
.. highlight: bash

perl-file-fetch
===============

.. conda:recipe:: perl-file-fetch
   :replaces_section_title:
   :noindex:

   Generic file fetching code.

   :homepage: https://metacpan.org/pod/File::Fetch
   :license: perl_5
   :recipe: /`perl-file-fetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-fetch/meta.yaml>`_

   


.. conda:package:: perl-file-fetch

   |downloads_perl-file-fetch| |docker_perl-file-fetch|

   :versions:
      
      

      ``1.08-0``,  ``1.04-0``,  ``0.56-1``,  ``0.56-0``,  ``0.48-4``,  ``0.48-3``,  ``0.48-2``,  ``0.48-1``,  ``0.48-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-path: 
   :depends on perl-ipc-cmd: 
   :depends on perl-locale-maketext-simple: 
   :depends on perl-module-load-conditional: 
   :depends on perl-params-check: 

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

    pixi global install perl-file-fetch

to add into an existing workspace instead, run::

    pixi add perl-file-fetch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-fetch

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-fetch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-fetch:<tag>

(see `perl-file-fetch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-fetch| image:: https://img.shields.io/conda/dn/bioconda/perl-file-fetch.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-fetch
   :alt:   (downloads)
.. |docker_perl-file-fetch| image:: https://quay.io/repository/biocontainers/perl-file-fetch/status
   :target: https://quay.io/repository/biocontainers/perl-file-fetch
.. _`perl-file-fetch/tags`: https://quay.io/repository/biocontainers/perl-file-fetch?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-fetch";
        var versions = ["1.08","1.04","0.56","0.56","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-fetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-fetch/README.html