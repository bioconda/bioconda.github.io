:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uscdc-datasets-sars-cov-2'
.. highlight: bash

uscdc-datasets-sars-cov-2
=========================

.. conda:recipe:: uscdc-datasets-sars-cov-2
   :replaces_section_title:
   :noindex:

   Benchmark datasets for WGS analysis of SARS\-CoV\-2

   :homepage: https://github.com/CDCgov/datasets-sars-cov-2
   :license: Apache-2.0
   :recipe: /`uscdc-datasets-sars-cov-2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscdc-datasets-sars-cov-2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uscdc-datasets-sars-cov-2/meta.yaml>`_

   


.. conda:package:: uscdc-datasets-sars-cov-2

   |downloads_uscdc-datasets-sars-cov-2| |docker_uscdc-datasets-sars-cov-2|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.5.3-0``,  ``0.4-0``,  ``0.3-0``

      

   
   :depends on coreutils: 
   :depends on entrez-direct: 
   :depends on make: 
   :depends on perl: 
   :depends on sra-tools: 
   :depends on wget: 

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

    pixi global install uscdc-datasets-sars-cov-2

to add into an existing workspace instead, run::

    pixi add uscdc-datasets-sars-cov-2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install uscdc-datasets-sars-cov-2

Alternatively, to install into a new environment, run::

    conda create -n envname uscdc-datasets-sars-cov-2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/uscdc-datasets-sars-cov-2:<tag>

(see `uscdc-datasets-sars-cov-2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_uscdc-datasets-sars-cov-2| image:: https://img.shields.io/conda/dn/bioconda/uscdc-datasets-sars-cov-2.svg?style=flat
   :target: https://anaconda.org/bioconda/uscdc-datasets-sars-cov-2
   :alt:   (downloads)
.. |docker_uscdc-datasets-sars-cov-2| image:: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2/status
   :target: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2
.. _`uscdc-datasets-sars-cov-2/tags`: https://quay.io/repository/biocontainers/uscdc-datasets-sars-cov-2?tab=tags


.. raw:: html

    <script>
        var package = "uscdc-datasets-sars-cov-2";
        var versions = ["0.7.2","0.7.1","0.7","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uscdc-datasets-sars-cov-2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uscdc-datasets-sars-cov-2/README.html