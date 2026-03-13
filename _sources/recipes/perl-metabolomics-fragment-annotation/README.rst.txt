:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-metabolomics-fragment-annotation'
.. highlight: bash

perl-metabolomics-fragment-annotation
=====================================

.. conda:recipe:: perl-metabolomics-fragment-annotation
   :replaces_section_title:
   :noindex:

   Perl extension for fragment annotation in metabolomics

   :homepage: https://metacpan.org/pod/Metabolomics::Fragment::Annotation
   :license: perl_5
   :recipe: /`perl-metabolomics-fragment-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation/meta.yaml>`_

   


.. conda:package:: perl-metabolomics-fragment-annotation

   |downloads_perl-metabolomics-fragment-annotation| |docker_perl-metabolomics-fragment-annotation|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.3-2``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.2-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-class-accessor: 
   :depends on perl-datetime: 
   :depends on perl-file-share: 
   :depends on perl-file-sharedir-install: 
   :depends on perl-html-template: 
   :depends on perl-json: 
   :depends on perl-log-any: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-text-csv: 
   :depends on perl-text-csv_xs: 
   :depends on perl-uri: 
   :depends on perl-uri-query: 
   :depends on perl-xml-twig: 

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

    pixi global install perl-metabolomics-fragment-annotation

to add into an existing workspace instead, run::

    pixi add perl-metabolomics-fragment-annotation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-metabolomics-fragment-annotation

Alternatively, to install into a new environment, run::

    conda create -n envname perl-metabolomics-fragment-annotation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-metabolomics-fragment-annotation:<tag>

(see `perl-metabolomics-fragment-annotation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-metabolomics-fragment-annotation| image:: https://img.shields.io/conda/dn/bioconda/perl-metabolomics-fragment-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-metabolomics-fragment-annotation
   :alt:   (downloads)
.. |docker_perl-metabolomics-fragment-annotation| image:: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation/status
   :target: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation
.. _`perl-metabolomics-fragment-annotation/tags`: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation?tab=tags


.. raw:: html

    <script>
        var package = "perl-metabolomics-fragment-annotation";
        var versions = ["0.6.9","0.6.3","0.6.3","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html