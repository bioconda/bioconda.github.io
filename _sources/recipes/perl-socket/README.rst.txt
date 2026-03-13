:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-socket'
.. highlight: bash

perl-socket
===========

.. conda:recipe:: perl-socket/2.027
   :replaces_section_title:
   :noindex:

   networking constants and support functions

   :homepage: http://metacpan.org/pod/Socket
   :license: perl_5
   :recipe: /`perl-socket <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket>`_/`2.027 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket/2.027/meta.yaml>`_

   


.. conda:package:: perl-socket

   |downloads_perl-socket| |docker_perl-socket|

   :versions:
      
      

      ``2.027-6``,  ``2.027-5``,  ``2.027-4``,  ``2.027-3``,  ``2.027-2``,  ``2.027-1``,  ``2.027-0``

      

   
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install perl-socket

to add into an existing workspace instead, run::

    pixi add perl-socket

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-socket

Alternatively, to install into a new environment, run::

    conda create -n envname perl-socket

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-socket:<tag>

(see `perl-socket/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-socket| image:: https://img.shields.io/conda/dn/bioconda/perl-socket.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-socket
   :alt:   (downloads)
.. |docker_perl-socket| image:: https://quay.io/repository/biocontainers/perl-socket/status
   :target: https://quay.io/repository/biocontainers/perl-socket
.. _`perl-socket/tags`: https://quay.io/repository/biocontainers/perl-socket?tab=tags


.. raw:: html

    <script>
        var package = "perl-socket";
        var versions = ["2.027","2.027","2.027","2.027","2.027"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-socket/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-socket/README.html