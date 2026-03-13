:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-derivative'
.. highlight: bash

perl-math-derivative
====================

.. conda:recipe:: perl-math-derivative
   :replaces_section_title:
   :noindex:

   Numeric 1st and 2nd order differentiation.

   :homepage: http://metacpan.org/pod/Math-Derivative
   :license: perl_5
   :recipe: /`perl-math-derivative <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative/meta.yaml>`_

   


.. conda:package:: perl-math-derivative

   |downloads_perl-math-derivative| |docker_perl-math-derivative|

   :versions:
      
      

      ``1.01-1``,  ``1.01-0``,  ``0.04-1``,  ``0.04-0``

      

   
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

    pixi global install perl-math-derivative

to add into an existing workspace instead, run::

    pixi add perl-math-derivative

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-math-derivative

Alternatively, to install into a new environment, run::

    conda create -n envname perl-math-derivative

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-math-derivative:<tag>

(see `perl-math-derivative/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-math-derivative| image:: https://img.shields.io/conda/dn/bioconda/perl-math-derivative.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-derivative
   :alt:   (downloads)
.. |docker_perl-math-derivative| image:: https://quay.io/repository/biocontainers/perl-math-derivative/status
   :target: https://quay.io/repository/biocontainers/perl-math-derivative
.. _`perl-math-derivative/tags`: https://quay.io/repository/biocontainers/perl-math-derivative?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-derivative";
        var versions = ["1.01","1.01","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-derivative/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-derivative/README.html