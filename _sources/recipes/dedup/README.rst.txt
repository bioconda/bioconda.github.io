:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dedup'
.. highlight: bash

dedup
=====

.. conda:recipe:: dedup
   :replaces_section_title:
   :noindex:

   DeDup is a tool for read deduplication in paired\-end read merging \(e.g. for ancient DNA experiments\).

   :homepage: https://github.com/apeltzer/dedup
   :license: GPLv3
   :recipe: /`dedup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup/meta.yaml>`_

   


.. conda:package:: dedup

   |downloads_dedup| |docker_dedup|

   :versions:
      
      

      ``0.12.9-0``,  ``0.12.8-1``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-1``,  ``0.12.4-1``,  ``0.12.3-1``,  ``0.12.3-0``

      

   
   :depends on openjdk: 
   :depends on python: 

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

    pixi global install dedup

to add into an existing workspace instead, run::

    pixi add dedup

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dedup

Alternatively, to install into a new environment, run::

    conda create -n envname dedup

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dedup:<tag>

(see `dedup/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dedup| image:: https://img.shields.io/conda/dn/bioconda/dedup.svg?style=flat
   :target: https://anaconda.org/bioconda/dedup
   :alt:   (downloads)
.. |docker_dedup| image:: https://quay.io/repository/biocontainers/dedup/status
   :target: https://quay.io/repository/biocontainers/dedup
.. _`dedup/tags`: https://quay.io/repository/biocontainers/dedup?tab=tags


.. raw:: html

    <script>
        var package = "dedup";
        var versions = ["0.12.9","0.12.8","0.12.8","0.12.7","0.12.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dedup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dedup/README.html