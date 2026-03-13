:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strmie-hd'
.. highlight: bash

strmie-hd
=========

.. conda:recipe:: strmie-hd
   :replaces_section_title:
   :noindex:

   Automated Huntington Disease polyQ pattern scanner.

   :homepage: https://github.com/mazzalab/STRmie-HD
   :documentation: https://mazzalab.github.io/STRmie-HD/
   
   :license: MIT / MIT
   :recipe: /`strmie-hd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strmie-hd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strmie-hd/meta.yaml>`_

   STRmie\-HD \(Short Tandem Repeat Mapping and Identification Engine \- Huntington\'s Disease\) is an interactive\, 
   Python\-based tool designed to support the curation\, visualization\, and interpretation of short tandem repeat \(STR\) 
   genotyping data obtained from Huntington\'s Disease \(HD\) patients. It enables the prediction\, refinement and validation 
   of CAG\/CCG repeat expansion results in the context of HD\, by highlighting cases of allelic instability or potential misclassification.



.. conda:package:: strmie-hd

   |downloads_strmie-hd| |docker_strmie-hd|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on colorama: 
   :depends on h5py: 
   :depends on jinja2: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pytest: 
   :depends on python: ``>=3.8``
   :depends on regex: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on xlrd: 

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

    pixi global install strmie-hd

to add into an existing workspace instead, run::

    pixi add strmie-hd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strmie-hd

Alternatively, to install into a new environment, run::

    conda create -n envname strmie-hd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strmie-hd:<tag>

(see `strmie-hd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strmie-hd| image:: https://img.shields.io/conda/dn/bioconda/strmie-hd.svg?style=flat
   :target: https://anaconda.org/bioconda/strmie-hd
   :alt:   (downloads)
.. |docker_strmie-hd| image:: https://quay.io/repository/biocontainers/strmie-hd/status
   :target: https://quay.io/repository/biocontainers/strmie-hd
.. _`strmie-hd/tags`: https://quay.io/repository/biocontainers/strmie-hd?tab=tags


.. raw:: html

    <script>
        var package = "strmie-hd";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strmie-hd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strmie-hd/README.html