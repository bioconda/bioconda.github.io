:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itolapi'
.. highlight: bash

itolapi
=======

.. conda:recipe:: itolapi
   :replaces_section_title:
   :noindex:

   API for interacting with itol.embl.de.

   :homepage: https://github.com/albertyw/itolapi
   :license: MIT / MIT
   :recipe: /`itolapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itolapi/meta.yaml>`_

   iTOL Python API for the Interactive Tree of Life \(iTOL\). Created by Albert Wang \(git at albertyw.com\) With Complements to\: \`iTOL \(Interactive Tree of Life\). This iTOL API allows local software to upload trees to iTOL using itol.py and export uploaded trees using itolexport.py using direct Python calls or through shell.  An active internet connection to the iTOL website is required.


.. conda:package:: itolapi

   |downloads_itolapi| |docker_itolapi|

   :versions:
      
      

      ``4.1.6-0``,  ``4.1.5-0``,  ``4.1.4-0``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``

      

   
   :depends on python: ``>=3.7``
   :depends on requests: ``>=2.0,<3.0``

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

    pixi global install itolapi

to add into an existing workspace instead, run::

    pixi add itolapi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install itolapi

Alternatively, to install into a new environment, run::

    conda create -n envname itolapi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/itolapi:<tag>

(see `itolapi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_itolapi| image:: https://img.shields.io/conda/dn/bioconda/itolapi.svg?style=flat
   :target: https://anaconda.org/bioconda/itolapi
   :alt:   (downloads)
.. |docker_itolapi| image:: https://quay.io/repository/biocontainers/itolapi/status
   :target: https://quay.io/repository/biocontainers/itolapi
.. _`itolapi/tags`: https://quay.io/repository/biocontainers/itolapi?tab=tags


.. raw:: html

    <script>
        var package = "itolapi";
        var versions = ["4.1.6","4.1.5","4.1.4","4.1.3","4.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itolapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itolapi/README.html