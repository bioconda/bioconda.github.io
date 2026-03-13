:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmash'
.. highlight: bash

cmash
=====

.. conda:recipe:: cmash
   :replaces_section_title:
   :noindex:

   Fast and accurate set similarity estimation via containment min hash \(for genomic datasets\).

   :homepage: https://github.com/dkoslicki/CMash
   :license: BSD / BSD-3-Clause
   :recipe: /`cmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.amc.2019.02.018`

   


.. conda:package:: cmash

   |downloads_cmash| |docker_cmash|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends on blist: 
   :depends on h5py: 
   :depends on hydra: 
   :depends on khmer: ``>=2.1.1``
   :depends on marisa-trie: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.14``
   :depends on pandas: ``>=0.21.1``
   :depends on pycairo: 
   :depends on python: 
   :depends on scipy: 
   :depends on screed: ``>=0.9``
   :depends on six: 

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

    pixi global install cmash

to add into an existing workspace instead, run::

    pixi add cmash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cmash

Alternatively, to install into a new environment, run::

    conda create -n envname cmash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cmash:<tag>

(see `cmash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cmash| image:: https://img.shields.io/conda/dn/bioconda/cmash.svg?style=flat
   :target: https://anaconda.org/bioconda/cmash
   :alt:   (downloads)
.. |docker_cmash| image:: https://quay.io/repository/biocontainers/cmash/status
   :target: https://quay.io/repository/biocontainers/cmash
.. _`cmash/tags`: https://quay.io/repository/biocontainers/cmash?tab=tags


.. raw:: html

    <script>
        var package = "cmash";
        var versions = ["0.5.2","0.5.1","0.5.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmash/README.html