:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigeifinder'
.. highlight: bash

shigeifinder
============

.. conda:recipe:: shigeifinder
   :replaces_section_title:
   :noindex:

   Cluster informed Shigella and EIEC serotyping tool from Illumina reads and assemblies

   :homepage: https://github.com/LanLab/ShigEiFinder
   :license: GPL3
   :recipe: /`shigeifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder/meta.yaml>`_

   


.. conda:package:: shigeifinder

   |downloads_shigeifinder| |docker_shigeifinder|

   :versions:
      
      

      ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends on blast: ``>=2.9.0``
   :depends on bwa: ``>=0.7.17``
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.10``

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

    pixi global install shigeifinder

to add into an existing workspace instead, run::

    pixi add shigeifinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shigeifinder

Alternatively, to install into a new environment, run::

    conda create -n envname shigeifinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shigeifinder:<tag>

(see `shigeifinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shigeifinder| image:: https://img.shields.io/conda/dn/bioconda/shigeifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/shigeifinder
   :alt:   (downloads)
.. |docker_shigeifinder| image:: https://quay.io/repository/biocontainers/shigeifinder/status
   :target: https://quay.io/repository/biocontainers/shigeifinder
.. _`shigeifinder/tags`: https://quay.io/repository/biocontainers/shigeifinder?tab=tags


.. raw:: html

    <script>
        var package = "shigeifinder";
        var versions = ["1.3.5","1.3.4","1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigeifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigeifinder/README.html