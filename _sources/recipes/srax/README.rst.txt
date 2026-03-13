:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srax'
.. highlight: bash

srax
====

.. conda:recipe:: srax
   :replaces_section_title:
   :noindex:

   Systematic Resistome Analysis

   :homepage: https://github.com/lgpdevtools/sraX
   :documentation: https://github.com/lgpdevtools/sraX/blob/master/doc/sraX_user_manual.pdf
   
   :license: GPL-3.0-only
   :recipe: /`srax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srax/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2020.00052`

   


.. conda:package:: srax

   |downloads_srax| |docker_srax|

   :versions:
      
      

      ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4-0``

      

   
   :depends on blast: ``>=2.9``
   :depends on clustalo: ``>=1.2.4``
   :depends on diamond: ``>=0.9.29``
   :depends on mafft: ``>=7.455``
   :depends on muscle: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-env-path: 
   :depends on perl-file-path: 
   :depends on perl-file-slurp: 
   :depends on perl-file-temp: 
   :depends on perl-file-which: 
   :depends on perl-getopt-long: 
   :depends on perl-io-socket-ssl: 
   :depends on perl-json: 
   :depends on perl-libwww-perl: 
   :depends on perl-list-moreutils: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-net-ssleay: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-text-csv: 
   :depends on unzip: 
   :depends on zlib: 

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

    pixi global install srax

to add into an existing workspace instead, run::

    pixi add srax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install srax

Alternatively, to install into a new environment, run::

    conda create -n envname srax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/srax:<tag>

(see `srax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_srax| image:: https://img.shields.io/conda/dn/bioconda/srax.svg?style=flat
   :target: https://anaconda.org/bioconda/srax
   :alt:   (downloads)
.. |docker_srax| image:: https://quay.io/repository/biocontainers/srax/status
   :target: https://quay.io/repository/biocontainers/srax
.. _`srax/tags`: https://quay.io/repository/biocontainers/srax?tab=tags


.. raw:: html

    <script>
        var package = "srax";
        var versions = ["1.5","1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srax/README.html