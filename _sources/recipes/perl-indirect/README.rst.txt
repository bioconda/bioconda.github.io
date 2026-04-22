:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-indirect'
.. highlight: bash

perl-indirect
=============

.. conda:recipe:: perl-indirect
   :replaces_section_title:
   :noindex:

   Lexically warn about using the indirect method call syntax.

   :homepage: http://search.cpan.org/dist/indirect/
   :license: perl_5
   :recipe: /`perl-indirect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-indirect/meta.yaml>`_

   


.. conda:package:: perl-indirect

   |downloads_perl-indirect| |docker_perl-indirect|

   :versions:
      
      

      ``0.39-6``,  ``0.39-5``,  ``0.39-4``,  ``0.39-3``,  ``0.39-2``,  ``0.39-1``,  ``0.38-1``,  ``0.38-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-socket6: ``>=0.29,<0.30.0a0``

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

    pixi global install perl-indirect

to add into an existing workspace instead, run::

    pixi add perl-indirect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-indirect

Alternatively, to install into a new environment, run::

    conda create -n envname perl-indirect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-indirect:<tag>

(see `perl-indirect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-indirect| image:: https://img.shields.io/conda/dn/bioconda/perl-indirect.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-indirect
   :alt:   (downloads)
.. |docker_perl-indirect| image:: https://quay.io/repository/biocontainers/perl-indirect/status
   :target: https://quay.io/repository/biocontainers/perl-indirect
.. _`perl-indirect/tags`: https://quay.io/repository/biocontainers/perl-indirect?tab=tags


.. raw:: html

    <script>
        var package = "perl-indirect";
        var versions = ["0.39","0.39","0.39","0.39","0.39"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-indirect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-indirect/README.html