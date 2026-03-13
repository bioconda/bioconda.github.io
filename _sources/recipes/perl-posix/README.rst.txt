:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-posix'
.. highlight: bash

perl-posix
==========

.. conda:recipe:: perl-posix/1.38_03
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/POSIX
   :license: perl_5
   :recipe: /`perl-posix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix>`_/`1.38_03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-posix/1.38_03/meta.yaml>`_

   


.. conda:package:: perl-posix

   |downloads_perl-posix| |docker_perl-posix|

   :versions:
      
      

      ``1.38_03-2``,  ``1.38_03-1``,  ``1.38_03-0``

      

   
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

    pixi global install perl-posix

to add into an existing workspace instead, run::

    pixi add perl-posix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-posix

Alternatively, to install into a new environment, run::

    conda create -n envname perl-posix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-posix:<tag>

(see `perl-posix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-posix| image:: https://img.shields.io/conda/dn/bioconda/perl-posix.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-posix
   :alt:   (downloads)
.. |docker_perl-posix| image:: https://quay.io/repository/biocontainers/perl-posix/status
   :target: https://quay.io/repository/biocontainers/perl-posix
.. _`perl-posix/tags`: https://quay.io/repository/biocontainers/perl-posix?tab=tags


.. raw:: html

    <script>
        var package = "perl-posix";
        var versions = ["1.38_03","1.38_03","1.38_03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-posix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-posix/README.html