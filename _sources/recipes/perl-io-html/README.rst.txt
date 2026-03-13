:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-html'
.. highlight: bash

perl-io-html
============

.. conda:recipe:: perl-io-html
   :replaces_section_title:
   :noindex:

   Open an HTML file with automatic charset detection

   :homepage: http://metacpan.org/pod/IO-HTML
   :license: perl_5
   :recipe: /`perl-io-html <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-html>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-html/meta.yaml>`_

   


.. conda:package:: perl-io-html

   |downloads_perl-io-html| |docker_perl-io-html|

   :versions:
      
      

      ``1.004-0``,  ``1.001-3``,  ``1.001-2``,  ``1.001-1``,  ``1.001-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-io-html

to add into an existing workspace instead, run::

    pixi add perl-io-html

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-html

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-html

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-html:<tag>

(see `perl-io-html/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-html| image:: https://img.shields.io/conda/dn/bioconda/perl-io-html.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-html
   :alt:   (downloads)
.. |docker_perl-io-html| image:: https://quay.io/repository/biocontainers/perl-io-html/status
   :target: https://quay.io/repository/biocontainers/perl-io-html
.. _`perl-io-html/tags`: https://quay.io/repository/biocontainers/perl-io-html?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-html";
        var versions = ["1.004","1.001","1.001","1.001","1.001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-html/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-html/README.html