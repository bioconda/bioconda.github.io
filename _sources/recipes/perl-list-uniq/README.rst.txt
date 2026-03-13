:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-uniq'
.. highlight: bash

perl-list-uniq
==============

.. conda:recipe:: perl-list-uniq
   :replaces_section_title:
   :noindex:

   extract the unique elements of a list

   :homepage: http://metacpan.org/pod/List::Uniq
   :license: perl_5
   :recipe: /`perl-list-uniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-uniq/meta.yaml>`_

   


.. conda:package:: perl-list-uniq

   |downloads_perl-list-uniq| |docker_perl-list-uniq|

   :versions:
      
      

      ``0.23-0``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``

      

   
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

    pixi global install perl-list-uniq

to add into an existing workspace instead, run::

    pixi add perl-list-uniq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-list-uniq

Alternatively, to install into a new environment, run::

    conda create -n envname perl-list-uniq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-list-uniq:<tag>

(see `perl-list-uniq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-list-uniq| image:: https://img.shields.io/conda/dn/bioconda/perl-list-uniq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-uniq
   :alt:   (downloads)
.. |docker_perl-list-uniq| image:: https://quay.io/repository/biocontainers/perl-list-uniq/status
   :target: https://quay.io/repository/biocontainers/perl-list-uniq
.. _`perl-list-uniq/tags`: https://quay.io/repository/biocontainers/perl-list-uniq?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-uniq";
        var versions = ["0.23","0.20","0.20","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-uniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-uniq/README.html