:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-attribute'
.. highlight: bash

perl-sub-attribute
==================

.. conda:recipe:: perl-sub-attribute
   :replaces_section_title:
   :noindex:

   Reliable subroutine attribute handlers

   :homepage: http://metacpan.org/pod/Sub::Attribute
   :license: perl_5
   :recipe: /`perl-sub-attribute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-attribute/meta.yaml>`_

   


.. conda:package:: perl-sub-attribute

   |downloads_perl-sub-attribute| |docker_perl-sub-attribute|

   :versions:
      
      

      ``0.07-2``,  ``0.07-1``,  ``0.07-0``,  ``0.05-4``,  ``0.05-3``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-class-trigger: ``0.15.*``

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

    pixi global install perl-sub-attribute

to add into an existing workspace instead, run::

    pixi add perl-sub-attribute

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sub-attribute

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sub-attribute

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sub-attribute:<tag>

(see `perl-sub-attribute/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sub-attribute| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-attribute.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-attribute
   :alt:   (downloads)
.. |docker_perl-sub-attribute| image:: https://quay.io/repository/biocontainers/perl-sub-attribute/status
   :target: https://quay.io/repository/biocontainers/perl-sub-attribute
.. _`perl-sub-attribute/tags`: https://quay.io/repository/biocontainers/perl-sub-attribute?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-attribute";
        var versions = ["0.07","0.07","0.07","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-attribute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-attribute/README.html