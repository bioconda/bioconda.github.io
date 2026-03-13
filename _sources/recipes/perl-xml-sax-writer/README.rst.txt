:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-sax-writer'
.. highlight: bash

perl-xml-sax-writer
===================

.. conda:recipe:: perl-xml-sax-writer
   :replaces_section_title:
   :noindex:

   SAX2 XML Writer

   :homepage: https://github.com/perigrin/xml-sax-writer
   :license: perl_5
   :recipe: /`perl-xml-sax-writer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-sax-writer/meta.yaml>`_

   


.. conda:package:: perl-xml-sax-writer

   |downloads_perl-xml-sax-writer| |docker_perl-xml-sax-writer|

   :versions:
      
      

      ``0.57-1``,  ``0.57-0``,  ``0.56-2``,  ``0.56-1``,  ``0.56-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-xml-filter-buffertext: 
   :depends on perl-xml-namespacesupport: 
   :depends on perl-xml-sax-base: 

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

    pixi global install perl-xml-sax-writer

to add into an existing workspace instead, run::

    pixi add perl-xml-sax-writer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-xml-sax-writer

Alternatively, to install into a new environment, run::

    conda create -n envname perl-xml-sax-writer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-xml-sax-writer:<tag>

(see `perl-xml-sax-writer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-xml-sax-writer| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-sax-writer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-sax-writer
   :alt:   (downloads)
.. |docker_perl-xml-sax-writer| image:: https://quay.io/repository/biocontainers/perl-xml-sax-writer/status
   :target: https://quay.io/repository/biocontainers/perl-xml-sax-writer
.. _`perl-xml-sax-writer/tags`: https://quay.io/repository/biocontainers/perl-xml-sax-writer?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-sax-writer";
        var versions = ["0.57","0.57","0.56","0.56","0.56"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-sax-writer/README.html