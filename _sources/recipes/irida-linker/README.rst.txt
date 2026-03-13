:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irida-linker'
.. highlight: bash

irida-linker
============

.. conda:recipe:: irida-linker
   :replaces_section_title:
   :noindex:

   The NGS Archive Linker is a Perl script used to generate a structure of links for files stored in the IRIDA platform.

   :homepage: https://github.com/phac-nml/irida-linker
   :license: Apache / Apache-2.0
   :recipe: /`irida-linker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irida-linker/meta.yaml>`_

   


.. conda:package:: irida-linker

   |downloads_irida-linker| |docker_irida-linker|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on perl: ``>=5.22``
   :depends on perl-config-simple: 
   :depends on perl-file-path: 
   :depends on perl-getopt-long: 
   :depends on perl-http-message: 
   :depends on perl-json: 
   :depends on perl-libwww-perl: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-lwp-simple: 
   :depends on perl-termreadkey: 

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

    pixi global install irida-linker

to add into an existing workspace instead, run::

    pixi add irida-linker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irida-linker

Alternatively, to install into a new environment, run::

    conda create -n envname irida-linker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irida-linker:<tag>

(see `irida-linker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irida-linker| image:: https://img.shields.io/conda/dn/bioconda/irida-linker.svg?style=flat
   :target: https://anaconda.org/bioconda/irida-linker
   :alt:   (downloads)
.. |docker_irida-linker| image:: https://quay.io/repository/biocontainers/irida-linker/status
   :target: https://quay.io/repository/biocontainers/irida-linker
.. _`irida-linker/tags`: https://quay.io/repository/biocontainers/irida-linker?tab=tags


.. raw:: html

    <script>
        var package = "irida-linker";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irida-linker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irida-linker/README.html