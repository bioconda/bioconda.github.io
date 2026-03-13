:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge'
.. highlight: bash

mirge
=====

.. conda:recipe:: mirge
   :replaces_section_title:
   :noindex:

   comprehensive analysis of miRNA sequencing data

   :homepage: https://github.com/mhalushka/miRge
   :license: MIT License
   :recipe: /`mirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge/meta.yaml>`_

   


.. conda:package:: mirge

   |downloads_mirge| |docker_mirge|

   :versions:
      
      

      ``2.0.6-6``,  ``2.0.6-5``,  ``2.0.6-4``,  ``2.0.5-3``,  ``2.0.4-2``,  ``2.0.3-0``,  ``2.0-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on cutadapt: ``1.16``
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``<3``
   :depends on reportlab: 
   :depends on scikit-learn: 
   :depends on scipy: 

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

    pixi global install mirge

to add into an existing workspace instead, run::

    pixi add mirge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirge

Alternatively, to install into a new environment, run::

    conda create -n envname mirge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirge:<tag>

(see `mirge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirge| image:: https://img.shields.io/conda/dn/bioconda/mirge.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge
   :alt:   (downloads)
.. |docker_mirge| image:: https://quay.io/repository/biocontainers/mirge/status
   :target: https://quay.io/repository/biocontainers/mirge
.. _`mirge/tags`: https://quay.io/repository/biocontainers/mirge?tab=tags


.. raw:: html

    <script>
        var package = "mirge";
        var versions = ["2.0.6","2.0.6","2.0.6","2.0.5","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge/README.html