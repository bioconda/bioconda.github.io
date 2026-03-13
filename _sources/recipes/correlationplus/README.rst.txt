:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'correlationplus'
.. highlight: bash

correlationplus
===============

.. conda:recipe:: correlationplus
   :replaces_section_title:
   :noindex:

   A Python package to calculate\, visualize and analyze dynamical correlations of proteins.

   :homepage: https://github.com/tekpinar/correlationplus
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`correlationplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/correlationplus/meta.yaml>`_

   


.. conda:package:: correlationplus

   |downloads_correlationplus| |docker_correlationplus|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.6-0``

      

   
   :depends on matplotlib-base: 
   :depends on mdanalysis: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: 
   :depends on prody: 
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

    pixi global install correlationplus

to add into an existing workspace instead, run::

    pixi add correlationplus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install correlationplus

Alternatively, to install into a new environment, run::

    conda create -n envname correlationplus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/correlationplus:<tag>

(see `correlationplus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_correlationplus| image:: https://img.shields.io/conda/dn/bioconda/correlationplus.svg?style=flat
   :target: https://anaconda.org/bioconda/correlationplus
   :alt:   (downloads)
.. |docker_correlationplus| image:: https://quay.io/repository/biocontainers/correlationplus/status
   :target: https://quay.io/repository/biocontainers/correlationplus
.. _`correlationplus/tags`: https://quay.io/repository/biocontainers/correlationplus?tab=tags


.. raw:: html

    <script>
        var package = "correlationplus";
        var versions = ["0.2.1","0.2.0","0.2.0","0.1.9","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/correlationplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/correlationplus/README.html