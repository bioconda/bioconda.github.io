:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-nonmoose'
.. highlight: bash

perl-moosex-nonmoose
====================

.. conda:recipe:: perl-moosex-nonmoose
   :replaces_section_title:
   :noindex:

   MooseX\:\:NonMoose \- easy subclassing of non\-Moose classes.

   :homepage: https://github.com/moose/MooseX-NonMoose
   :license: Perl_5
   :recipe: /`perl-moosex-nonmoose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose/meta.yaml>`_

   


.. conda:package:: perl-moosex-nonmoose

   |downloads_perl-moosex-nonmoose| |docker_perl-moosex-nonmoose|

   :versions:
      
      

      ``0.27-0``,  ``0.26-4``,  ``0.26-3``,  ``0.26-2``,  ``0.26-1``,  ``0.26-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-list-moreutils: 
   :depends on perl-module-runtime: 
   :depends on perl-moose: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-scalar-util-numeric: 
   :depends on perl-try-tiny: 

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

    pixi global install perl-moosex-nonmoose

to add into an existing workspace instead, run::

    pixi add perl-moosex-nonmoose

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-nonmoose

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-nonmoose

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-nonmoose:<tag>

(see `perl-moosex-nonmoose/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-nonmoose| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-nonmoose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-nonmoose
   :alt:   (downloads)
.. |docker_perl-moosex-nonmoose| image:: https://quay.io/repository/biocontainers/perl-moosex-nonmoose/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-nonmoose
.. _`perl-moosex-nonmoose/tags`: https://quay.io/repository/biocontainers/perl-moosex-nonmoose?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-nonmoose";
        var versions = ["0.27","0.26","0.26","0.26","0.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html