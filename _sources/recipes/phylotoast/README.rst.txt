:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylotoast'
.. highlight: bash

phylotoast
==========

.. conda:recipe:: phylotoast
   :replaces_section_title:
   :noindex:

   Tools for phylogenetic data analysis including visualization and cluster\-computing support. 

   :homepage: https://github.com/smdabdoub/phylotoast
   :license: MIT
   :recipe: /`phylotoast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast/meta.yaml>`_

   


.. conda:package:: phylotoast

   |downloads_phylotoast| |docker_phylotoast|

   :versions:
      
      

      ``1.4.0rc2-0``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends on biom-format: ``>=2.1.5``
   :depends on biopython: ``>=1.60``
   :depends on h5py: 
   :depends on matplotlib: ``<=1.5.3``
   :depends on numpy: 
   :depends on palettable: 
   :depends on pandas: 
   :depends on python: ``2.7*``
   :depends on scikit-bio: ``<=0.4.2``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on statsmodels: 

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

    pixi global install phylotoast

to add into an existing workspace instead, run::

    pixi add phylotoast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylotoast

Alternatively, to install into a new environment, run::

    conda create -n envname phylotoast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylotoast:<tag>

(see `phylotoast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylotoast| image:: https://img.shields.io/conda/dn/bioconda/phylotoast.svg?style=flat
   :target: https://anaconda.org/bioconda/phylotoast
   :alt:   (downloads)
.. |docker_phylotoast| image:: https://quay.io/repository/biocontainers/phylotoast/status
   :target: https://quay.io/repository/biocontainers/phylotoast
.. _`phylotoast/tags`: https://quay.io/repository/biocontainers/phylotoast?tab=tags


.. raw:: html

    <script>
        var package = "phylotoast";
        var versions = ["1.4.0rc2","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylotoast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylotoast/README.html