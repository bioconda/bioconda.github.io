:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-dom'
.. highlight: bash

perl-xml-dom
============

.. conda:recipe:: perl-xml-dom
   :replaces_section_title:
   :noindex:

   A perl module for building DOM Level 1 compliant document structures

   :homepage: http://metacpan.org/pod/XML-DOM
   :license: unknown
   :recipe: /`perl-xml-dom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom/meta.yaml>`_

   


.. conda:package:: perl-xml-dom

   |downloads_perl-xml-dom| |docker_perl-xml-dom|

   :versions:
      
      

      ``1.46-1``,  ``1.46-0``,  ``1.45-1``,  ``1.45-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-http-message: ``>=6.18``
   :depends on perl-libwww-perl: 
   :depends on perl-libxml-perl: 
   :depends on perl-xml-parser: 
   :depends on perl-xml-regexp: 

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

    pixi global install perl-xml-dom

to add into an existing workspace instead, run::

    pixi add perl-xml-dom

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-xml-dom

Alternatively, to install into a new environment, run::

    conda create -n envname perl-xml-dom

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-xml-dom:<tag>

(see `perl-xml-dom/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-xml-dom| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-dom.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-dom
   :alt:   (downloads)
.. |docker_perl-xml-dom| image:: https://quay.io/repository/biocontainers/perl-xml-dom/status
   :target: https://quay.io/repository/biocontainers/perl-xml-dom
.. _`perl-xml-dom/tags`: https://quay.io/repository/biocontainers/perl-xml-dom?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-dom";
        var versions = ["1.46","1.46","1.45","1.45"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-dom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-dom/README.html