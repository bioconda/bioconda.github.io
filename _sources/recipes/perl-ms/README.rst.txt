:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ms'
.. highlight: bash

perl-ms
=======

.. conda:recipe:: perl-ms
   :replaces_section_title:
   :noindex:

   Namespace for mass spectrometry\-related libraries

   :homepage: http://metacpan.org/pod/MS
   :license: GPL-3.0-or-later
   :recipe: /`perl-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms/meta.yaml>`_

   


.. conda:package:: perl-ms

   |downloads_perl-ms| |docker_perl-ms|

   :versions:
      
      

      ``0.207003-0``,  ``0.207002-0``,  ``0.207001-0``,  ``0.206003-2``,  ``0.206003-1``,  ``0.206003-0``,  ``0.204003-0``,  ``0.204001-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-biox-seq: 
   :depends on perl-compress-bgzf: 
   :depends on perl-data-lock: 
   :depends on perl-file-sharedir: 
   :depends on perl-http-tiny: 
   :depends on perl-list-moreutils: 
   :depends on perl-module-pluggable: 
   :depends on perl-perlio-gzip: 
   :depends on perl-uri: 
   :depends on perl-xml-parser: 

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

    pixi global install perl-ms

to add into an existing workspace instead, run::

    pixi add perl-ms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ms

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ms:<tag>

(see `perl-ms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ms| image:: https://img.shields.io/conda/dn/bioconda/perl-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ms
   :alt:   (downloads)
.. |docker_perl-ms| image:: https://quay.io/repository/biocontainers/perl-ms/status
   :target: https://quay.io/repository/biocontainers/perl-ms
.. _`perl-ms/tags`: https://quay.io/repository/biocontainers/perl-ms?tab=tags


.. raw:: html

    <script>
        var package = "perl-ms";
        var versions = ["0.207003","0.207002","0.207001","0.206003","0.206003"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ms/README.html