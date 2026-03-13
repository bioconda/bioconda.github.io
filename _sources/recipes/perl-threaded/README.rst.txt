:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-threaded'
.. highlight: bash

perl-threaded
=============

.. conda:recipe:: perl-threaded
   :replaces_section_title:
   :noindex:

   The Perl language.

   :homepage: http://www.perl.org/
   :license: Perl
   :recipe: /`perl-threaded <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-threaded/meta.yaml>`_

   


.. conda:package:: perl-threaded

   |downloads_perl-threaded| |docker_perl-threaded|

   :versions:
      
      

      ``5.32.1-1``,  ``5.26.0-0``,  ``5.22.0-13``,  ``5.22.0-12``,  ``5.22.0-11``,  ``5.22.0-10``,  ``5.22.0-9``,  ``5.22.0-8``

      

   
   :depends on perl: 

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

    pixi global install perl-threaded

to add into an existing workspace instead, run::

    pixi add perl-threaded

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-threaded

Alternatively, to install into a new environment, run::

    conda create -n envname perl-threaded

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-threaded:<tag>

(see `perl-threaded/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-threaded| image:: https://img.shields.io/conda/dn/bioconda/perl-threaded.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-threaded
   :alt:   (downloads)
.. |docker_perl-threaded| image:: https://quay.io/repository/biocontainers/perl-threaded/status
   :target: https://quay.io/repository/biocontainers/perl-threaded
.. _`perl-threaded/tags`: https://quay.io/repository/biocontainers/perl-threaded?tab=tags


.. raw:: html

    <script>
        var package = "perl-threaded";
        var versions = ["5.32.1","5.26.0","5.22.0","5.22.0","5.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-threaded/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-threaded/README.html