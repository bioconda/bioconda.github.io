:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gwama'
.. highlight: bash

gwama
=====

.. conda:recipe:: gwama
   :replaces_section_title:
   :noindex:

   Genome\-Wide Association Meta Analysis

   :homepage: https://www.geenivaramu.ee/en/tools/gwama
   :license: BSD-3-clause
   :recipe: /`gwama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gwama/meta.yaml>`_
   :links: biotools: :biotools:`GWAMA`, doi: :doi:`10.1186/1471-2105-11-288`

   


.. conda:package:: gwama

   |downloads_gwama| |docker_gwama|

   :versions:
      
      

      ``2.2.2-5``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install gwama

to add into an existing workspace instead, run::

    pixi add gwama

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gwama

Alternatively, to install into a new environment, run::

    conda create -n envname gwama

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gwama:<tag>

(see `gwama/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gwama| image:: https://img.shields.io/conda/dn/bioconda/gwama.svg?style=flat
   :target: https://anaconda.org/bioconda/gwama
   :alt:   (downloads)
.. |docker_gwama| image:: https://quay.io/repository/biocontainers/gwama/status
   :target: https://quay.io/repository/biocontainers/gwama
.. _`gwama/tags`: https://quay.io/repository/biocontainers/gwama?tab=tags


.. raw:: html

    <script>
        var package = "gwama";
        var versions = ["2.2.2","2.2.2","2.2.2","2.2.2","2.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gwama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gwama/README.html