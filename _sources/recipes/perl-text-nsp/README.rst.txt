:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-nsp'
.. highlight: bash

perl-text-nsp
=============

.. conda:recipe:: perl-text-nsp
   :replaces_section_title:
   :noindex:

   Extract collocations and Ngrams from text

   :homepage: http://metacpan.org/pod/Text::NSP
   :license: open_source
   :recipe: /`perl-text-nsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-nsp/meta.yaml>`_

   


.. conda:package:: perl-text-nsp

   |downloads_perl-text-nsp| |docker_perl-text-nsp|

   :versions:
      
      

      ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``

      

   
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

    pixi global install perl-text-nsp

to add into an existing workspace instead, run::

    pixi add perl-text-nsp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-text-nsp

Alternatively, to install into a new environment, run::

    conda create -n envname perl-text-nsp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-text-nsp:<tag>

(see `perl-text-nsp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-text-nsp| image:: https://img.shields.io/conda/dn/bioconda/perl-text-nsp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-nsp
   :alt:   (downloads)
.. |docker_perl-text-nsp| image:: https://quay.io/repository/biocontainers/perl-text-nsp/status
   :target: https://quay.io/repository/biocontainers/perl-text-nsp
.. _`perl-text-nsp/tags`: https://quay.io/repository/biocontainers/perl-text-nsp?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-nsp";
        var versions = ["1.31","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-nsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-nsp/README.html