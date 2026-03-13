:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bctools'
.. highlight: bash

bctools
=======

.. conda:recipe:: bctools
   :replaces_section_title:
   :noindex:

   Tools for handling barcodes in NGS data.

   :homepage: https://github.com/dmaticzka/bctools
   :license: Apache 2.0
   :recipe: /`bctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools/meta.yaml>`_

   


.. conda:package:: bctools

   |downloads_bctools| |docker_bctools|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on datamash: 
   :depends on future: 
   :depends on perl: 
   :depends on pybedtools: 

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

    pixi global install bctools

to add into an existing workspace instead, run::

    pixi add bctools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bctools

Alternatively, to install into a new environment, run::

    conda create -n envname bctools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bctools:<tag>

(see `bctools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bctools| image:: https://img.shields.io/conda/dn/bioconda/bctools.svg?style=flat
   :target: https://anaconda.org/bioconda/bctools
   :alt:   (downloads)
.. |docker_bctools| image:: https://quay.io/repository/biocontainers/bctools/status
   :target: https://quay.io/repository/biocontainers/bctools
.. _`bctools/tags`: https://quay.io/repository/biocontainers/bctools?tab=tags


.. raw:: html

    <script>
        var package = "bctools";
        var versions = ["0.2.2","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bctools/README.html