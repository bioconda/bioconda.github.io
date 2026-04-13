:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-role-withoverloading'
.. highlight: bash

perl-moosex-role-withoverloading
================================

.. conda:recipe:: perl-moosex-role-withoverloading
   :replaces_section_title:
   :noindex:

   \(DEPRECATED\) Roles which support overloading

   :homepage: https://github.com/moose/MooseX-Role-WithOverloading
   :license: perl_5
   :recipe: /`perl-moosex-role-withoverloading <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-role-withoverloading/meta.yaml>`_

   


.. conda:package:: perl-moosex-role-withoverloading

   |downloads_perl-moosex-role-withoverloading| |docker_perl-moosex-role-withoverloading|

   :versions:
      
      

      ``0.17-6``,  ``0.17-5``,  ``0.17-4``,  ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-aliased: 
   :depends on perl-class-load: ``0.25.*``
   :depends on perl-devel-globaldestruction: ``0.14.*``
   :depends on perl-devel-overloadinfo: ``0.007.*``
   :depends on perl-eval-closure: ``0.14.*``
   :depends on perl-moose: ``2.2207.*``
   :depends on perl-mro-compat: ``0.15.*``
   :depends on perl-namespace-autoclean: ``>=0.31,<0.32.0a0``
   :depends on perl-namespace-clean: ``0.27.*``
   :depends on perl-package-deprecationmanager: ``0.18.*``

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

    pixi global install perl-moosex-role-withoverloading

to add into an existing workspace instead, run::

    pixi add perl-moosex-role-withoverloading

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-moosex-role-withoverloading

Alternatively, to install into a new environment, run::

    conda create -n envname perl-moosex-role-withoverloading

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-moosex-role-withoverloading:<tag>

(see `perl-moosex-role-withoverloading/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-moosex-role-withoverloading| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-role-withoverloading.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-role-withoverloading
   :alt:   (downloads)
.. |docker_perl-moosex-role-withoverloading| image:: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading
.. _`perl-moosex-role-withoverloading/tags`: https://quay.io/repository/biocontainers/perl-moosex-role-withoverloading?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-role-withoverloading";
        var versions = ["0.17","0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-role-withoverloading/README.html