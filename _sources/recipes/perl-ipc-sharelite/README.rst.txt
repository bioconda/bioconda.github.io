:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ipc-sharelite'
.. highlight: bash

perl-ipc-sharelite
==================

.. conda:recipe:: perl-ipc-sharelite
   :replaces_section_title:
   :noindex:

   Lightweight interface to shared memory

   :homepage: http://metacpan.org/pod/IPC::ShareLite
   :license: perl_5
   :recipe: /`perl-ipc-sharelite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ipc-sharelite/meta.yaml>`_

   


.. conda:package:: perl-ipc-sharelite

   |downloads_perl-ipc-sharelite| |docker_perl-ipc-sharelite|

   :versions:
      
      

      ``0.17-7``,  ``0.17-6``,  ``0.17-5``,  ``0.17-4``,  ``0.17-3``,  ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install perl-ipc-sharelite

to add into an existing workspace instead, run::

    pixi add perl-ipc-sharelite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-ipc-sharelite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-ipc-sharelite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-ipc-sharelite:<tag>

(see `perl-ipc-sharelite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-ipc-sharelite| image:: https://img.shields.io/conda/dn/bioconda/perl-ipc-sharelite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ipc-sharelite
   :alt:   (downloads)
.. |docker_perl-ipc-sharelite| image:: https://quay.io/repository/biocontainers/perl-ipc-sharelite/status
   :target: https://quay.io/repository/biocontainers/perl-ipc-sharelite
.. _`perl-ipc-sharelite/tags`: https://quay.io/repository/biocontainers/perl-ipc-sharelite?tab=tags


.. raw:: html

    <script>
        var package = "perl-ipc-sharelite";
        var versions = ["0.17","0.17","0.17","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ipc-sharelite/README.html