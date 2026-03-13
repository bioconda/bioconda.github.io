:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maaslin'
.. highlight: bash

maaslin
=======

.. conda:recipe:: maaslin
   :replaces_section_title:
   :noindex:

   MaAsLin is a multivariate statistical framework that finds associations between clinical metadata and microbial community abundance or function.

   :homepage: https://huttenhower.sph.harvard.edu/maaslin
   :license: Custom
   :recipe: /`maaslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin/meta.yaml>`_

   


.. conda:package:: maaslin

   |downloads_maaslin| |docker_maaslin|

   :versions:
      
      

      ``0.05-0``,  ``0.04-1``,  ``0.04-0``,  ``0.0.5-2``,  ``0.0.5-1``

      

   
   :depends on r-agricolae: 
   :depends on r-base: ``>=3.5.1,<3.5.2.0a0``
   :depends on r-gam: 
   :depends on r-gamlss: 
   :depends on r-gbm: 
   :depends on r-glmnet: 
   :depends on r-inlinedocs: 
   :depends on r-logging: 
   :depends on r-optparse: 
   :depends on r-outliers: 
   :depends on r-penalized: 
   :depends on r-pscl: 
   :depends on r-robustbase: 

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

    pixi global install maaslin

to add into an existing workspace instead, run::

    pixi add maaslin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maaslin

Alternatively, to install into a new environment, run::

    conda create -n envname maaslin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maaslin:<tag>

(see `maaslin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maaslin| image:: https://img.shields.io/conda/dn/bioconda/maaslin.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin
   :alt:   (downloads)
.. |docker_maaslin| image:: https://quay.io/repository/biocontainers/maaslin/status
   :target: https://quay.io/repository/biocontainers/maaslin
.. _`maaslin/tags`: https://quay.io/repository/biocontainers/maaslin?tab=tags


.. raw:: html

    <script>
        var package = "maaslin";
        var versions = ["0.05","0.04","0.04","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin/README.html