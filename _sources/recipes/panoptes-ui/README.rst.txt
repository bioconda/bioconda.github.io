:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panoptes-ui'
.. highlight: bash

panoptes-ui
===========

.. conda:recipe:: panoptes-ui
   :replaces_section_title:
   :noindex:

   panoptes\: monitor computational workflows in real time

   :homepage: https://github.com/panoptes-organization/panoptes
   :license: MIT / MIT
   :recipe: /`panoptes-ui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui/meta.yaml>`_

   


.. conda:package:: panoptes-ui

   |downloads_panoptes-ui| |docker_panoptes-ui|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``

      

   
   :depends on flask: ``>=1.1.1``
   :depends on humanfriendly: ``>=4.18``
   :depends on marshmallow: ``>=3.0.1``
   :depends on pytest: ``>=5.3.0``
   :depends on python: 
   :depends on requests: ``>=2.22.0``
   :depends on sqlalchemy: ``>=1.3.7``

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

    pixi global install panoptes-ui

to add into an existing workspace instead, run::

    pixi add panoptes-ui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panoptes-ui

Alternatively, to install into a new environment, run::

    conda create -n envname panoptes-ui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panoptes-ui:<tag>

(see `panoptes-ui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panoptes-ui| image:: https://img.shields.io/conda/dn/bioconda/panoptes-ui.svg?style=flat
   :target: https://anaconda.org/bioconda/panoptes-ui
   :alt:   (downloads)
.. |docker_panoptes-ui| image:: https://quay.io/repository/biocontainers/panoptes-ui/status
   :target: https://quay.io/repository/biocontainers/panoptes-ui
.. _`panoptes-ui/tags`: https://quay.io/repository/biocontainers/panoptes-ui?tab=tags


.. raw:: html

    <script>
        var package = "panoptes-ui";
        var versions = ["0.2.3","0.2.2","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panoptes-ui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panoptes-ui/README.html