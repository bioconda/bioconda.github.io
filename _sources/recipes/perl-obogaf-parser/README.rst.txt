:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-obogaf-parser'
.. highlight: bash

perl-obogaf-parser
==================

.. conda:recipe:: perl-obogaf-parser
   :replaces_section_title:
   :noindex:

   a perl5 module to handle obo and gaf file

   :homepage: http://metacpan.org/pod/obogaf::parser
   :documentation: https://obogaf-parser.readthedocs.io
   
   :developer docs: https://github.com/marconotaro/obogaf-parser
   :license: perl_5
   :recipe: /`perl-obogaf-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/obogaf\-parser\/badge\/\?version\=latest\)\]\(https\:\/\/obogaf\-parser.readthedocs.io\/en\/latest\/\?badge\=latest\)

   obogaf\-parser is a perl5 module specifically designed to handle GO and HPO obo file and their gene annotation file \(gaf\). However\, obogaf\-parser can be safely used to parse any obo file listed in OBO foundry website and any gaf file structured as those shown in GOA and HPO website \(i.e. a csv file using tab as separator\).




.. conda:package:: perl-obogaf-parser

   |downloads_perl-obogaf-parser| |docker_perl-obogaf-parser|

   :versions:
      
      

      ``1.373-2``,  ``1.373-1``,  ``1.373-0``,  ``1.272-0``,  ``1.271-0``,  ``1.016-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-graph: 
   :depends on perl-list-moreutils: 
   :depends on perl-perlio-gzip: 

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

    pixi global install perl-obogaf-parser

to add into an existing workspace instead, run::

    pixi add perl-obogaf-parser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-obogaf-parser

Alternatively, to install into a new environment, run::

    conda create -n envname perl-obogaf-parser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-obogaf-parser:<tag>

(see `perl-obogaf-parser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-obogaf-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-obogaf-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-obogaf-parser
   :alt:   (downloads)
.. |docker_perl-obogaf-parser| image:: https://quay.io/repository/biocontainers/perl-obogaf-parser/status
   :target: https://quay.io/repository/biocontainers/perl-obogaf-parser
.. _`perl-obogaf-parser/tags`: https://quay.io/repository/biocontainers/perl-obogaf-parser?tab=tags


.. raw:: html

    <script>
        var package = "perl-obogaf-parser";
        var versions = ["1.373","1.373","1.373","1.272","1.271"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-obogaf-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-obogaf-parser/README.html