:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-compress-deflate'
.. highlight: bash

perl-io-compress-deflate
========================

.. conda:recipe:: perl-io-compress-deflate/2.064
   :replaces_section_title:
   :noindex:

   Write RFC 1950 files\/buffers

   :homepage: http://metacpan.org/pod/IO::Compress::Deflate
   :license: perl_5
   :recipe: /`perl-io-compress-deflate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress-deflate>`_/`2.064 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress-deflate/2.064>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress-deflate/2.064/meta.yaml>`_

   


.. conda:package:: perl-io-compress-deflate

   |downloads_perl-io-compress-deflate| |docker_perl-io-compress-deflate|

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

    pixi global install perl-io-compress-deflate

to add into an existing workspace instead, run::

    pixi add perl-io-compress-deflate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-io-compress-deflate

Alternatively, to install into a new environment, run::

    conda create -n envname perl-io-compress-deflate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-io-compress-deflate:<tag>

(see `perl-io-compress-deflate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-io-compress-deflate| image:: https://img.shields.io/conda/dn/bioconda/perl-io-compress-deflate.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-compress-deflate
   :alt:   (downloads)
.. |docker_perl-io-compress-deflate| image:: https://quay.io/repository/biocontainers/perl-io-compress-deflate/status
   :target: https://quay.io/repository/biocontainers/perl-io-compress-deflate
.. _`perl-io-compress-deflate/tags`: https://quay.io/repository/biocontainers/perl-io-compress-deflate?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-compress-deflate";
        var versions = ["2.064","2.064","2.064"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-compress-deflate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-compress-deflate/README.html