:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkos'
.. highlight: bash

perl-devel-checkos
==================

.. conda:recipe:: perl-devel-checkos/1.81
   :replaces_section_title:
   :noindex:

   check what OS we\'re running on

   :homepage: http://metacpan.org/pod/Devel::CheckOS
   :license: unknown
   :recipe: /`perl-devel-checkos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos>`_/`1.81 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81/meta.yaml>`_

   


.. conda:package:: perl-devel-checkos

   |downloads_perl-devel-checkos| |docker_perl-devel-checkos|

   :versions:
      
      

      ``1.81-1``,  ``1.81-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-data-compare: 
   :depends on perl-file-find-rule: 
   :depends on perl-file-temp: 

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

    pixi global install perl-devel-checkos

to add into an existing workspace instead, run::

    pixi add perl-devel-checkos

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-devel-checkos

Alternatively, to install into a new environment, run::

    conda create -n envname perl-devel-checkos

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-devel-checkos:<tag>

(see `perl-devel-checkos/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-devel-checkos| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkos.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkos
   :alt:   (downloads)
.. |docker_perl-devel-checkos| image:: https://quay.io/repository/biocontainers/perl-devel-checkos/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkos
.. _`perl-devel-checkos/tags`: https://quay.io/repository/biocontainers/perl-devel-checkos?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checkos";
        var versions = ["1.81","1.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkos/README.html