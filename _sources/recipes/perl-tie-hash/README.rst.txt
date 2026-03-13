:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-hash'
.. highlight: bash

perl-tie-hash
=============

.. conda:recipe:: perl-tie-hash/1.05
   :replaces_section_title:
   :noindex:

   

   :homepage: http://metacpan.org/pod/Tie::Hash
   :license: perl_5
   :recipe: /`perl-tie-hash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash>`_/`1.05 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash/1.05>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-hash/1.05/meta.yaml>`_

   


.. conda:package:: perl-tie-hash

   |downloads_perl-tie-hash| |docker_perl-tie-hash|

   :versions:
      
      

      ``1.05-2``,  ``1.05-1``,  ``1.05-0``

      

   
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

    pixi global install perl-tie-hash

to add into an existing workspace instead, run::

    pixi add perl-tie-hash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-tie-hash

Alternatively, to install into a new environment, run::

    conda create -n envname perl-tie-hash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-tie-hash:<tag>

(see `perl-tie-hash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-tie-hash| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-hash.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-hash
   :alt:   (downloads)
.. |docker_perl-tie-hash| image:: https://quay.io/repository/biocontainers/perl-tie-hash/status
   :target: https://quay.io/repository/biocontainers/perl-tie-hash
.. _`perl-tie-hash/tags`: https://quay.io/repository/biocontainers/perl-tie-hash?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-hash";
        var versions = ["1.05","1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-hash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-hash/README.html