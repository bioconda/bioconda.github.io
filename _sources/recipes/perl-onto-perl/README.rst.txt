:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-onto-perl'
.. highlight: bash

perl-onto-perl
==============

.. conda:recipe:: perl-onto-perl
   :replaces_section_title:
   :noindex:

   PERL modules for manipulating OBO\-formatted ontologies\, such as the Gene Ontology \(GO\)

   :homepage: http://metacpan.org/pod/ONTO-PERL
   :license: perl_5
   :recipe: /`perl-onto-perl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-onto-perl/meta.yaml>`_

   


.. conda:package:: perl-onto-perl

   |downloads_perl-onto-perl| |docker_perl-onto-perl|

   :versions:
      
      

      ``1.45-3``,  ``1.45-2``,  ``1.45-1``,  ``1.45-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-date-manip: 
   :depends on perl-text-csv: 
   :depends on perl-xml-parser: 
   :depends on perl-xml-xpath: 

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

    pixi global install perl-onto-perl

to add into an existing workspace instead, run::

    pixi add perl-onto-perl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-onto-perl

Alternatively, to install into a new environment, run::

    conda create -n envname perl-onto-perl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-onto-perl:<tag>

(see `perl-onto-perl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-onto-perl| image:: https://img.shields.io/conda/dn/bioconda/perl-onto-perl.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-onto-perl
   :alt:   (downloads)
.. |docker_perl-onto-perl| image:: https://quay.io/repository/biocontainers/perl-onto-perl/status
   :target: https://quay.io/repository/biocontainers/perl-onto-perl
.. _`perl-onto-perl/tags`: https://quay.io/repository/biocontainers/perl-onto-perl?tab=tags


.. raw:: html

    <script>
        var package = "perl-onto-perl";
        var versions = ["1.45","1.45","1.45","1.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-onto-perl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-onto-perl/README.html