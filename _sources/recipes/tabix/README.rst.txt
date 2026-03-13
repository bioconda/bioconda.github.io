:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabix'
.. highlight: bash

tabix
=====

.. conda:recipe:: tabix
   :replaces_section_title:
   :noindex:

   C library and command line tools for high\-throughput sequencing data formats.

   :homepage: https://github.com/samtools/htslib
   :license: MIT
   :recipe: /`tabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix/meta.yaml>`_

   


.. conda:package:: tabix

   |downloads_tabix| |docker_tabix|

   :versions:
      
      

      ``1.11-0``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends on htslib: ``>=1.9``

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

    pixi global install tabix

to add into an existing workspace instead, run::

    pixi add tabix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tabix

Alternatively, to install into a new environment, run::

    conda create -n envname tabix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tabix:<tag>

(see `tabix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tabix| image:: https://img.shields.io/conda/dn/bioconda/tabix.svg?style=flat
   :target: https://anaconda.org/bioconda/tabix
   :alt:   (downloads)
.. |docker_tabix| image:: https://quay.io/repository/biocontainers/tabix/status
   :target: https://quay.io/repository/biocontainers/tabix
.. _`tabix/tags`: https://quay.io/repository/biocontainers/tabix?tab=tags


.. raw:: html

    <script>
        var package = "tabix";
        var versions = ["1.11","0.2.6","0.2.5","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabix/README.html