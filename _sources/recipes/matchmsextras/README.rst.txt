:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matchmsextras'
.. highlight: bash

matchmsextras
=============

.. conda:recipe:: matchmsextras
   :replaces_section_title:
   :noindex:

   Additional network analysis functions for matchms

   :homepage: https://github.com/matchms/matchmsextras
   :license: Apache-2.0
   :recipe: /`matchmsextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchmsextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matchmsextras/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1371/journal.pcbi.1008724`, doi: :doi:`https://doi.org/10.21105/joss.02411`

   


.. conda:package:: matchmsextras

   |downloads_matchmsextras| |docker_matchmsextras|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-0``

      

   
   :depends on matchms: ``>=0.11.0``
   :depends on networkx: 
   :depends on pandas: 
   :depends on pubchempy: 
   :depends on python: ``>=3.7``
   :depends on python-louvain: 
   :depends on spec2vec: 

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

    pixi global install matchmsextras

to add into an existing workspace instead, run::

    pixi add matchmsextras

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install matchmsextras

Alternatively, to install into a new environment, run::

    conda create -n envname matchmsextras

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/matchmsextras:<tag>

(see `matchmsextras/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_matchmsextras| image:: https://img.shields.io/conda/dn/bioconda/matchmsextras.svg?style=flat
   :target: https://anaconda.org/bioconda/matchmsextras
   :alt:   (downloads)
.. |docker_matchmsextras| image:: https://quay.io/repository/biocontainers/matchmsextras/status
   :target: https://quay.io/repository/biocontainers/matchmsextras
.. _`matchmsextras/tags`: https://quay.io/repository/biocontainers/matchmsextras?tab=tags


.. raw:: html

    <script>
        var package = "matchmsextras";
        var versions = ["0.4.2","0.4.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matchmsextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matchmsextras/README.html