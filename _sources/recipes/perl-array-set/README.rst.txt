:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-set'
.. highlight: bash

perl-array-set
==============

.. conda:recipe:: perl-array-set
   :replaces_section_title:
   :noindex:

   Perform set operations on arrays

   :homepage: https://metacpan.org/release/Array-Set
   :license: perl_5
   :recipe: /`perl-array-set <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-set/meta.yaml>`_

   


.. conda:package:: perl-array-set

   |downloads_perl-array-set| |docker_perl-array-set|

   :versions:
      
      

      ``0.063-0``,  ``0.05-1``,  ``0.05-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-exporter: ``>=5.57``
   :depends on perl-storable: ``>=3.08``
   :depends on perl-tie-ixhash: 

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

    pixi global install perl-array-set

to add into an existing workspace instead, run::

    pixi add perl-array-set

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-array-set

Alternatively, to install into a new environment, run::

    conda create -n envname perl-array-set

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-array-set:<tag>

(see `perl-array-set/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-array-set| image:: https://img.shields.io/conda/dn/bioconda/perl-array-set.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-set
   :alt:   (downloads)
.. |docker_perl-array-set| image:: https://quay.io/repository/biocontainers/perl-array-set/status
   :target: https://quay.io/repository/biocontainers/perl-array-set
.. _`perl-array-set/tags`: https://quay.io/repository/biocontainers/perl-array-set?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-set";
        var versions = ["0.063","0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-set/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-set/README.html