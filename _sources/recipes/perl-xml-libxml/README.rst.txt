:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-libxml'
.. highlight: bash

perl-xml-libxml
===============

.. conda:recipe:: perl-xml-libxml
   :replaces_section_title:
   :noindex:

   Interface to Gnome libxml2 xml parsing and DOM library.

   :homepage: https://bitbucket.org/shlomif/perl-xml-libxml
   :license: Perl_5
   :recipe: /`perl-xml-libxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxml/meta.yaml>`_

   


.. conda:package:: perl-xml-libxml

   |downloads_perl-xml-libxml| |docker_perl-xml-libxml|

   :versions:
      
      

      ``2.0210-1``,  ``2.0210-0``,  ``2.0207-0``,  ``2.0132-3``,  ``2.0132-2``,  ``2.0132-1``,  ``2.0132-0``,  ``2.0124-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libiconv: ``>=1.18,<2.0a0``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libxml2: ``>=2.14.4,<2.15.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-alien-build: ``>=2.84,<3.0a0``
   :depends on perl-alien-libxml2: ``>=0.20,<0.21.0a0``
   :depends on perl-xml-namespacesupport: 
   :depends on perl-xml-sax: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-xml-libxml

to add into an existing workspace instead, run::

    pixi add perl-xml-libxml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-xml-libxml

Alternatively, to install into a new environment, run::

    conda create -n envname perl-xml-libxml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-xml-libxml:<tag>

(see `perl-xml-libxml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-xml-libxml| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-libxml.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-libxml
   :alt:   (downloads)
.. |docker_perl-xml-libxml| image:: https://quay.io/repository/biocontainers/perl-xml-libxml/status
   :target: https://quay.io/repository/biocontainers/perl-xml-libxml
.. _`perl-xml-libxml/tags`: https://quay.io/repository/biocontainers/perl-xml-libxml?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-libxml";
        var versions = ["2.0210","2.0210","2.0207","2.0132","2.0132"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-libxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-libxml/README.html