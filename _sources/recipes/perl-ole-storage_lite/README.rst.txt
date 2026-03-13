:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ole-storage_lite'
.. highlight: bash

perl-ole-storage_lite
=====================

.. conda:recipe:: perl-ole-storage_lite
   :replaces_section_title:
   :noindex:

   Read and write OLE storage files.

   :homepage: http://metacpan.org/pod/OLE-Storage_Lite
   :license: unknown
   :recipe: /`perl-ole-storage_lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ole-storage_lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ole-storage_lite/meta.yaml>`_

   


.. conda:package:: perl-ole-storage_lite

   |downloads_perl-ole-storage_lite| |docker_perl-ole-storage_lite|

   :versions:
      
      

      ``0.24-0``,  ``0.22-0``,  ``0.20-1``,  ``0.20-0``,  ``0.19-3``,  ``0.19-2``,  ``0.19-1``,  ``0.19-0``

      

   
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

    pixi global install perl-ole-storage_lite

to add into an existing workspace instead, run::

    pixi add perl-ole-storage_lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ole-storage_lite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ole-storage_lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ole-storage_lite:<tag>

(see `perl-ole-storage_lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ole-storage_lite| image:: https://img.shields.io/conda/dn/bioconda/perl-ole-storage_lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ole-storage_lite
   :alt:   (downloads)
.. |docker_perl-ole-storage_lite| image:: https://quay.io/repository/biocontainers/perl-ole-storage_lite/status
   :target: https://quay.io/repository/biocontainers/perl-ole-storage_lite
.. _`perl-ole-storage_lite/tags`: https://quay.io/repository/biocontainers/perl-ole-storage_lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-ole-storage_lite";
        var versions = ["0.24","0.22","0.20","0.20","0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ole-storage_lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ole-storage_lite/README.html