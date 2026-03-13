:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-util-properties'
.. highlight: bash

perl-util-properties
====================

.. conda:recipe:: perl-util-properties
   :replaces_section_title:
   :noindex:

   Java.util.properties like class

   :homepage: http://metacpan.org/pod/Util::Properties
   :license: open_source
   :recipe: /`perl-util-properties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties/meta.yaml>`_

   


.. conda:package:: perl-util-properties

   |downloads_perl-util-properties| |docker_perl-util-properties|

   :versions:
      
      

      ``0.18-1``,  ``0.18-0``

      

   
   :depends on perl-digest-md5-file: 
   :depends on perl-io-all: 
   :depends on perl-lockfile-simple: 
   :depends on perl-object-insideout: 

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

    pixi global install perl-util-properties

to add into an existing workspace instead, run::

    pixi add perl-util-properties

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-util-properties

Alternatively, to install into a new environment, run::

    conda create -n envname perl-util-properties

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-util-properties:<tag>

(see `perl-util-properties/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-util-properties| image:: https://img.shields.io/conda/dn/bioconda/perl-util-properties.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-util-properties
   :alt:   (downloads)
.. |docker_perl-util-properties| image:: https://quay.io/repository/biocontainers/perl-util-properties/status
   :target: https://quay.io/repository/biocontainers/perl-util-properties
.. _`perl-util-properties/tags`: https://quay.io/repository/biocontainers/perl-util-properties?tab=tags


.. raw:: html

    <script>
        var package = "perl-util-properties";
        var versions = ["0.18","0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-util-properties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-util-properties/README.html