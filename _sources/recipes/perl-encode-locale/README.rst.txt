:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-encode-locale'
.. highlight: bash

perl-encode-locale
==================

.. conda:recipe:: perl-encode-locale
   :replaces_section_title:
   :noindex:

   Determine the locale encoding

   :homepage: http://metacpan.org/pod/Encode::Locale
   :license: perl_5
   :recipe: /`perl-encode-locale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-encode-locale/meta.yaml>`_

   


.. conda:package:: perl-encode-locale

   |downloads_perl-encode-locale| |docker_perl-encode-locale|

   :versions:
      
      

      ``1.05-7``,  ``1.05-6``,  ``1.05-5``,  ``1.05-4``,  ``1.05-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-encode: 

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

    pixi global install perl-encode-locale

to add into an existing workspace instead, run::

    pixi add perl-encode-locale

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-encode-locale

Alternatively, to install into a new environment, run::

    conda create -n envname perl-encode-locale

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-encode-locale:<tag>

(see `perl-encode-locale/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-encode-locale| image:: https://img.shields.io/conda/dn/bioconda/perl-encode-locale.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-encode-locale
   :alt:   (downloads)
.. |docker_perl-encode-locale| image:: https://quay.io/repository/biocontainers/perl-encode-locale/status
   :target: https://quay.io/repository/biocontainers/perl-encode-locale
.. _`perl-encode-locale/tags`: https://quay.io/repository/biocontainers/perl-encode-locale?tab=tags


.. raw:: html

    <script>
        var package = "perl-encode-locale";
        var versions = ["1.05","1.05","1.05","1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-encode-locale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-encode-locale/README.html