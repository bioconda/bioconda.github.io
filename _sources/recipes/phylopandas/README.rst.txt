:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylopandas'
.. highlight: bash

phylopandas
===========

.. conda:recipe:: phylopandas
   :replaces_section_title:
   :noindex:

   Pandas for phylogenetics

   :homepage: https://github.com/Zsailer/phylopandas
   :license: MIT / MIT
   :recipe: /`phylopandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylopandas/meta.yaml>`_

   


.. conda:package:: phylopandas

   |downloads_phylopandas| |docker_phylopandas|

   :versions:
      
      

      ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on biopython: 
   :depends on dendropy: 
   :depends on pandas: 
   :depends on pandas-flavor: 
   :depends on python: ``>3``

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

    pixi global install phylopandas

to add into an existing workspace instead, run::

    pixi add phylopandas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylopandas

Alternatively, to install into a new environment, run::

    conda create -n envname phylopandas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylopandas:<tag>

(see `phylopandas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylopandas| image:: https://img.shields.io/conda/dn/bioconda/phylopandas.svg?style=flat
   :target: https://anaconda.org/bioconda/phylopandas
   :alt:   (downloads)
.. |docker_phylopandas| image:: https://quay.io/repository/biocontainers/phylopandas/status
   :target: https://quay.io/repository/biocontainers/phylopandas
.. _`phylopandas/tags`: https://quay.io/repository/biocontainers/phylopandas?tab=tags


.. raw:: html

    <script>
        var package = "phylopandas";
        var versions = ["0.8.0","0.7.4","0.7.3","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylopandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylopandas/README.html