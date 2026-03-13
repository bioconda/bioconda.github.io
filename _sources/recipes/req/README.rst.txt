:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'req'
.. highlight: bash

req
===

.. conda:recipe:: req
   :replaces_section_title:
   :noindex:

   Estimating the rate of elementary quartets \(REQ\) of each internal branch of a phylogenetic tree from a distance matrix

   :homepage: https://research.pasteur.fr/fr/tool/r%CE%B5q-assessing-branch-supports-o%C6%92-a-distance-based-phylogenetic-tree-with-the-rate-o%C6%92-elementary-quartets/
   :license: GPL / GPLv3
   :recipe: /`req <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/req>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/req/meta.yaml>`_

   


.. conda:package:: req

   |downloads_req| |docker_req|

   :versions:
      
      

      ``1.3.190304ac-1``,  ``1.3.190304ac-0``,  ``v1.3.190304ac-1``,  ``v1.3.190304ac-0``

      

   
   :depends on openjdk: ``>=8``

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

    pixi global install req

to add into an existing workspace instead, run::

    pixi add req

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install req

Alternatively, to install into a new environment, run::

    conda create -n envname req

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/req:<tag>

(see `req/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_req| image:: https://img.shields.io/conda/dn/bioconda/req.svg?style=flat
   :target: https://anaconda.org/bioconda/req
   :alt:   (downloads)
.. |docker_req| image:: https://quay.io/repository/biocontainers/req/status
   :target: https://quay.io/repository/biocontainers/req
.. _`req/tags`: https://quay.io/repository/biocontainers/req?tab=tags


.. raw:: html

    <script>
        var package = "req";
        var versions = ["1.3.190304ac","1.3.190304ac","v1.3.190304ac","v1.3.190304ac"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/req/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/req/README.html