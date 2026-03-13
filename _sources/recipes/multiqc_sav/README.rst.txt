:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc_sav'
.. highlight: bash

multiqc_sav
===========

.. conda:recipe:: multiqc_sav
   :replaces_section_title:
   :noindex:

   MultiQC plugin to visualize Illumina SAV plots

   :homepage: http://multiqc.info
   :license: GPL3
   :recipe: /`multiqc_sav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav/meta.yaml>`_

   


.. conda:package:: multiqc_sav

   |downloads_multiqc_sav| |docker_multiqc_sav|

   :versions:
      
      

      ``0.2.0-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on illumina-interop: ``>=1.7.0,<2``
   :depends on multiqc: ``>=1.25``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 

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

    pixi global install multiqc_sav

to add into an existing workspace instead, run::

    pixi add multiqc_sav

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install multiqc_sav

Alternatively, to install into a new environment, run::

    conda create -n envname multiqc_sav

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/multiqc_sav:<tag>

(see `multiqc_sav/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_multiqc_sav| image:: https://img.shields.io/conda/dn/bioconda/multiqc_sav.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc_sav
   :alt:   (downloads)
.. |docker_multiqc_sav| image:: https://quay.io/repository/biocontainers/multiqc_sav/status
   :target: https://quay.io/repository/biocontainers/multiqc_sav
.. _`multiqc_sav/tags`: https://quay.io/repository/biocontainers/multiqc_sav?tab=tags


.. raw:: html

    <script>
        var package = "multiqc_sav";
        var versions = ["0.2.0","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc_sav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc_sav/README.html