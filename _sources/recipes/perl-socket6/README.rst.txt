:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-socket6'
.. highlight: bash

perl-socket6
============

.. conda:recipe:: perl-socket6
   :replaces_section_title:
   :noindex:

   IPv6 related part of the C socket.h defines and structure manipulators

   :homepage: http://metacpan.org/pod/Socket6
   :license: unknown
   :recipe: /`perl-socket6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket6/meta.yaml>`_

   


.. conda:package:: perl-socket6

   |downloads_perl-socket6| |docker_perl-socket6|

   :versions:
      
      

      ``0.29-6``,  ``0.29-5``,  ``0.29-4``,  ``0.29-3``,  ``0.29-2``,  ``0.29-1``,  ``0.29-0``,  ``0.25-1``,  ``0.25-0``

      

   
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

    pixi global install perl-socket6

to add into an existing workspace instead, run::

    pixi add perl-socket6

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-socket6

Alternatively, to install into a new environment, run::

    conda create -n envname perl-socket6

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-socket6:<tag>

(see `perl-socket6/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-socket6| image:: https://img.shields.io/conda/dn/bioconda/perl-socket6.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-socket6
   :alt:   (downloads)
.. |docker_perl-socket6| image:: https://quay.io/repository/biocontainers/perl-socket6/status
   :target: https://quay.io/repository/biocontainers/perl-socket6
.. _`perl-socket6/tags`: https://quay.io/repository/biocontainers/perl-socket6?tab=tags


.. raw:: html

    <script>
        var package = "perl-socket6";
        var versions = ["0.29","0.29","0.29","0.29","0.29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-socket6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-socket6/README.html