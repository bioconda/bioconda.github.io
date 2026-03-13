:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cvanmf'
.. highlight: bash

cvanmf
======

.. conda:recipe:: cvanmf
   :replaces_section_title:
   :noindex:

   Bi\-cross validation of NMF and signature generation and analysis

   :homepage: https://github.com/apduncan/cvanmf
   :license: GPL-2.0-only
   :recipe: /`cvanmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvanmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvanmf/meta.yaml>`_

   


.. conda:package:: cvanmf

   |downloads_cvanmf| |docker_cvanmf|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.1-0``

      

   
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on kneed: ``>=0.8.5,<0.9.0``
   :depends on marsilea: ``>=0.4.3,<0.5.0``
   :depends on multimethod: ``>=1.12.0,<2.0.0``
   :depends on pandas: ``>=2.1.4,<3.0.0``
   :depends on plotnine: ``>=0.13.0,<0.14.0``
   :depends on python: ``>=3.12.0,<4.0.0``
   :depends on pyyaml: ``>=6.0.1,<7.0.0``
   :depends on scikit-bio: ``>=0.6.0,<0.7.0``
   :depends on scikit-learn: ``>=1.3.2,<2.0.0``
   :depends on scikit-posthocs: ``>=0.9.0,<0.10.0``
   :depends on setuptools: ``>=69.1.1,<70.0.0``
   :depends on tqdm: ``>=4.66.1,<5.0.0``

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

    pixi global install cvanmf

to add into an existing workspace instead, run::

    pixi add cvanmf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cvanmf

Alternatively, to install into a new environment, run::

    conda create -n envname cvanmf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cvanmf:<tag>

(see `cvanmf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cvanmf| image:: https://img.shields.io/conda/dn/bioconda/cvanmf.svg?style=flat
   :target: https://anaconda.org/bioconda/cvanmf
   :alt:   (downloads)
.. |docker_cvanmf| image:: https://quay.io/repository/biocontainers/cvanmf/status
   :target: https://quay.io/repository/biocontainers/cvanmf
.. _`cvanmf/tags`: https://quay.io/repository/biocontainers/cvanmf?tab=tags


.. raw:: html

    <script>
        var package = "cvanmf";
        var versions = ["1.0.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cvanmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cvanmf/README.html