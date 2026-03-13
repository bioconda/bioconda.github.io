:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-load-conditional'
.. highlight: bash

perl-module-load-conditional
============================

.. conda:recipe:: perl-module-load-conditional/0.68
   :replaces_section_title:
   :noindex:

   Looking up module information \/ loading at runtime

   :homepage: http://metacpan.org/pod/Module::Load::Conditional
   :license: perl_5
   :recipe: /`perl-module-load-conditional <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional>`_/`0.68 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.68>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-load-conditional/0.68/meta.yaml>`_

   


.. conda:package:: perl-module-load-conditional

   |downloads_perl-module-load-conditional| |docker_perl-module-load-conditional|

   :versions:
      
      

      ``0.68-3``,  ``0.68-2``,  ``0.68-1``,  ``0.68-0``,  ``0.62-1``,  ``0.62-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-locale-maketext-simple: 
   :depends on perl-module-corelist: 
   :depends on perl-module-load: 
   :depends on perl-module-metadata: ``>=1.000005``
   :depends on perl-params-check: 
   :depends on perl-version: 

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

    pixi global install perl-module-load-conditional

to add into an existing workspace instead, run::

    pixi add perl-module-load-conditional

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-module-load-conditional

Alternatively, to install into a new environment, run::

    conda create -n envname perl-module-load-conditional

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-module-load-conditional:<tag>

(see `perl-module-load-conditional/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-module-load-conditional| image:: https://img.shields.io/conda/dn/bioconda/perl-module-load-conditional.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-load-conditional
   :alt:   (downloads)
.. |docker_perl-module-load-conditional| image:: https://quay.io/repository/biocontainers/perl-module-load-conditional/status
   :target: https://quay.io/repository/biocontainers/perl-module-load-conditional
.. _`perl-module-load-conditional/tags`: https://quay.io/repository/biocontainers/perl-module-load-conditional?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-load-conditional";
        var versions = ["0.68","0.68","0.68","0.68","0.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-load-conditional/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-load-conditional/README.html