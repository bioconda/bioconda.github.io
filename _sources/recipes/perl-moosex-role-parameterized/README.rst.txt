:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-role-parameterized'
.. highlight: bash

perl-moosex-role-parameterized
==============================

.. conda:recipe:: perl-moosex-role-parameterized
   :replaces_section_title:
   :noindex:

   Moose roles with composition parameters

   :homepage: https://github.com/moose/MooseX-Role-Parameterized
   :license: perl_5
   :recipe: /`perl-moosex-role-parameterized <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-parameterized>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-parameterized/meta.yaml>`_

   


.. conda:package:: perl-moosex-role-parameterized

   |downloads_perl-moosex-role-parameterized| |docker_perl-moosex-role-parameterized|

   :versions:
      
      

      ``1.11-0``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-module-runtime: 
   :depends on perl-moose: ``>=2.0300``
   :depends on perl-namespace-autoclean: 
   :depends on perl-namespace-clean: 

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

    pixi global install perl-moosex-role-parameterized

to add into an existing workspace instead, run::

    pixi add perl-moosex-role-parameterized

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-role-parameterized

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-role-parameterized

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-role-parameterized:<tag>

(see `perl-moosex-role-parameterized/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-role-parameterized| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-role-parameterized.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-role-parameterized
   :alt:   (downloads)
.. |docker_perl-moosex-role-parameterized| image:: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized
.. _`perl-moosex-role-parameterized/tags`: https://quay.io/repository/biocontainers/perl-moosex-role-parameterized?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-role-parameterized";
        var versions = ["1.11","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-role-parameterized/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-role-parameterized/README.html