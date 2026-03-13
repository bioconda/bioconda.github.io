:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ismapper'
.. highlight: bash

ismapper
========

.. conda:recipe:: ismapper
   :replaces_section_title:
   :noindex:

   A mapping\-based tool for identification of the site and orientation of IS insertions in bacterial genomes.

   :homepage: https://github.com/jhawkey/IS_mapper/
   :license: BSD
   :recipe: /`ismapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1860-2`

   


.. conda:package:: ismapper

   |downloads_ismapper| |docker_ismapper|

   :versions:
      
      

      ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-1``

      

   
   :depends on bedtools: ``>=2.20``
   :depends on biopython: ``>=1.63``
   :depends on blast: ``>=2.2.28``
   :depends on bwa: ``>=0.7.5a``
   :depends on python: ``>=3.6``
   :depends on samtools: ``>=0.1.19``

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

    pixi global install ismapper

to add into an existing workspace instead, run::

    pixi add ismapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ismapper

Alternatively, to install into a new environment, run::

    conda create -n envname ismapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ismapper:<tag>

(see `ismapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ismapper| image:: https://img.shields.io/conda/dn/bioconda/ismapper.svg?style=flat
   :target: https://anaconda.org/bioconda/ismapper
   :alt:   (downloads)
.. |docker_ismapper| image:: https://quay.io/repository/biocontainers/ismapper/status
   :target: https://quay.io/repository/biocontainers/ismapper
.. _`ismapper/tags`: https://quay.io/repository/biocontainers/ismapper?tab=tags


.. raw:: html

    <script>
        var package = "ismapper";
        var versions = ["2.0.2","2.0.2","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ismapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ismapper/README.html