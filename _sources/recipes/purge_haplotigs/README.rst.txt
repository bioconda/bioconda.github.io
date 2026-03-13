:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_haplotigs'
.. highlight: bash

purge_haplotigs
===============

.. conda:recipe:: purge_haplotigs
   :replaces_section_title:
   :noindex:

   Pipeline to help with curating heterozygous diploid genome assemblies.

   :homepage: https://bitbucket.org/mroachawri/purge_haplotigs/
   :license: MIT / MIT
   :recipe: /`purge_haplotigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_haplotigs/meta.yaml>`_

   


.. conda:package:: purge_haplotigs

   |downloads_purge_haplotigs| |docker_purge_haplotigs|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on bedtools: ``>=2.25.0``
   :depends on make: ``>=4.2.1``
   :depends on minimap2: ``>=2.12``
   :depends on perl: ``>=5.22.0``
   :depends on r-base: ``>=3.4.1``
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on samtools: ``>=1.3.1``

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

    pixi global install purge_haplotigs

to add into an existing workspace instead, run::

    pixi add purge_haplotigs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install purge_haplotigs

Alternatively, to install into a new environment, run::

    conda create -n envname purge_haplotigs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/purge_haplotigs:<tag>

(see `purge_haplotigs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_purge_haplotigs| image:: https://img.shields.io/conda/dn/bioconda/purge_haplotigs.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_haplotigs
   :alt:   (downloads)
.. |docker_purge_haplotigs| image:: https://quay.io/repository/biocontainers/purge_haplotigs/status
   :target: https://quay.io/repository/biocontainers/purge_haplotigs
.. _`purge_haplotigs/tags`: https://quay.io/repository/biocontainers/purge_haplotigs?tab=tags


.. raw:: html

    <script>
        var package = "purge_haplotigs";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_haplotigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_haplotigs/README.html