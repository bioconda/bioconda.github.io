:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-zip'
.. highlight: bash

perl-archive-zip
================

.. conda:recipe:: perl-archive-zip
   :replaces_section_title:
   :noindex:

   Provide an interface to ZIP archive files.

   :homepage: http://metacpan.org/pod/Archive::Zip
   :license: perl_5
   :recipe: /`perl-archive-zip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-zip/meta.yaml>`_

   


.. conda:package:: perl-archive-zip

   |downloads_perl-archive-zip| |docker_perl-archive-zip|

   :versions:
      
      

      ``1.68-0``,  ``1.64-1``,  ``1.64-0``,  ``1.60-0``,  ``1.55-4``,  ``1.55-3``,  ``1.55-2``,  ``1.55-1``,  ``1.55-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-compress-raw-zlib: 
   :depends on perl-file-path: 
   :depends on perl-file-temp: 
   :depends on perl-time-local: 

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

    pixi global install perl-archive-zip

to add into an existing workspace instead, run::

    pixi add perl-archive-zip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-archive-zip

Alternatively, to install into a new environment, run::

    conda create -n envname perl-archive-zip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-archive-zip:<tag>

(see `perl-archive-zip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-archive-zip| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-zip.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-zip
   :alt:   (downloads)
.. |docker_perl-archive-zip| image:: https://quay.io/repository/biocontainers/perl-archive-zip/status
   :target: https://quay.io/repository/biocontainers/perl-archive-zip
.. _`perl-archive-zip/tags`: https://quay.io/repository/biocontainers/perl-archive-zip?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-zip";
        var versions = ["1.68","1.64","1.64","1.60","1.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-zip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-zip/README.html