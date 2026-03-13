:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-spreadsheet-parseexcel'
.. highlight: bash

perl-spreadsheet-parseexcel
===========================

.. conda:recipe:: perl-spreadsheet-parseexcel
   :replaces_section_title:
   :noindex:

   Read information from an Excel file.

   :homepage: http://github.com/runrig/spreadsheet-parseexcel/
   :license: perl_5
   :recipe: /`perl-spreadsheet-parseexcel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-spreadsheet-parseexcel/meta.yaml>`_

   


.. conda:package:: perl-spreadsheet-parseexcel

   |downloads_perl-spreadsheet-parseexcel| |docker_perl-spreadsheet-parseexcel|

   :versions:
      
      

      ``0.66-0``,  ``0.65-3``,  ``0.65-2``,  ``0.65-1``,  ``0.65-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-crypt-rc4: 
   :depends on perl-digest-perl-md5: 
   :depends on perl-io-scalar: 
   :depends on perl-jcode: 
   :depends on perl-ole-storage_lite: 
   :depends on perl-spreadsheet-writeexcel: 
   :depends on perl-unicode-map: 

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

    pixi global install perl-spreadsheet-parseexcel

to add into an existing workspace instead, run::

    pixi add perl-spreadsheet-parseexcel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-spreadsheet-parseexcel

Alternatively, to install into a new environment, run::

    conda create -n envname perl-spreadsheet-parseexcel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-spreadsheet-parseexcel:<tag>

(see `perl-spreadsheet-parseexcel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-spreadsheet-parseexcel| image:: https://img.shields.io/conda/dn/bioconda/perl-spreadsheet-parseexcel.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-spreadsheet-parseexcel
   :alt:   (downloads)
.. |docker_perl-spreadsheet-parseexcel| image:: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel/status
   :target: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel
.. _`perl-spreadsheet-parseexcel/tags`: https://quay.io/repository/biocontainers/perl-spreadsheet-parseexcel?tab=tags


.. raw:: html

    <script>
        var package = "perl-spreadsheet-parseexcel";
        var versions = ["0.66","0.65","0.65","0.65","0.65"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-spreadsheet-parseexcel/README.html