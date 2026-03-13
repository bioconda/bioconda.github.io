:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sort-mergesort'
.. highlight: bash

perl-sort-mergesort
===================

.. conda:recipe:: perl-sort-mergesort
   :replaces_section_title:
   :noindex:

   Merge sorted streams to create a new stream

   :homepage: http://metacpan.org/pod/Sort::MergeSort
   :license: Artistic-2.0
   :recipe: /`perl-sort-mergesort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sort-mergesort/meta.yaml>`_

   


.. conda:package:: perl-sort-mergesort

   |downloads_perl-sort-mergesort| |docker_perl-sort-mergesort|

   :versions:
      
      

      ``0.31-2``,  ``0.31-1``,  ``0.31-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-test-nowarnings: 

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

    pixi global install perl-sort-mergesort

to add into an existing workspace instead, run::

    pixi add perl-sort-mergesort

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sort-mergesort

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sort-mergesort

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sort-mergesort:<tag>

(see `perl-sort-mergesort/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sort-mergesort| image:: https://img.shields.io/conda/dn/bioconda/perl-sort-mergesort.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sort-mergesort
   :alt:   (downloads)
.. |docker_perl-sort-mergesort| image:: https://quay.io/repository/biocontainers/perl-sort-mergesort/status
   :target: https://quay.io/repository/biocontainers/perl-sort-mergesort
.. _`perl-sort-mergesort/tags`: https://quay.io/repository/biocontainers/perl-sort-mergesort?tab=tags


.. raw:: html

    <script>
        var package = "perl-sort-mergesort";
        var versions = ["0.31","0.31","0.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sort-mergesort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sort-mergesort/README.html