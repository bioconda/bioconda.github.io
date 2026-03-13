:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feature_merge'
.. highlight: bash

feature_merge
=============

.. conda:recipe:: feature_merge
   :replaces_section_title:
   :noindex:

   Merge features in GFF files

   :homepage: https://github.com/brinkmanlab/feature_merge
   :license: MIT / MIT
   :recipe: /`feature_merge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge/meta.yaml>`_

   


.. conda:package:: feature_merge

   |downloads_feature_merge| |docker_feature_merge|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on gffutils: ``>=0.9``
   :depends on pbr: 
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

    pixi global install feature_merge

to add into an existing workspace instead, run::

    pixi add feature_merge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install feature_merge

Alternatively, to install into a new environment, run::

    conda create -n envname feature_merge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/feature_merge:<tag>

(see `feature_merge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_feature_merge| image:: https://img.shields.io/conda/dn/bioconda/feature_merge.svg?style=flat
   :target: https://anaconda.org/bioconda/feature_merge
   :alt:   (downloads)
.. |docker_feature_merge| image:: https://quay.io/repository/biocontainers/feature_merge/status
   :target: https://quay.io/repository/biocontainers/feature_merge
.. _`feature_merge/tags`: https://quay.io/repository/biocontainers/feature_merge?tab=tags


.. raw:: html

    <script>
        var package = "feature_merge";
        var versions = ["1.3.0","1.2.1","1.2.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feature_merge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feature_merge/README.html