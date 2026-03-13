:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocompore'
.. highlight: bash

nanocompore
===========

.. conda:recipe:: nanocompore
   :replaces_section_title:
   :noindex:

   Nanocompore identifies raw signal changes between two conditions dRNA\-Seq data.

   :homepage: https://github.com/tleonardi/nanocompore
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`nanocompore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanocompore_db`

   


.. conda:package:: nanocompore

   |downloads_nanocompore| |docker_nanocompore|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0rc3.post2-2``,  ``1.0.0rc3.post2-0``,  ``1.0.0rc3.post1-0``

      

   
   :depends on bedparse: 
   :depends on importlib_metadata: 
   :depends on loguru: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.16.0``
   :depends on pandas: 
   :depends on pyfaidx: 
   :depends on python: ``>=3.6.1``
   :depends on pyyaml: 
   :depends on scikit-learn: ``0.21.*``
   :depends on scipy: ``>=1.2.0``
   :depends on seaborn: 
   :depends on statsmodels: ``>=0.9.0``
   :depends on tqdm: 

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

    pixi global install nanocompore

to add into an existing workspace instead, run::

    pixi add nanocompore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanocompore

Alternatively, to install into a new environment, run::

    conda create -n envname nanocompore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanocompore:<tag>

(see `nanocompore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanocompore| image:: https://img.shields.io/conda/dn/bioconda/nanocompore.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocompore
   :alt:   (downloads)
.. |docker_nanocompore| image:: https://quay.io/repository/biocontainers/nanocompore/status
   :target: https://quay.io/repository/biocontainers/nanocompore
.. _`nanocompore/tags`: https://quay.io/repository/biocontainers/nanocompore?tab=tags


.. raw:: html

    <script>
        var package = "nanocompore";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.0rc3.post2","1.0.0rc3.post2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocompore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocompore/README.html