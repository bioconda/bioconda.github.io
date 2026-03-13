:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'favites_lite'
.. highlight: bash

favites_lite
============

.. conda:recipe:: favites_lite
   :replaces_section_title:
   :noindex:

   FAVITES\-Lite\: A lightweight framework for viral transmission and evolution simulation

   :homepage: https://github.com/niemasd/FAVITES-Lite
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`favites_lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/favites_lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/favites_lite/meta.yaml>`_

   


.. conda:package:: favites_lite

   |downloads_favites_lite| |docker_favites_lite|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on coatran: 
   :depends on gemf_favites: 
   :depends on niemagraphgen: 
   :depends on numpy: 
   :depends on python: ``>=3.7``
   :depends on scipy: 
   :depends on seq-gen: 
   :depends on treesap: 
   :depends on treeswift: 

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

    pixi global install favites_lite

to add into an existing workspace instead, run::

    pixi add favites_lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install favites_lite

Alternatively, to install into a new environment, run::

    conda create -n envname favites_lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/favites_lite:<tag>

(see `favites_lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_favites_lite| image:: https://img.shields.io/conda/dn/bioconda/favites_lite.svg?style=flat
   :target: https://anaconda.org/bioconda/favites_lite
   :alt:   (downloads)
.. |docker_favites_lite| image:: https://quay.io/repository/biocontainers/favites_lite/status
   :target: https://quay.io/repository/biocontainers/favites_lite
.. _`favites_lite/tags`: https://quay.io/repository/biocontainers/favites_lite?tab=tags


.. raw:: html

    <script>
        var package = "favites_lite";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/favites_lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/favites_lite/README.html