:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzmine'
.. highlight: bash

mzmine
======

.. conda:recipe:: mzmine
   :replaces_section_title:
   :noindex:

   Integrative analysis of multimodal mass spectrometry data.

   :homepage: https://github.com/mzmine/mzmine
   :documentation: https://mzmine.github.io/mzmine_documentation
   
   :license: MIT / MIT
   :recipe: /`mzmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzmine/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`mzmine_batch`, biotools: :biotools:`mzmine`

   MZmine 3 is an open\-source and platform\-independent software for mass
   spectrometry \(MS\) data processing and visualization. It enables large\-scale
   metabolomics and lipidomics research by spectral preprocessing\, feature
   detection\, and various options for compound identification\, including
   spectral library querying and creation.



.. conda:package:: mzmine

   |downloads_mzmine| |docker_mzmine|

   :versions:
      
      

      ``4.7.29-0``,  ``4.7.27-0``,  ``4.7.8-0``,  ``3.9.0-0``,  ``3.6.0-0``

      

   
   :depends on openjdk: ``>=23``
   :depends on pango: 

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

    pixi global install mzmine

to add into an existing workspace instead, run::

    pixi add mzmine

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mzmine

Alternatively, to install into a new environment, run::

    conda create -n envname mzmine

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mzmine:<tag>

(see `mzmine/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mzmine| image:: https://img.shields.io/conda/dn/bioconda/mzmine.svg?style=flat
   :target: https://anaconda.org/bioconda/mzmine
   :alt:   (downloads)
.. |docker_mzmine| image:: https://quay.io/repository/biocontainers/mzmine/status
   :target: https://quay.io/repository/biocontainers/mzmine
.. _`mzmine/tags`: https://quay.io/repository/biocontainers/mzmine?tab=tags


.. raw:: html

    <script>
        var package = "mzmine";
        var versions = ["4.7.29","4.7.27","4.7.8","3.9.0","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzmine/README.html