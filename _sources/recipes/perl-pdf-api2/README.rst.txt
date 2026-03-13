:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pdf-api2'
.. highlight: bash

perl-pdf-api2
=============

.. conda:recipe:: perl-pdf-api2
   :replaces_section_title:
   :noindex:

   Facilitates the creation and modification of PDF files

   :homepage: http://metacpan.org/pod/PDF::API2
   :license: lgpl_2_1
   :recipe: /`perl-pdf-api2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-api2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pdf-api2/meta.yaml>`_

   


.. conda:package:: perl-pdf-api2

   |downloads_perl-pdf-api2| |docker_perl-pdf-api2|

   :versions:
      
      

      ``2.043-0``,  ``2.035-1``,  ``2.035-0``,  ``2.034-0``,  ``2.033-0``,  ``2.025-3``,  ``2.025-2``,  ``2.025-1``,  ``2.025-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-font-ttf: 

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

    pixi global install perl-pdf-api2

to add into an existing workspace instead, run::

    pixi add perl-pdf-api2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pdf-api2

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pdf-api2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pdf-api2:<tag>

(see `perl-pdf-api2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pdf-api2| image:: https://img.shields.io/conda/dn/bioconda/perl-pdf-api2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pdf-api2
   :alt:   (downloads)
.. |docker_perl-pdf-api2| image:: https://quay.io/repository/biocontainers/perl-pdf-api2/status
   :target: https://quay.io/repository/biocontainers/perl-pdf-api2
.. _`perl-pdf-api2/tags`: https://quay.io/repository/biocontainers/perl-pdf-api2?tab=tags


.. raw:: html

    <script>
        var package = "perl-pdf-api2";
        var versions = ["2.043","2.035","2.035","2.034","2.033"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pdf-api2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pdf-api2/README.html