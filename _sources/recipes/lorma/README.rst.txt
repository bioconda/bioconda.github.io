:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorma'
.. highlight: bash

lorma
=====

.. conda:recipe:: lorma
   :replaces_section_title:
   :noindex:

   LoRMA is a tool for correcting sequencing errors in long reads.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/LoRMA/
   :license: GNU Affero General Public License v3.0
   :recipe: /`lorma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorma/meta.yaml>`_

   


.. conda:package:: lorma

   |downloads_lorma| |docker_lorma|

   :versions:
      
      

      ``0.4-2``,  ``0.4-1``,  ``0.4-0``

      

   
   :depends on libgcc: 
   :depends on lordec: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install lorma

to add into an existing workspace instead, run::

    pixi add lorma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lorma

Alternatively, to install into a new environment, run::

    conda create -n envname lorma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lorma:<tag>

(see `lorma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lorma| image:: https://img.shields.io/conda/dn/bioconda/lorma.svg?style=flat
   :target: https://anaconda.org/bioconda/lorma
   :alt:   (downloads)
.. |docker_lorma| image:: https://quay.io/repository/biocontainers/lorma/status
   :target: https://quay.io/repository/biocontainers/lorma
.. _`lorma/tags`: https://quay.io/repository/biocontainers/lorma?tab=tags


.. raw:: html

    <script>
        var package = "lorma";
        var versions = ["0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorma/README.html