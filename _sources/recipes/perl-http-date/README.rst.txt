:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-date'
.. highlight: bash

perl-http-date
==============

.. conda:recipe:: perl-http-date
   :replaces_section_title:
   :noindex:

   date conversion routines

   :homepage: http://metacpan.org/pod/HTTP::Date
   :license: perl_5
   :recipe: /`perl-http-date <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-date/meta.yaml>`_

   


.. conda:package:: perl-http-date

   |downloads_perl-http-date| |docker_perl-http-date|

   :versions:
      
      

      ``6.06-0``,  ``6.05-0``,  ``6.02-4``,  ``6.02-3``,  ``6.02-2``,  ``6.02-1``,  ``6.02-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-exporter: 
   :depends on perl-time-local: ``>=1.28``
   :depends on perl-timedate: 

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

    pixi global install perl-http-date

to add into an existing workspace instead, run::

    pixi add perl-http-date

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-http-date

Alternatively, to install into a new environment, run::

    conda create -n envname perl-http-date

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-http-date:<tag>

(see `perl-http-date/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-http-date| image:: https://img.shields.io/conda/dn/bioconda/perl-http-date.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-date
   :alt:   (downloads)
.. |docker_perl-http-date| image:: https://quay.io/repository/biocontainers/perl-http-date/status
   :target: https://quay.io/repository/biocontainers/perl-http-date
.. _`perl-http-date/tags`: https://quay.io/repository/biocontainers/perl-http-date?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-date";
        var versions = ["6.06","6.05","6.02","6.02","6.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-date/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-date/README.html