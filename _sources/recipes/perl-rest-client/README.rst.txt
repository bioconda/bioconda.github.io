:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-rest-client'
.. highlight: bash

perl-rest-client
================

.. conda:recipe:: perl-rest-client
   :replaces_section_title:
   :noindex:

   A simple client for interacting with RESTful http\/https resources

   :homepage: http://metacpan.org/pod/REST::Client
   :license: perl_5
   :recipe: /`perl-rest-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client/meta.yaml>`_

   


.. conda:package:: perl-rest-client

   |downloads_perl-rest-client| |docker_perl-rest-client|

   :versions:
      
      

      ``281-0``,  ``273-1``,  ``273-0``

      

   
   :depends on perl-lwp-protocol-https: 
   :depends on perl-uri: 

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

    pixi global install perl-rest-client

to add into an existing workspace instead, run::

    pixi add perl-rest-client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-rest-client

Alternatively, to install into a new environment, run::

    conda create -n envname perl-rest-client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-rest-client:<tag>

(see `perl-rest-client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-rest-client| image:: https://img.shields.io/conda/dn/bioconda/perl-rest-client.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-rest-client
   :alt:   (downloads)
.. |docker_perl-rest-client| image:: https://quay.io/repository/biocontainers/perl-rest-client/status
   :target: https://quay.io/repository/biocontainers/perl-rest-client
.. _`perl-rest-client/tags`: https://quay.io/repository/biocontainers/perl-rest-client?tab=tags


.. raw:: html

    <script>
        var package = "perl-rest-client";
        var versions = ["281","273","273"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-rest-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-rest-client/README.html