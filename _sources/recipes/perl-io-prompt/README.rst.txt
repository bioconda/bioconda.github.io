:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-prompt'
.. highlight: bash

perl-io-prompt
==============

.. conda:recipe:: perl-io-prompt
   :replaces_section_title:
   :noindex:

   Interactively prompt for user input

   :homepage: http://search.cpan.org/dist/IO-Prompt/lib/IO/Prompt.pm
   :license: perl_5
   :recipe: /`perl-io-prompt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-prompt/meta.yaml>`_

   


.. conda:package:: perl-io-prompt

   |downloads_perl-io-prompt| |docker_perl-io-prompt|

   :versions:
      
      

      ``0.997004-4``,  ``0.997004-3``,  ``0.997004-2``,  ``0.997004-1``,  ``0.997004-0``

      

   
   :depends on perl: ``>=5.26.2``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-termreadkey: 
   :depends on perl-want: 

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

    pixi global install perl-io-prompt

to add into an existing workspace instead, run::

    pixi add perl-io-prompt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-prompt

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-prompt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-prompt:<tag>

(see `perl-io-prompt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-prompt| image:: https://img.shields.io/conda/dn/bioconda/perl-io-prompt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-prompt
   :alt:   (downloads)
.. |docker_perl-io-prompt| image:: https://quay.io/repository/biocontainers/perl-io-prompt/status
   :target: https://quay.io/repository/biocontainers/perl-io-prompt
.. _`perl-io-prompt/tags`: https://quay.io/repository/biocontainers/perl-io-prompt?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-prompt";
        var versions = ["0.997004","0.997004","0.997004","0.997004","0.997004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-prompt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-prompt/README.html