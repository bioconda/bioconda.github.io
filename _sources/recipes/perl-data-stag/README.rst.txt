:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-stag'
.. highlight: bash

perl-data-stag
==============

.. conda:recipe:: perl-data-stag
   :replaces_section_title:
   :noindex:

   Structured Tags

   :homepage: http://metacpan.org/pod/Data-Stag
   :license: unknown
   :recipe: /`perl-data-stag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-stag/meta.yaml>`_

   


.. conda:package:: perl-data-stag

   |downloads_perl-data-stag| |docker_perl-data-stag|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-graph: 
   :depends on perl-io-string: 
   :depends on perl-json: 
   :depends on perl-libxml-perl: 
   :depends on perl-mldbm: 
   :depends on perl-xml-libxml: 
   :depends on perl-xml-libxslt: 

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

    pixi global install perl-data-stag

to add into an existing workspace instead, run::

    pixi add perl-data-stag

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-data-stag

Alternatively, to install into a new environment, run::

    conda create -n envname perl-data-stag

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-data-stag:<tag>

(see `perl-data-stag/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-data-stag| image:: https://img.shields.io/conda/dn/bioconda/perl-data-stag.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-stag
   :alt:   (downloads)
.. |docker_perl-data-stag| image:: https://quay.io/repository/biocontainers/perl-data-stag/status
   :target: https://quay.io/repository/biocontainers/perl-data-stag
.. _`perl-data-stag/tags`: https://quay.io/repository/biocontainers/perl-data-stag?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-stag";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-stag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-stag/README.html