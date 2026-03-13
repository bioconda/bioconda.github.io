:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zorro'
.. highlight: bash

zorro
=====

.. conda:recipe:: zorro
   :replaces_section_title:
   :noindex:

   ZORRO is a probabilistic masking program that assigns confidence scores to each column in a multiple sequence alignment.

   :homepage: https://sourceforge.net/projects/probmask/
   :license: Apache / Apache License 2.0
   :recipe: /`zorro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro/meta.yaml>`_

   


.. conda:package:: zorro

   |downloads_zorro| |docker_zorro|

   :versions:
      
      

      ``2011.12.01-5``,  ``2011.12.01-4``,  ``2011.12.01-3``,  ``2011.12.01-2``,  ``2011.12.01-1``,  ``2011.12.01-0``

      

   
   :depends on fasttree: 
   :depends on libgcc: ``>=13``
   :depends on perl: 

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

    pixi global install zorro

to add into an existing workspace instead, run::

    pixi add zorro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zorro

Alternatively, to install into a new environment, run::

    conda create -n envname zorro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zorro:<tag>

(see `zorro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zorro| image:: https://img.shields.io/conda/dn/bioconda/zorro.svg?style=flat
   :target: https://anaconda.org/bioconda/zorro
   :alt:   (downloads)
.. |docker_zorro| image:: https://quay.io/repository/biocontainers/zorro/status
   :target: https://quay.io/repository/biocontainers/zorro
.. _`zorro/tags`: https://quay.io/repository/biocontainers/zorro?tab=tags


.. raw:: html

    <script>
        var package = "zorro";
        var versions = ["2011.12.01","2011.12.01","2011.12.01","2011.12.01","2011.12.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zorro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zorro/README.html