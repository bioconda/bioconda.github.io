:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hclust2'
.. highlight: bash

hclust2
=======

.. conda:recipe:: hclust2
   :replaces_section_title:
   :noindex:

   hclust2 is a handy tool for plotting heat\-maps

   :homepage: https://github.com/SegataLab/hclust2
   :license: License
   :recipe: /`hclust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2/meta.yaml>`_

   


.. conda:package:: hclust2

   |downloads_hclust2| |docker_hclust2|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.99-3``,  ``0.99-2``,  ``0.99-1``,  ``0.99-0``,  ``0.98.3d589ab-1``,  ``0.98.3d589ab-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scipy: 

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

    pixi global install hclust2

to add into an existing workspace instead, run::

    pixi add hclust2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hclust2

Alternatively, to install into a new environment, run::

    conda create -n envname hclust2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hclust2:<tag>

(see `hclust2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hclust2| image:: https://img.shields.io/conda/dn/bioconda/hclust2.svg?style=flat
   :target: https://anaconda.org/bioconda/hclust2
   :alt:   (downloads)
.. |docker_hclust2| image:: https://quay.io/repository/biocontainers/hclust2/status
   :target: https://quay.io/repository/biocontainers/hclust2
.. _`hclust2/tags`: https://quay.io/repository/biocontainers/hclust2?tab=tags


.. raw:: html

    <script>
        var package = "hclust2";
        var versions = ["1.0.0","1.0.0","0.99","0.99","0.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hclust2/README.html