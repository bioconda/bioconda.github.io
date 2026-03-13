:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vqsr_cnn'
.. highlight: bash

vqsr_cnn
========

.. conda:recipe:: vqsr_cnn
   :replaces_section_title:
   :noindex:

   Variant quality score recalibration with Convolutional Neural Networks

   :homepage: https://broadinstitute.org/
   :license: MIT
   :recipe: /`vqsr_cnn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vqsr_cnn/meta.yaml>`_

   


.. conda:package:: vqsr_cnn

   |downloads_vqsr_cnn| |docker_vqsr_cnn|

   :versions:
      
      

      ``0.0.194-0``,  ``0.0.132-1``,  ``0.0.132-0``

      

   
   :depends on biopython: ``>=1.70``
   :depends on gatktool: 
   :depends on keras: ``>=2.0``
   :depends on matplotlib: ``>=2.1.2``
   :depends on numpy: ``>=1.13.1``
   :depends on pysam: ``>=0.13``
   :depends on python: 
   :depends on pyvcf: ``>=0.6.8``
   :depends on scikit-learn: ``>=0.19.1``
   :depends on scipy: ``>=0.19.1``
   :depends on tensorflow: 

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

    pixi global install vqsr_cnn

to add into an existing workspace instead, run::

    pixi add vqsr_cnn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vqsr_cnn

Alternatively, to install into a new environment, run::

    conda create -n envname vqsr_cnn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vqsr_cnn:<tag>

(see `vqsr_cnn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vqsr_cnn| image:: https://img.shields.io/conda/dn/bioconda/vqsr_cnn.svg?style=flat
   :target: https://anaconda.org/bioconda/vqsr_cnn
   :alt:   (downloads)
.. |docker_vqsr_cnn| image:: https://quay.io/repository/biocontainers/vqsr_cnn/status
   :target: https://quay.io/repository/biocontainers/vqsr_cnn
.. _`vqsr_cnn/tags`: https://quay.io/repository/biocontainers/vqsr_cnn?tab=tags


.. raw:: html

    <script>
        var package = "vqsr_cnn";
        var versions = ["0.0.194","0.0.132","0.0.132"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vqsr_cnn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vqsr_cnn/README.html