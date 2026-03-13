:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-ftp'
.. highlight: bash

perl-net-ftp
============

.. conda:recipe:: perl-net-ftp/2.79
   :replaces_section_title:
   :noindex:

   FTP Client class

   :homepage: http://metacpan.org/pod/Net::FTP
   :license: perl_5
   :recipe: /`perl-net-ftp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp>`_/`2.79 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp/2.79>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-ftp/2.79/meta.yaml>`_

   


.. conda:package:: perl-net-ftp

   |downloads_perl-net-ftp| |docker_perl-net-ftp|

   :versions:
      
      

      ``2.79-2``,  ``2.79-1``,  ``2.79-0``

      

   
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

    pixi global install perl-net-ftp

to add into an existing workspace instead, run::

    pixi add perl-net-ftp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-net-ftp

Alternatively, to install into a new environment, run::

    conda create -n envname perl-net-ftp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-net-ftp:<tag>

(see `perl-net-ftp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-net-ftp| image:: https://img.shields.io/conda/dn/bioconda/perl-net-ftp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-ftp
   :alt:   (downloads)
.. |docker_perl-net-ftp| image:: https://quay.io/repository/biocontainers/perl-net-ftp/status
   :target: https://quay.io/repository/biocontainers/perl-net-ftp
.. _`perl-net-ftp/tags`: https://quay.io/repository/biocontainers/perl-net-ftp?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-ftp";
        var versions = ["2.79","2.79","2.79"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-ftp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-ftp/README.html