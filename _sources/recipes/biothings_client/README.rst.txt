:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biothings_client'
.. highlight: bash

biothings_client
================

.. conda:recipe:: biothings_client
   :replaces_section_title:
   :noindex:

   Python Client for BioThings API services.

   :homepage: https://github.com/biothings/biothings_client.py
   :license: BSD / BSD
   :recipe: /`biothings_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client/meta.yaml>`_

   


.. conda:package:: biothings_client

   |downloads_biothings_client| |docker_biothings_client|

   :versions:
      
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on python: 
   :depends on requests: ``>=2.3.0``

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

    pixi global install biothings_client

to add into an existing workspace instead, run::

    pixi add biothings_client

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biothings_client

Alternatively, to install into a new environment, run::

    conda create -n envname biothings_client

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biothings_client:<tag>

(see `biothings_client/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biothings_client| image:: https://img.shields.io/conda/dn/bioconda/biothings_client.svg?style=flat
   :target: https://anaconda.org/bioconda/biothings_client
   :alt:   (downloads)
.. |docker_biothings_client| image:: https://quay.io/repository/biocontainers/biothings_client/status
   :target: https://quay.io/repository/biocontainers/biothings_client
.. _`biothings_client/tags`: https://quay.io/repository/biocontainers/biothings_client?tab=tags


.. raw:: html

    <script>
        var package = "biothings_client";
        var versions = ["0.2.6","0.2.6","0.2.5","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biothings_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biothings_client/README.html