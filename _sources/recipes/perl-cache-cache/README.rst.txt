:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cache-cache'
.. highlight: bash

perl-cache-cache
================

.. conda:recipe:: perl-cache-cache
   :replaces_section_title:
   :noindex:

   extends Cache\:\:SizeAwareMemoryCache

   :homepage: http://metacpan.org/pod/Cache::Cache
   :license: unknown
   :recipe: /`perl-cache-cache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache/meta.yaml>`_

   


.. conda:package:: perl-cache-cache

   |downloads_perl-cache-cache| |docker_perl-cache-cache|

   :versions:
      
      

      ``1.08-1``,  ``1.08-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-digest-sha1: 
   :depends on perl-error: 
   :depends on perl-ipc-sharelite: 
   :depends on perl-storable: 

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

    pixi global install perl-cache-cache

to add into an existing workspace instead, run::

    pixi add perl-cache-cache

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-cache-cache

Alternatively, to install into a new environment, run::

    conda create -n envname perl-cache-cache

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-cache-cache:<tag>

(see `perl-cache-cache/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-cache-cache| image:: https://img.shields.io/conda/dn/bioconda/perl-cache-cache.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cache-cache
   :alt:   (downloads)
.. |docker_perl-cache-cache| image:: https://quay.io/repository/biocontainers/perl-cache-cache/status
   :target: https://quay.io/repository/biocontainers/perl-cache-cache
.. _`perl-cache-cache/tags`: https://quay.io/repository/biocontainers/perl-cache-cache?tab=tags


.. raw:: html

    <script>
        var package = "perl-cache-cache";
        var versions = ["1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cache-cache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cache-cache/README.html