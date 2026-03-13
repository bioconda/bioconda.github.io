:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beacon2-import'
.. highlight: bash

beacon2-import
==============

.. conda:recipe:: beacon2-import
   :replaces_section_title:
   :noindex:

   Seamlessly import and query genomic variant data from a beacon

   :homepage: https://pypi.org/project/beacon2-import/
   :license: CC-BY-NC-4.0
   :recipe: /`beacon2-import <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-import>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-import/meta.yaml>`_

   Effortlessly import genetic variants from targeted Galaxy histories or local repositories into your beacon instance with our utility. Simplify querying and analysis of genetic data\, enabling comprehensive genetic inquiries with ease


.. conda:package:: beacon2-import

   |downloads_beacon2-import| |docker_beacon2-import|

   :versions:
      
      

      ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends on bioblend: ``0.10.0.*``
   :depends on cyvcf2: 
   :depends on dataclasses: 
   :depends on jsonschema: 
   :depends on pymongo: 
   :depends on python: ``<3.12``

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

    pixi global install beacon2-import

to add into an existing workspace instead, run::

    pixi add beacon2-import

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beacon2-import

Alternatively, to install into a new environment, run::

    conda create -n envname beacon2-import

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beacon2-import:<tag>

(see `beacon2-import/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beacon2-import| image:: https://img.shields.io/conda/dn/bioconda/beacon2-import.svg?style=flat
   :target: https://anaconda.org/bioconda/beacon2-import
   :alt:   (downloads)
.. |docker_beacon2-import| image:: https://quay.io/repository/biocontainers/beacon2-import/status
   :target: https://quay.io/repository/biocontainers/beacon2-import
.. _`beacon2-import/tags`: https://quay.io/repository/biocontainers/beacon2-import?tab=tags


.. raw:: html

    <script>
        var package = "beacon2-import";
        var versions = ["2.2.4","2.2.3","2.2.2","2.2.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beacon2-import/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beacon2-import/README.html