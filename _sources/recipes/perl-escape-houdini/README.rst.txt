:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-escape-houdini'
.. highlight: bash

perl-escape-houdini
===================

.. conda:recipe:: perl-escape-houdini/0.3.0
   :replaces_section_title:
   :noindex:

   Perl API to Houdini\, a zero\-dependency C web escaping library

   :homepage: https://github.com/yanick/Escape-Houdini
   :license: perl_5
   :recipe: /`perl-escape-houdini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini>`_/`0.3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-escape-houdini/0.3.0/meta.yaml>`_

   


.. conda:package:: perl-escape-houdini

   |downloads_perl-escape-houdini| |docker_perl-escape-houdini|

   :versions:
      
      

      ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-exporter: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-parent: 

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

    pixi global install perl-escape-houdini

to add into an existing workspace instead, run::

    pixi add perl-escape-houdini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-escape-houdini

Alternatively, to install into a new environment, run::

    conda create -n envname perl-escape-houdini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-escape-houdini:<tag>

(see `perl-escape-houdini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-escape-houdini| image:: https://img.shields.io/conda/dn/bioconda/perl-escape-houdini.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-escape-houdini
   :alt:   (downloads)
.. |docker_perl-escape-houdini| image:: https://quay.io/repository/biocontainers/perl-escape-houdini/status
   :target: https://quay.io/repository/biocontainers/perl-escape-houdini
.. _`perl-escape-houdini/tags`: https://quay.io/repository/biocontainers/perl-escape-houdini?tab=tags


.. raw:: html

    <script>
        var package = "perl-escape-houdini";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-escape-houdini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-escape-houdini/README.html