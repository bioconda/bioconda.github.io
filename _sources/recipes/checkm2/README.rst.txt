:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkm2'
.. highlight: bash

checkm2
=======

.. conda:recipe:: checkm2
   :replaces_section_title:
   :noindex:

   Assessing the quality of metagenome\-derived genome bins using machine learning.

   :homepage: https://github.com/chklovski/CheckM2
   :license: GPL / GPL-3.0-only
   :recipe: /`checkm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm2/meta.yaml>`_

   


.. conda:package:: checkm2

   |downloads_checkm2| |docker_checkm2|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on diamond: ``2.1.11.*``
   :depends on keras: 
   :depends on lightgbm: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pandas: 
   :depends on prodigal: ``>=2.6.3``
   :depends on python: ``>3.12``
   :depends on requests: 
   :depends on scikit-learn: ``1.6.1.*``
   :depends on scipy: 
   :depends on tensorflow: ``2.17.*``
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

    pixi global install checkm2

to add into an existing workspace instead, run::

    pixi add checkm2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install checkm2

Alternatively, to install into a new environment, run::

    conda create -n envname checkm2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/checkm2:<tag>

(see `checkm2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_checkm2| image:: https://img.shields.io/conda/dn/bioconda/checkm2.svg?style=flat
   :target: https://anaconda.org/bioconda/checkm2
   :alt:   (downloads)
.. |docker_checkm2| image:: https://quay.io/repository/biocontainers/checkm2/status
   :target: https://quay.io/repository/biocontainers/checkm2
.. _`checkm2/tags`: https://quay.io/repository/biocontainers/checkm2?tab=tags


.. raw:: html

    <script>
        var package = "checkm2";
        var versions = ["1.1.0","1.1.0","1.0.2","1.0.1"];
    </script>





Notes
-----
CheckM2 requries the DIAMOND database that can be downloaded with \`checkm2 database \-\-download\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkm2/README.html