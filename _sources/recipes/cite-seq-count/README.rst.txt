:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cite-seq-count'
.. highlight: bash

cite-seq-count
==============

.. conda:recipe:: cite-seq-count
   :replaces_section_title:
   :noindex:

   A python package to map reads from CITE\-seq or hashing data for single cell experiments.

   :homepage: https://hoohm.github.io/CITE-seq-Count
   :developer docs: https://github.com/Hoohm/CITE-seq-Count
   :license: MIT / MIT
   :recipe: /`cite-seq-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cite-seq-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cite-seq-count/meta.yaml>`_
   :links: biotools: :biotools:`CITE-seq-Count`, usegalaxy-eu: :usegalaxy-eu:`cite_seq_count`, doi: :doi:`10.5281/zenodo.2590196`

   


.. conda:package:: cite-seq-count

   |downloads_cite-seq-count| |docker_cite-seq-count|

   :versions:
      
      

      ``1.4.5-0``,  ``1.4.4-0``

      

   
   :depends on multiprocess: ``>=0.70.6.1``
   :depends on pandas: ``>=0.23.4``
   :depends on pybktree: ``1.1``
   :depends on pytest: 
   :depends on pytest-dependency: 
   :depends on python: ``>=3.6``
   :depends on python-levenshtein: ``>=0.12.0``
   :depends on scipy: ``>=1.1.0``
   :depends on umi_tools: ``>=1.1.5``

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

    pixi global install cite-seq-count

to add into an existing workspace instead, run::

    pixi add cite-seq-count

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cite-seq-count

Alternatively, to install into a new environment, run::

    conda create -n envname cite-seq-count

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cite-seq-count:<tag>

(see `cite-seq-count/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cite-seq-count| image:: https://img.shields.io/conda/dn/bioconda/cite-seq-count.svg?style=flat
   :target: https://anaconda.org/bioconda/cite-seq-count
   :alt:   (downloads)
.. |docker_cite-seq-count| image:: https://quay.io/repository/biocontainers/cite-seq-count/status
   :target: https://quay.io/repository/biocontainers/cite-seq-count
.. _`cite-seq-count/tags`: https://quay.io/repository/biocontainers/cite-seq-count?tab=tags


.. raw:: html

    <script>
        var package = "cite-seq-count";
        var versions = ["1.4.5","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cite-seq-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cite-seq-count/README.html