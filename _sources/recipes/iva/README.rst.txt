:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iva'
.. highlight: bash

iva
===

.. conda:recipe:: iva
   :replaces_section_title:
   :noindex:

   Iterative Virus Assembler

   :homepage: https://github.com/sanger-pathogens/iva
   :license: GPL / GPLv3
   :recipe: /`iva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iva/meta.yaml>`_

   


.. conda:package:: iva

   |downloads_iva| |docker_iva|

   :versions:
      
      

      ``1.0.11-0``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends on kmc: 
   :depends on mummer: 
   :depends on networkx: ``>=1.7``
   :depends on packaging: 
   :depends on pyfastaq: ``>=3.10.0``
   :depends on pysam: ``>=0.8.1``
   :depends on python: ``>=3``
   :depends on samtools: 
   :depends on smalt: 

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

    pixi global install iva

to add into an existing workspace instead, run::

    pixi add iva

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iva

Alternatively, to install into a new environment, run::

    conda create -n envname iva

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iva:<tag>

(see `iva/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iva| image:: https://img.shields.io/conda/dn/bioconda/iva.svg?style=flat
   :target: https://anaconda.org/bioconda/iva
   :alt:   (downloads)
.. |docker_iva| image:: https://quay.io/repository/biocontainers/iva/status
   :target: https://quay.io/repository/biocontainers/iva
.. _`iva/tags`: https://quay.io/repository/biocontainers/iva?tab=tags


.. raw:: html

    <script>
        var package = "iva";
        var versions = ["1.0.11","1.0.9","1.0.9","1.0.9","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iva/README.html