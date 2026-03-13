:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'propy3'
.. highlight: bash

propy3
======

.. conda:recipe:: propy3
   :replaces_section_title:
   :noindex:

   Python library for calculating various protein descriptors from protein sequences

   :homepage: https://github.com/MartinThoma/propy3
   :license: GPL / GPLv2
   :recipe: /`propy3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/propy3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/propy3/meta.yaml>`_

   


.. conda:package:: propy3

   |downloads_propy3| |docker_propy3|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends on python: ``>=3.6``
   :depends on urllib3: 

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

    pixi global install propy3

to add into an existing workspace instead, run::

    pixi add propy3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install propy3

Alternatively, to install into a new environment, run::

    conda create -n envname propy3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/propy3:<tag>

(see `propy3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_propy3| image:: https://img.shields.io/conda/dn/bioconda/propy3.svg?style=flat
   :target: https://anaconda.org/bioconda/propy3
   :alt:   (downloads)
.. |docker_propy3| image:: https://quay.io/repository/biocontainers/propy3/status
   :target: https://quay.io/repository/biocontainers/propy3
.. _`propy3/tags`: https://quay.io/repository/biocontainers/propy3?tab=tags


.. raw:: html

    <script>
        var package = "propy3";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/propy3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/propy3/README.html