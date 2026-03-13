:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-random'
.. highlight: bash

perl-math-random
================

.. conda:recipe:: perl-math-random
   :replaces_section_title:
   :noindex:

   Random Number Generators

   :homepage: http://metacpan.org/pod/Math-Random
   :license: unknown
   :recipe: /`perl-math-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random/meta.yaml>`_

   


.. conda:package:: perl-math-random

   |downloads_perl-math-random| |docker_perl-math-random|

   :versions:
      
      

      ``0.72-8``,  ``0.72-7``,  ``0.72-6``,  ``0.72-5``,  ``0.72-4``,  ``0.72-3``,  ``0.72-2``,  ``0.72-1``,  ``0.72-0``

      

   
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

    pixi global install perl-math-random

to add into an existing workspace instead, run::

    pixi add perl-math-random

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-math-random

Alternatively, to install into a new environment, run::

    conda create -n envname perl-math-random

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-math-random:<tag>

(see `perl-math-random/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-math-random| image:: https://img.shields.io/conda/dn/bioconda/perl-math-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-random
   :alt:   (downloads)
.. |docker_perl-math-random| image:: https://quay.io/repository/biocontainers/perl-math-random/status
   :target: https://quay.io/repository/biocontainers/perl-math-random
.. _`perl-math-random/tags`: https://quay.io/repository/biocontainers/perl-math-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-random";
        var versions = ["0.72","0.72","0.72","0.72","0.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-random/README.html