:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sampei'
.. highlight: bash

sampei
======

.. conda:recipe:: sampei
   :replaces_section_title:
   :noindex:

   SAMPEI\, a searching method leveraging high quality query spectra within the same or different dataset to assign target spectra with peptide sequence and undefined modification \(mass shift\)

   :homepage: https://github.com/FenyoLab/SAMPEI
   :license: MIT / MIT License
   :recipe: /`sampei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sampei/meta.yaml>`_

   


.. conda:package:: sampei

   |downloads_sampei| |docker_sampei|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on numba: ``>=0.49.0``
   :depends on numpy: ``>=1.18.1``
   :depends on pandas: ``>=1.0.1``
   :depends on pyteomics: ``>=4.2``
   :depends on python: ``>=3.6``

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

    pixi global install sampei

to add into an existing workspace instead, run::

    pixi add sampei

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sampei

Alternatively, to install into a new environment, run::

    conda create -n envname sampei

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sampei:<tag>

(see `sampei/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sampei| image:: https://img.shields.io/conda/dn/bioconda/sampei.svg?style=flat
   :target: https://anaconda.org/bioconda/sampei
   :alt:   (downloads)
.. |docker_sampei| image:: https://quay.io/repository/biocontainers/sampei/status
   :target: https://quay.io/repository/biocontainers/sampei
.. _`sampei/tags`: https://quay.io/repository/biocontainers/sampei?tab=tags


.. raw:: html

    <script>
        var package = "sampei";
        var versions = ["0.0.9","0.0.8","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sampei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sampei/README.html