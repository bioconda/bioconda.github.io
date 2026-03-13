:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokbert'
.. highlight: bash

prokbert
========

.. conda:recipe:: prokbert
   :replaces_section_title:
   :noindex:

   ProkBERT is a genomic language model specifically designed for microbiome applications. It leverages the power of machine learning to decipher complex microbial interactions\, predict functionalities\, and uncover novel patterns in extensive datasets. The ProkBERT model family\, built on transfer learning and self\-supervised methodologies\, capitalizes on the abundant genomic data available.

   :homepage: https://github.com/nbrg-ppcu/prokbert
   :documentation: https://prokbert.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`prokbert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokbert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokbert/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.11.09.566411`

   


.. conda:package:: prokbert

   |downloads_prokbert| |docker_prokbert|

   :versions:
      
      

      ``0.0.48-0``,  ``0.0.46-0``,  ``0.0.44-0``,  ``0.0.40-0``

      

   
   :depends on accelerate: ``>=0.20.1``
   :depends on biopython: 
   :depends on datasets: ``>=2.0.1``
   :depends on h5py: ``>=3.7.0``
   :depends on pandas: ``>=1.5.0``
   :depends on pytables: ``>=3.8.0``
   :depends on python: ``>=3.10``
   :depends on python-blosc2: 
   :depends on pytorch: 
   :depends on scikit-learn: ``>=1.2.2``
   :depends on scipy: ``>=1.10.1``
   :depends on torchvision: 
   :depends on transformers: ``>=4.23``

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

    pixi global install prokbert

to add into an existing workspace instead, run::

    pixi add prokbert

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prokbert

Alternatively, to install into a new environment, run::

    conda create -n envname prokbert

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prokbert:<tag>

(see `prokbert/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prokbert| image:: https://img.shields.io/conda/dn/bioconda/prokbert.svg?style=flat
   :target: https://anaconda.org/bioconda/prokbert
   :alt:   (downloads)
.. |docker_prokbert| image:: https://quay.io/repository/biocontainers/prokbert/status
   :target: https://quay.io/repository/biocontainers/prokbert
.. _`prokbert/tags`: https://quay.io/repository/biocontainers/prokbert?tab=tags


.. raw:: html

    <script>
        var package = "prokbert";
        var versions = ["0.0.48","0.0.46","0.0.44","0.0.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokbert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokbert/README.html