:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grenedalf'
.. highlight: bash

grenedalf
=========

.. conda:recipe:: grenedalf
   :replaces_section_title:
   :noindex:

   Toolkit for Population Genetic Statistics from Pool\-Sequenced Samples\, e.g.\, in Evolve and Resequence experiments

   :homepage: https://github.com/lczech/grenedalf
   :documentation: https://github.com/lczech/grenedalf/wiki
   
   :license: GPL-3.0-only
   :recipe: /`grenedalf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grenedalf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grenedalf/meta.yaml>`_
   :links: arXiv: :arXiv:`2306.11622`

   grenedalf is a collection of commands for working with population genetic data\, in particular from pool sequencing.
   Its main focus are statistical analyses such as Tajima\'s D and Fst. The statistics follow the approaches of PoPoolation
   and PoPoolation2\, as well as poolfstat and npstat. However\, compared to those\, grenedalf is significantly more scalable\,
   more user friendly\, and offers more settings and input file formats.



.. conda:package:: grenedalf

   |downloads_grenedalf| |docker_grenedalf|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
   :depends on zlib: 

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

    pixi global install grenedalf

to add into an existing workspace instead, run::

    pixi add grenedalf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grenedalf

Alternatively, to install into a new environment, run::

    conda create -n envname grenedalf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grenedalf:<tag>

(see `grenedalf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grenedalf| image:: https://img.shields.io/conda/dn/bioconda/grenedalf.svg?style=flat
   :target: https://anaconda.org/bioconda/grenedalf
   :alt:   (downloads)
.. |docker_grenedalf| image:: https://quay.io/repository/biocontainers/grenedalf/status
   :target: https://quay.io/repository/biocontainers/grenedalf
.. _`grenedalf/tags`: https://quay.io/repository/biocontainers/grenedalf?tab=tags


.. raw:: html

    <script>
        var package = "grenedalf";
        var versions = ["0.6.3","0.6.2","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grenedalf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grenedalf/README.html