:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-term-encoding'
.. highlight: bash

perl-term-encoding
==================

.. conda:recipe:: perl-term-encoding
   :replaces_section_title:
   :noindex:

   Detect encoding of the current terminal

   :homepage: http://metacpan.org/pod/Term::Encoding
   :license: perl_5
   :recipe: /`perl-term-encoding <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-term-encoding/meta.yaml>`_

   


.. conda:package:: perl-term-encoding

   |downloads_perl-term-encoding| |docker_perl-term-encoding|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``,  ``0.02-1``,  ``0.02-0``

      

   
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

    pixi global install perl-term-encoding

to add into an existing workspace instead, run::

    pixi add perl-term-encoding

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-term-encoding

Alternatively, to install into a new environment, run::

    conda create -n envname perl-term-encoding

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-term-encoding:<tag>

(see `perl-term-encoding/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-term-encoding| image:: https://img.shields.io/conda/dn/bioconda/perl-term-encoding.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-term-encoding
   :alt:   (downloads)
.. |docker_perl-term-encoding| image:: https://quay.io/repository/biocontainers/perl-term-encoding/status
   :target: https://quay.io/repository/biocontainers/perl-term-encoding
.. _`perl-term-encoding/tags`: https://quay.io/repository/biocontainers/perl-term-encoding?tab=tags


.. raw:: html

    <script>
        var package = "perl-term-encoding";
        var versions = ["0.03","0.03","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-term-encoding/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-term-encoding/README.html