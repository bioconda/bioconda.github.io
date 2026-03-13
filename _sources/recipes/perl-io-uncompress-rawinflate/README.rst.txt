:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-uncompress-rawinflate'
.. highlight: bash

perl-io-uncompress-rawinflate
=============================

.. conda:recipe:: perl-io-uncompress-rawinflate/2.064
   :replaces_section_title:
   :noindex:

   Read RFC 1951 files\/buffers

   :homepage: http://metacpan.org/pod/IO::Uncompress::RawInflate
   :license: perl_5
   :recipe: /`perl-io-uncompress-rawinflate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate>`_/`2.064 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate/2.064>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-uncompress-rawinflate/2.064/meta.yaml>`_

   


.. conda:package:: perl-io-uncompress-rawinflate

   |downloads_perl-io-uncompress-rawinflate| |docker_perl-io-uncompress-rawinflate|

   :versions:
      
      

      ``2.064-2``,  ``2.064-1``,  ``2.064-0``

      

   
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

    pixi global install perl-io-uncompress-rawinflate

to add into an existing workspace instead, run::

    pixi add perl-io-uncompress-rawinflate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-uncompress-rawinflate

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-uncompress-rawinflate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-uncompress-rawinflate:<tag>

(see `perl-io-uncompress-rawinflate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-uncompress-rawinflate| image:: https://img.shields.io/conda/dn/bioconda/perl-io-uncompress-rawinflate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-uncompress-rawinflate
   :alt:   (downloads)
.. |docker_perl-io-uncompress-rawinflate| image:: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate/status
   :target: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate
.. _`perl-io-uncompress-rawinflate/tags`: https://quay.io/repository/biocontainers/perl-io-uncompress-rawinflate?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-uncompress-rawinflate";
        var versions = ["2.064","2.064","2.064"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-uncompress-rawinflate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-uncompress-rawinflate/README.html