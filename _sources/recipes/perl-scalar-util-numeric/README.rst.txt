:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-scalar-util-numeric'
.. highlight: bash

perl-scalar-util-numeric
========================

.. conda:recipe:: perl-scalar-util-numeric
   :replaces_section_title:
   :noindex:

   numeric tests for perl scalars

   :homepage: http://metacpan.org/pod/Scalar-Util-Numeric
   :license: perl_5
   :recipe: /`perl-scalar-util-numeric <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-scalar-util-numeric/meta.yaml>`_

   


.. conda:package:: perl-scalar-util-numeric

   |downloads_perl-scalar-util-numeric| |docker_perl-scalar-util-numeric|

   :versions:
      
      

      ``0.40-7``,  ``0.40-6``,  ``0.40-5``,  ``0.40-4``,  ``0.40-3``,  ``0.40-2``,  ``0.40-1``,  ``0.40-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-scalar-util-numeric

to add into an existing workspace instead, run::

    pixi add perl-scalar-util-numeric

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-scalar-util-numeric

Alternatively, to install into a new environment, run::

    conda create -n envname perl-scalar-util-numeric

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-scalar-util-numeric:<tag>

(see `perl-scalar-util-numeric/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-scalar-util-numeric| image:: https://img.shields.io/conda/dn/bioconda/perl-scalar-util-numeric.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-scalar-util-numeric
   :alt:   (downloads)
.. |docker_perl-scalar-util-numeric| image:: https://quay.io/repository/biocontainers/perl-scalar-util-numeric/status
   :target: https://quay.io/repository/biocontainers/perl-scalar-util-numeric
.. _`perl-scalar-util-numeric/tags`: https://quay.io/repository/biocontainers/perl-scalar-util-numeric?tab=tags


.. raw:: html

    <script>
        var package = "perl-scalar-util-numeric";
        var versions = ["0.40","0.40","0.40","0.40","0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-scalar-util-numeric/README.html