:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mfassignr'
.. highlight: bash

r-mfassignr
===========

.. conda:recipe:: r-mfassignr
   :replaces_section_title:
   :noindex:

   The MFAssignR package was designed for multi\-element molecular formula \(MF\)
   assignment of ultrahigh resolution mass spectrometry measurements.
   A number of tools for internal mass recalibration\, MF assignment\, signal\-to\-noise evaluation\,
   and unambiguous formula selections are provided. 


   :homepage: https://github.com/RECETOX/MFAssignR
   :license: GPL-3.0-or-later
   :recipe: /`r-mfassignr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mfassignr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mfassignr/meta.yaml>`_

   


.. conda:package:: r-mfassignr

   |downloads_r-mfassignr| |docker_r-mfassignr|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-colorramps: ``>=2.3``
   :depends on r-dplyr: ``>=0.7.6``
   :depends on r-ggplot2: ``>=3.0.0``
   :depends on r-gtools: ``>=3.9.5``
   :depends on r-tidyr: ``>=0.8.1``

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

    pixi global install r-mfassignr

to add into an existing workspace instead, run::

    pixi add r-mfassignr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mfassignr

Alternatively, to install into a new environment, run::

    conda create -n envname r-mfassignr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mfassignr:<tag>

(see `r-mfassignr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mfassignr| image:: https://img.shields.io/conda/dn/bioconda/r-mfassignr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mfassignr
   :alt:   (downloads)
.. |docker_r-mfassignr| image:: https://quay.io/repository/biocontainers/r-mfassignr/status
   :target: https://quay.io/repository/biocontainers/r-mfassignr
.. _`r-mfassignr/tags`: https://quay.io/repository/biocontainers/r-mfassignr?tab=tags


.. raw:: html

    <script>
        var package = "r-mfassignr";
        var versions = ["1.1.2","1.1.1","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mfassignr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mfassignr/README.html