:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'satrap'
.. highlight: bash

satrap
======

.. conda:recipe:: satrap
   :replaces_section_title:
   :noindex:

   A SOLiD assembly translation program.

   :homepage: http://satrap.cribi.unipd.it/cgi-bin/satrap.pl
   :license: file
   :recipe: /`satrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/satrap/meta.yaml>`_
   :links: biotools: :biotools:`satrap`, doi: :doi:`10.1371/journal.pone.0137436`

   


.. conda:package:: satrap

   |downloads_satrap| |docker_satrap|

   :versions:
      
      

      ``0.2-7``,  ``0.2-6``,  ``0.2-5``,  ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install satrap

to add into an existing workspace instead, run::

    pixi add satrap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install satrap

Alternatively, to install into a new environment, run::

    conda create -n envname satrap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/satrap:<tag>

(see `satrap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_satrap| image:: https://img.shields.io/conda/dn/bioconda/satrap.svg?style=flat
   :target: https://anaconda.org/bioconda/satrap
   :alt:   (downloads)
.. |docker_satrap| image:: https://quay.io/repository/biocontainers/satrap/status
   :target: https://quay.io/repository/biocontainers/satrap
.. _`satrap/tags`: https://quay.io/repository/biocontainers/satrap?tab=tags


.. raw:: html

    <script>
        var package = "satrap";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/satrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/satrap/README.html