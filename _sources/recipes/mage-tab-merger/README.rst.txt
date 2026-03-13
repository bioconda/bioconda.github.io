:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mage-tab-merger'
.. highlight: bash

mage-tab-merger
===============

.. conda:recipe:: mage-tab-merger
   :replaces_section_title:
   :noindex:

   Utility scripts to merge SDRFs\, condensed SDRFs and IDFs \(MAGE\-Tab\) for meta\-analysis and othe purposes.

   :homepage: The package home page
   :documentation: https://github.com/ebi-gene-expression-group/MAGE-Tab-merger/blob/develop/README.md
   
   :developer docs: https://github.com/ebi-gene-expression-group/MAGE-Tab-merger
   :license: MIT / MIT
   :recipe: /`mage-tab-merger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mage-tab-merger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mage-tab-merger/meta.yaml>`_

   


.. conda:package:: mage-tab-merger

   |downloads_mage-tab-merger| |docker_mage-tab-merger|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends on jinja2: 
   :depends on networkx: ``2.5``
   :depends on pandas: 
   :depends on python: 
   :depends on requests: 

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

    pixi global install mage-tab-merger

to add into an existing workspace instead, run::

    pixi add mage-tab-merger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mage-tab-merger

Alternatively, to install into a new environment, run::

    conda create -n envname mage-tab-merger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mage-tab-merger:<tag>

(see `mage-tab-merger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mage-tab-merger| image:: https://img.shields.io/conda/dn/bioconda/mage-tab-merger.svg?style=flat
   :target: https://anaconda.org/bioconda/mage-tab-merger
   :alt:   (downloads)
.. |docker_mage-tab-merger| image:: https://quay.io/repository/biocontainers/mage-tab-merger/status
   :target: https://quay.io/repository/biocontainers/mage-tab-merger
.. _`mage-tab-merger/tags`: https://quay.io/repository/biocontainers/mage-tab-merger?tab=tags


.. raw:: html

    <script>
        var package = "mage-tab-merger";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mage-tab-merger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mage-tab-merger/README.html