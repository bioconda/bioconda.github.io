:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubmlst_client'
.. highlight: bash

pubmlst_client
==============

.. conda:recipe:: pubmlst_client
   :replaces_section_title:
   :noindex:

   List and download schemes from pubMLST.org

   :homepage: https://github.com/Public-Health-Bioinformatics/pubmlst_client
   :license: MIT
   :recipe: /`pubmlst_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubmlst_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubmlst_client/meta.yaml>`_

   


.. conda:package:: pubmlst_client

   |downloads_pubmlst_client| |docker_pubmlst_client|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install pubmlst_client

to add into an existing workspace instead, run::

    pixi add pubmlst_client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pubmlst_client

Alternatively, to install into a new environment, run::

    conda create -n envname pubmlst_client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pubmlst_client:<tag>

(see `pubmlst_client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pubmlst_client| image:: https://img.shields.io/conda/dn/bioconda/pubmlst_client.svg?style=flat
   :target: https://anaconda.org/bioconda/pubmlst_client
   :alt:   (downloads)
.. |docker_pubmlst_client| image:: https://quay.io/repository/biocontainers/pubmlst_client/status
   :target: https://quay.io/repository/biocontainers/pubmlst_client
.. _`pubmlst_client/tags`: https://quay.io/repository/biocontainers/pubmlst_client?tab=tags


.. raw:: html

    <script>
        var package = "pubmlst_client";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubmlst_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubmlst_client/README.html