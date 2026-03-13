:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smncopynumbercaller'
.. highlight: bash

smncopynumbercaller
===================

.. conda:recipe:: smncopynumbercaller
   :replaces_section_title:
   :noindex:

   Call copy number of SMN1\, SMN2\, and SMN2Δ7–8 from a BAM file.

   :homepage: https://github.com/Illumina/SMNCopyNumberCaller
   :license: Apache License 2.0
   :recipe: /`smncopynumbercaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smncopynumbercaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smncopynumbercaller/meta.yaml>`_

   


.. conda:package:: smncopynumbercaller

   |downloads_smncopynumbercaller| |docker_smncopynumbercaller|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends on numpy: ``>=1.16``
   :depends on pysam: ``>=0.15.3``
   :depends on python: 
   :depends on reportlab: 
   :depends on scipy: ``>=1.2``
   :depends on statsmodels: ``>=0.9``

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

    pixi global install smncopynumbercaller

to add into an existing workspace instead, run::

    pixi add smncopynumbercaller

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smncopynumbercaller

Alternatively, to install into a new environment, run::

    conda create -n envname smncopynumbercaller

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smncopynumbercaller:<tag>

(see `smncopynumbercaller/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smncopynumbercaller| image:: https://img.shields.io/conda/dn/bioconda/smncopynumbercaller.svg?style=flat
   :target: https://anaconda.org/bioconda/smncopynumbercaller
   :alt:   (downloads)
.. |docker_smncopynumbercaller| image:: https://quay.io/repository/biocontainers/smncopynumbercaller/status
   :target: https://quay.io/repository/biocontainers/smncopynumbercaller
.. _`smncopynumbercaller/tags`: https://quay.io/repository/biocontainers/smncopynumbercaller?tab=tags


.. raw:: html

    <script>
        var package = "smncopynumbercaller";
        var versions = ["1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smncopynumbercaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smncopynumbercaller/README.html