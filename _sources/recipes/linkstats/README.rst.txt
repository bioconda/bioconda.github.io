:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkstats'
.. highlight: bash

linkstats
=========

.. conda:recipe:: linkstats
   :replaces_section_title:
   :noindex:

   Collect and process statistics from aligned linked\-reads.

   :homepage: https://github.com/wtsi-hpag/LinkStats
   :license: MIT / MIT
   :recipe: /`linkstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkstats/meta.yaml>`_

   


.. conda:package:: linkstats

   |downloads_linkstats| |docker_linkstats|

   :versions:
      
      

      ``0.1.3-6``,  ``0.1.3-5``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends on click: ``>=8.0.3``
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on matplotlib-base: ``>=3.5.1``
   :depends on numpy: ``>=1.22.0``
   :depends on pandas: ``>=1.3.5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on seaborn: ``>=0.11.2``
   :depends on tqdm: ``>=4.62.3``

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

    pixi global install linkstats

to add into an existing workspace instead, run::

    pixi add linkstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install linkstats

Alternatively, to install into a new environment, run::

    conda create -n envname linkstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/linkstats:<tag>

(see `linkstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_linkstats| image:: https://img.shields.io/conda/dn/bioconda/linkstats.svg?style=flat
   :target: https://anaconda.org/bioconda/linkstats
   :alt:   (downloads)
.. |docker_linkstats| image:: https://quay.io/repository/biocontainers/linkstats/status
   :target: https://quay.io/repository/biocontainers/linkstats
.. _`linkstats/tags`: https://quay.io/repository/biocontainers/linkstats?tab=tags


.. raw:: html

    <script>
        var package = "linkstats";
        var versions = ["0.1.3","0.1.3","0.1.3","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkstats/README.html