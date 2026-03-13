:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-set-object'
.. highlight: bash

perl-set-object
===============

.. conda:recipe:: perl-set-object
   :replaces_section_title:
   :noindex:

   Unordered collections \(sets\) of Perl Objects

   :homepage: http://metacpan.org/pod/Set-Object
   :license: artistic_2
   :recipe: /`perl-set-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-object>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-set-object/meta.yaml>`_

   


.. conda:package:: perl-set-object

   |downloads_perl-set-object| |docker_perl-set-object|

   :versions:
      
      

      ``1.43-0``,  ``1.42-5``,  ``1.42-4``,  ``1.42-3``,  ``1.42-2``,  ``1.42-1``,  ``1.42-0``

      

   
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

    pixi global install perl-set-object

to add into an existing workspace instead, run::

    pixi add perl-set-object

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-set-object

Alternatively, to install into a new environment, run::

    conda create -n envname perl-set-object

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-set-object:<tag>

(see `perl-set-object/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-set-object| image:: https://img.shields.io/conda/dn/bioconda/perl-set-object.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-set-object
   :alt:   (downloads)
.. |docker_perl-set-object| image:: https://quay.io/repository/biocontainers/perl-set-object/status
   :target: https://quay.io/repository/biocontainers/perl-set-object
.. _`perl-set-object/tags`: https://quay.io/repository/biocontainers/perl-set-object?tab=tags


.. raw:: html

    <script>
        var package = "perl-set-object";
        var versions = ["1.43","1.42","1.42","1.42","1.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-set-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-set-object/README.html