:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isocor'
.. highlight: bash

isocor
======

.. conda:recipe:: isocor
   :replaces_section_title:
   :noindex:

   A Isotope Correction for mass spectrometry labeling experiments

   :homepage: https://github.com/MetaSys-LISBP/IsoCor/
   :documentation: https://isocor.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`isocor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isocor/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz209`

   


.. conda:package:: isocor

   |downloads_isocor| |docker_isocor|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends on numpy: ``>=1.15``
   :depends on pandas: ``>=0.17.1``
   :depends on python: ``>=3.7``
   :depends on scipy: ``>=0.12.1``

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

    pixi global install isocor

to add into an existing workspace instead, run::

    pixi add isocor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isocor

Alternatively, to install into a new environment, run::

    conda create -n envname isocor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isocor:<tag>

(see `isocor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isocor| image:: https://img.shields.io/conda/dn/bioconda/isocor.svg?style=flat
   :target: https://anaconda.org/bioconda/isocor
   :alt:   (downloads)
.. |docker_isocor| image:: https://quay.io/repository/biocontainers/isocor/status
   :target: https://quay.io/repository/biocontainers/isocor
.. _`isocor/tags`: https://quay.io/repository/biocontainers/isocor?tab=tags


.. raw:: html

    <script>
        var package = "isocor";
        var versions = ["2.2.2","2.2.1","2.2.0","2.1.4","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isocor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isocor/README.html