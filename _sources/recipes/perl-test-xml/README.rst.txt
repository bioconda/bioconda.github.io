:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-xml'
.. highlight: bash

perl-test-xml
=============

.. conda:recipe:: perl-test-xml
   :replaces_section_title:
   :noindex:

   Compare XML in perl tests

   :homepage: http://metacpan.org/pod/Test-XML
   :license: perl_5
   :recipe: /`perl-test-xml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-xml/meta.yaml>`_

   


.. conda:package:: perl-test-xml

   |downloads_perl-test-xml| |docker_perl-test-xml|

   :versions:
      
      

      ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-xml-parser: 
   :depends on perl-xml-sax: 
   :depends on perl-xml-sax-writer: 
   :depends on perl-xml-semanticdiff: 
   :depends on perl-xml-twig: 
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

    pixi global install perl-test-xml

to add into an existing workspace instead, run::

    pixi add perl-test-xml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-xml

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-xml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-xml:<tag>

(see `perl-test-xml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-xml| image:: https://img.shields.io/conda/dn/bioconda/perl-test-xml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-xml
   :alt:   (downloads)
.. |docker_perl-test-xml| image:: https://quay.io/repository/biocontainers/perl-test-xml/status
   :target: https://quay.io/repository/biocontainers/perl-test-xml
.. _`perl-test-xml/tags`: https://quay.io/repository/biocontainers/perl-test-xml?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-xml";
        var versions = ["0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-xml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-xml/README.html