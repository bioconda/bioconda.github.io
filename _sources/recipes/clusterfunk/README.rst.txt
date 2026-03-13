:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterfunk'
.. highlight: bash

clusterfunk
===========

.. conda:recipe:: clusterfunk
   :replaces_section_title:
   :noindex:

   Miscellaneous clustering manipulation tools for phylogenetic trees

   :homepage: https://github.com/cov-ert/clusterfunk
   :license: MIT / MIT
   :recipe: /`clusterfunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterfunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterfunk/meta.yaml>`_

   


.. conda:package:: clusterfunk

   |downloads_clusterfunk| |docker_clusterfunk|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on chardet: ``>=3.0.4``
   :depends on dendropy: ``>=4.4.0``
   :depends on python: 
   :depends on scipy: ``>=1.4.1``

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

    pixi global install clusterfunk

to add into an existing workspace instead, run::

    pixi add clusterfunk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clusterfunk

Alternatively, to install into a new environment, run::

    conda create -n envname clusterfunk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clusterfunk:<tag>

(see `clusterfunk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clusterfunk| image:: https://img.shields.io/conda/dn/bioconda/clusterfunk.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterfunk
   :alt:   (downloads)
.. |docker_clusterfunk| image:: https://quay.io/repository/biocontainers/clusterfunk/status
   :target: https://quay.io/repository/biocontainers/clusterfunk
.. _`clusterfunk/tags`: https://quay.io/repository/biocontainers/clusterfunk?tab=tags


.. raw:: html

    <script>
        var package = "clusterfunk";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterfunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterfunk/README.html