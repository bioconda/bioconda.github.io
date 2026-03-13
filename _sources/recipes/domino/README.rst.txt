:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domino'
.. highlight: bash

domino
======

.. conda:recipe:: domino
   :replaces_section_title:
   :noindex:

   AMI algorithm with low rate of false calls

   :homepage: https://github.com/Shamir-Lab/DOMINO
   :license: MIT / MIT
   :recipe: /`domino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domino/meta.yaml>`_

   


.. conda:package:: domino

   |downloads_domino| |docker_domino|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on networkx: ``2.4.*``
   :depends on numpy: ``1.18.1.*``
   :depends on pandas: ``1.0.1.*``
   :depends on pcst-fast: ``1.0.7.*``
   :depends on python: ``>=3.6,<3.8``
   :depends on python-louvain: ``0.14.*``
   :depends on scipy: ``1.4.1.*``
   :depends on statsmodels: ``0.11.0.*``

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

    pixi global install domino

to add into an existing workspace instead, run::

    pixi add domino

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install domino

Alternatively, to install into a new environment, run::

    conda create -n envname domino

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/domino:<tag>

(see `domino/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_domino| image:: https://img.shields.io/conda/dn/bioconda/domino.svg?style=flat
   :target: https://anaconda.org/bioconda/domino
   :alt:   (downloads)
.. |docker_domino| image:: https://quay.io/repository/biocontainers/domino/status
   :target: https://quay.io/repository/biocontainers/domino
.. _`domino/tags`: https://quay.io/repository/biocontainers/domino?tab=tags


.. raw:: html

    <script>
        var package = "domino";
        var versions = ["1.0.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domino/README.html