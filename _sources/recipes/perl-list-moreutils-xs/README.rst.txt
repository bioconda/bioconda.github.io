:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-moreutils-xs'
.. highlight: bash

perl-list-moreutils-xs
======================

.. conda:recipe:: perl-list-moreutils-xs
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util in XS

   :homepage: https://metacpan.org/release/List-MoreUtils-XS
   :license: apache_2_0
   :recipe: /`perl-list-moreutils-xs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-moreutils-xs/meta.yaml>`_

   


.. conda:package:: perl-list-moreutils-xs

   |downloads_perl-list-moreutils-xs| |docker_perl-list-moreutils-xs|

   :versions:
      
      

      ``0.430-5``,  ``0.430-4``,  ``0.430-3``,  ``0.430-2``,  ``0.430-1``,  ``0.430-0``,  ``0.428-2``,  ``0.428-0``

      

   
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

    pixi global install perl-list-moreutils-xs

to add into an existing workspace instead, run::

    pixi add perl-list-moreutils-xs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-list-moreutils-xs

Alternatively, to install into a new environment, run::

    conda create -n envname perl-list-moreutils-xs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-list-moreutils-xs:<tag>

(see `perl-list-moreutils-xs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-list-moreutils-xs| image:: https://img.shields.io/conda/dn/bioconda/perl-list-moreutils-xs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-moreutils-xs
   :alt:   (downloads)
.. |docker_perl-list-moreutils-xs| image:: https://quay.io/repository/biocontainers/perl-list-moreutils-xs/status
   :target: https://quay.io/repository/biocontainers/perl-list-moreutils-xs
.. _`perl-list-moreutils-xs/tags`: https://quay.io/repository/biocontainers/perl-list-moreutils-xs?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-moreutils-xs";
        var versions = ["0.430","0.430","0.430","0.430","0.430"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-moreutils-xs/README.html