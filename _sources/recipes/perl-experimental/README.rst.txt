:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-experimental'
.. highlight: bash

perl-experimental
=================

.. conda:recipe:: perl-experimental
   :replaces_section_title:
   :noindex:

   Experimental features made easy

   :homepage: http://metacpan.org/pod/experimental
   :license: perl_5
   :recipe: /`perl-experimental <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-experimental/meta.yaml>`_

   


.. conda:package:: perl-experimental

   |downloads_perl-experimental| |docker_perl-experimental|

   :versions:
      
      

      ``0.036-0``,  ``0.035-0``,  ``0.034-0``,  ``0.033-0``,  ``0.029-0``,  ``0.028-0``,  ``0.027-0``,  ``0.020-1``,  ``0.020-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-version: 

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

    pixi global install perl-experimental

to add into an existing workspace instead, run::

    pixi add perl-experimental

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-experimental

Alternatively, to install into a new environment, run::

    conda create -n envname perl-experimental

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-experimental:<tag>

(see `perl-experimental/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-experimental| image:: https://img.shields.io/conda/dn/bioconda/perl-experimental.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-experimental
   :alt:   (downloads)
.. |docker_perl-experimental| image:: https://quay.io/repository/biocontainers/perl-experimental/status
   :target: https://quay.io/repository/biocontainers/perl-experimental
.. _`perl-experimental/tags`: https://quay.io/repository/biocontainers/perl-experimental?tab=tags


.. raw:: html

    <script>
        var package = "perl-experimental";
        var versions = ["0.036","0.035","0.034","0.033","0.029"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-experimental/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-experimental/README.html