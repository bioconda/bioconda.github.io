:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-share'
.. highlight: bash

perl-file-share
===============

.. conda:recipe:: perl-file-share/0.25
   :replaces_section_title:
   :noindex:

   Extend File\:\:ShareDir to Local Libraries

   :homepage: https://github.com/ingydotnet/file-share-pm
   :license: perl_5
   :recipe: /`perl-file-share <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share>`_/`0.25 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-share/0.25/meta.yaml>`_

   


.. conda:package:: perl-file-share

   |downloads_perl-file-share| |docker_perl-file-share|

   :versions:
      
      

      ``0.25-3``,  ``0.25-2``,  ``0.25-1``,  ``0.25-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-file-sharedir: 

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

    pixi global install perl-file-share

to add into an existing workspace instead, run::

    pixi add perl-file-share

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-share

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-share

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-share:<tag>

(see `perl-file-share/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-share| image:: https://img.shields.io/conda/dn/bioconda/perl-file-share.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-share
   :alt:   (downloads)
.. |docker_perl-file-share| image:: https://quay.io/repository/biocontainers/perl-file-share/status
   :target: https://quay.io/repository/biocontainers/perl-file-share
.. _`perl-file-share/tags`: https://quay.io/repository/biocontainers/perl-file-share?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-share";
        var versions = ["0.25","0.25","0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-share/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-share/README.html