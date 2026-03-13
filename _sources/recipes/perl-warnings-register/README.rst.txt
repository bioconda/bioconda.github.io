:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-warnings-register'
.. highlight: bash

perl-warnings-register
======================

.. conda:recipe:: perl-warnings-register/1.03
   :replaces_section_title:
   :noindex:

   warnings import function

   :homepage: http://metacpan.org/pod/warnings::register
   :license: perl_5
   :recipe: /`perl-warnings-register <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register/1.03/meta.yaml>`_

   


.. conda:package:: perl-warnings-register

   |downloads_perl-warnings-register| |docker_perl-warnings-register|

   :versions:
      
      

      ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
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

    pixi global install perl-warnings-register

to add into an existing workspace instead, run::

    pixi add perl-warnings-register

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-warnings-register

Alternatively, to install into a new environment, run::

    conda create -n envname perl-warnings-register

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-warnings-register:<tag>

(see `perl-warnings-register/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-warnings-register| image:: https://img.shields.io/conda/dn/bioconda/perl-warnings-register.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-warnings-register
   :alt:   (downloads)
.. |docker_perl-warnings-register| image:: https://quay.io/repository/biocontainers/perl-warnings-register/status
   :target: https://quay.io/repository/biocontainers/perl-warnings-register
.. _`perl-warnings-register/tags`: https://quay.io/repository/biocontainers/perl-warnings-register?tab=tags


.. raw:: html

    <script>
        var package = "perl-warnings-register";
        var versions = ["1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-warnings-register/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-warnings-register/README.html